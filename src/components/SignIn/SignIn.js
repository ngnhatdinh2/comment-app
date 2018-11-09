import React, { Component } from 'react';
import './style.css';
class SignIn extends Component {
	constructor(props){
		super(props);
		this.state={
			
		};
	}
	render(){
		return(
			<div id="signin">
				<div id="left">
					<div className="signin-content">
						<img src="https://ustvstaticcdn1-a.akamaihd.net//v6/images/static/brand-guidelines/ustream-logo-white.png?201205251501" alt="logo" />
						<form id="signin-form">
							<div>
								<label>Username </label>
								<input type="text" name="username"/>
							</div>
							<div>
								<label>Password </label>
								<input type="password" />
							</div>
							<button type="submit" className="primary-btn">Sign In</button>
						</form>
						<a href="#">Forgot Password</a>
						<a href="#" className="secondary-btn">Create an account</a>

						<footer id="signin-footer">
          					<p>Copyright &copy; 2018, Sluralpright All Rights Reserved</p>
          					<div>
				            	<a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
				         	</div>
			        	</footer>
					</div>
				</div>
				<div id="right">
					<p>ditMe</p>
				</div>
			</div>
		)
	}
}
export default SignIn;