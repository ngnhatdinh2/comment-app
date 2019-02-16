import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import UserProfile from '../UserProfile/UserProfile';
import './style.css';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password: '',
		};
	}
	renderHomePageAfterSignIn=()=>
			<Redirect to="/home" />

	signIn=({history}) =>{
		const isSuccessful = this.props.authenticate(this.state.username, this.state.password);
		if(!isSuccessful){
			alert('Wrong Password or Username');
			this.setState({
				username:'',
				password: '',
			});
		}
		else{
			UserProfile.signIn();
			UserProfile.setName(this.state.username);
			this.props.history.push('/news');
		}
	}
	handleChange = input => e =>{
		const value = e.target.value;
		this.setState({[input]: value});
	}
	render(){
		return(
			<div id="signin">
				<div id="left">
					<div className="signin-content">
						<img src="https://static.thenounproject.com/png/43388-200.png" alt="logo" />
						<form id="signin-form">
							<div>
								<label>Username </label>
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleChange('username')}
								/>
							<div>
							</div>
								<label>Password </label>
								<input
									type="password"
									value={this.state.password}
									onChange={this.handleChange('password')}
								/>
							</div>
							<button
								className="primary-btn"
								onClick={this.signIn}
							>
								Sign In
							</button>
						</form>
						<a href="/forgot-password">Forgot Password</a>
						<a href="/signup" className="secondary-btn">Create an account</a>
					</div>
					<footer id="signin-footer">
          					<p>Copyright &copy; 2018, All Rights Service</p>
          					<div>
				            	<a href="/terms">Terms of use</a> | <a href="/privacies">Privacy Policy</a>
				         	</div>
			        </footer>
				</div>
				<div id="right">
					<h1>WalCum ta de Wurld</h1>
					<a href="/docs">Docs</a>
					<a href="/contact">Contact</a>
				</div>
			</div>
		)
	}
}
export default withRouter(SignIn);
