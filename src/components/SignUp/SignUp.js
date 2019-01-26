import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo.js';
import UserInfo from './UserInfo.js';
import SuccessfulSignUp from './SuccessSignUp.js';
import base from '../Base/Base';
import uuidv1 from 'uuid/v1';
import {BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile'
import './style.css';
class SignUp extends Component {
	componentWillMount(){
	}
	constructor(props){
		super(props);
		this.state={
			step: 1,
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
	componentWillUnmount(){
		//base.removeBinding(this.ref);
	}
	// attemp to
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
				}
		}).then(()=>{
			UserProfile.setName(username);
			UserProfile.signIn();
			console.log(UserProfile, 'COME HERE', this.state);
			//this.props.history.push('/news');
			}
		)
		.catch( (e) => console.log(e) )
	}
	handleUserInfoSubmit=()=>{
		if(!this.validateUserInfo()){
			alert('UserInfo Wrong Input Fomat');
		}
		else{
			// use Bitmap for this mf
			if(this.props.authenticate(this.state)){
				this.addNewUser();
			}
			else{

			}
			this.setState({
				step: this.state.step + 1
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
		// validate creditCard while typing ...
		if(input === 'creditCard'){
			const temp = value[value.length-1];
			if(temp<'0'||temp>'9'){
				return;
			}
		}

		// validate phone while typing ...
		if(input === 'phone'){
			const temp = value[value.length-1];
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
		if(this.state.username.length < 4)
		{
			isFailed = 1;
			console.log('username fails');
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
		const { isSignedIn, signIn, refTo } = this.props;
		if( this.state.error ){
			return(<Redirect to="/signup" />)
		}
		let renderRoute = null;
		switch(step){
			case 1:
				renderRoute=(
					<PersonalInfo
						nextStep={this.handlePersonInfoSubmit}
						handleChange={this.handleChange}
						values={this.state}
					/>
				)
			break;
			case 2:
				renderRoute=(
					<UserInfo
						nextStep={this.handleUserInfoSubmit}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={this.state}
					/>
				)
			break;
			case 3:
				renderRoute=(
					<SuccessfulSignUp />
				)
			break;
			default:
				renderRoute=(
					<h1>Opps.. something wrong happened</h1>
				)
			break;
		}
		return(renderRoute)
	}
}
export default withRouter(SignUp);
