import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo.js';
import UserInfo from './PersonalDetails.js';
import SuccessSignUp from './SuccessSignUp.js';
import base from '../Base/Base';
import uuidv1 from 'uuid/v1';
import './style.css';
class SignUp extends Component {
	componentWillMount(){
		base.syncState('username', {
    	context: this,
    	state: 'username',
  	});
	}
	componentWillUnmount(){
		base.removeBinding(this.ref);
	}
	constructor(props){
		super(props);
		this.state={ 
			step: 2,
			email: '',
			name: '',
			country: '',
			password: '',
			phone: '',
			creditCard: '',
			confirmPassword: '',
			username: '',
			
			error: 0
		};
	}
	addNewUser=()=>{
		const { email, name, country, password, phone, creditCard, username } = this.state;
		base.post(`users/${uuidv1()}`, {
		    data: {
			    	email,
					name,
					country,
					password,
					phone,
					creditCard,
					username,
			},
		    then(err){
		      if(!err){
		        console.log('Posted');
		      }
		    }
  		});
/*		const user={
				email,
				name,
				country,
				password,
				phone,
				creditCard,
				username,
		};*/
	}
	handleUserInfoSubmit=()=>{
		const step = this.state.step;
		if(!this.validateUserInfo()){
			alert('Wrong Input Fomat');
		}
		else{
			this.addNewUser();
			this.setState({
				step: step + 1
			});
		}
	}
	handlePersonInfoSubmit=()=>{
		const step = this.state.step;
		if(!this.validatePersonInfo()){
			alert('Wrong Input Fomat');
		}
		else{
			this.setState({
				step: step + 1
			});
		}
	}
	prevStep=()=>{
		const step = this.state.step;
		this.setState({
			step: step - 1
		});
	}
	handleChange= input => e =>{
		const value = e.target.value;
		const temp = value[value.length-1];

		// validate creditCard while typing ...
		if(input === 'creditCard'){
			if(temp<'0'||temp>'9'){
				return;
			}
		}

		// validate phone while typing ...
		if(input === 'phone'){
			if((temp<'0'||temp>'9')&& temp !== '+'){
				return;
			}
		}

		this.setState({[input]: value});

	}
	// Have not validated username yet, 'cause ain't implemented a server
	isStrongPassword=(pass)=>{
		let containsNumber=0;
		let containsUpper=0;
		if(pass.length < 8 ){
			return 0;
		}

		pass.forEach(
				c =>{
					if(c>='0'&&c<='9'){
						containsNumber = 1;
					}
					if(c>='A' && c<= 'Z'){
						containsUpper = 1;
					}
				}
		)
		return containsNumber && containsUpper;
	}
	validatePersonInfo=()=>{
		let isFailed = 0;
		// we have a isStrongPassword above, go n take it, u r welcome
		let { name, country, phone, creditCard } = this.state;
		name.trim();
		country.trim();
		if(phone.length < 4){
			isFailed = 1;
			phone = '';
		}
		if(!name || !country){
			isFailed = 1;
		}
		this.setState({
			name, 
			country,
			phone,
			creditCard
		})
		if(isFailed){
			return 0;
		}
		return 1;
	}
	validateUserInfo=()=>{
		let isFailed = 0;
		// we have a isStrongPassword above, go n take it, u r welcome
		if(this.state.password.length < 4){
			isFailed = 1;
		}
		if( this.state.password !== this.state.confirmPassword ){
			isFailed = 1;
		}
		if(this.state.email.includes('@') !== 1)
		{
			isFailed = 1;
			this.setState({
				email: ''
			});
		}
		if(this.state.username.length < 4)
		{
			isFailed = 1;
			this.setState({
				username: ''
			});
		}
		if(isFailed){
			this.setState({
				password: '', 
				confirmPassword: '',
			});
			return 0;
		}
		return 1;
	}
	render(){	
		let { step } = this.state;
		// let user= this.state.user;
		switch(step){
			case 1:
				return(
					<PersonalInfo 
						nextStep={this.handlePersonInfoSubmit}
						handleChange={this.handleChange}
						values={this.state}
					/>
				)
			break;
			case 2:
				return(
					<UserInfo 
						nextStep={this.handleUserInfoSubmit}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={this.state}
					/>
				)
			break;
			case 3:
				return(
					<SuccessSignUp />
				)
			break;
			default:
				return(
					<h1>Opps.. something wrong happened</h1>
				)
			break;
		}
	}
}
export default SignUp;