import React, { Component } from 'react';
//import CommentsContainer from './components/CommentsContainer/CommentsContainer';
import Test from './components/Test/Test';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import base from './components/Base/Base';
import UserProfile from './components/UserProfile/UserProfile';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

class CommentApp extends Component {
	constructor(props){
		super(props);
		this.state={
			users: null,
			isSignedIn: false,
			curUser: 'unknown',
		}
	}
	componentDidMount(){
		this.ref = base.fetch('users', {
		    context: this,
		    asArray: true
		  }).then(users => {
		    this.setState({users: users});
		  }).catch(error => {
		    console.log('error')
		  })
	}
	componentWillUnmount(){
		base.removeBinding(this.ref);
	}
	fakeSignUpAuth=({email, name, username, phone})=>{
		const user = this.state.users.find(user=>
			user.username === username &&
			user.phone === phone
		);
		if(user){
			return 0;
		}
		else{
			return 1;
		}
	}
	handleGoogleAuth(username){
		this.setState({
			isSignedIn: true,
			curUser: username
		})
	}
	signInAuthentication=(username, password)=>{
		const user = this.state.users.find(user=> user.username === username && user.password === password);
		if (!user){
			return 0;
		}
		else{
			this.setState({
				isSignedIn: 1,
				curUser: user.username
			})
			return 1;
		}
	}
	handleSignOut=()=>{
		this.setState((prevState)=>{
			return {
				isSignedIn: !prevState.isSignedIn,
				curUser: 'unknown'
			};
		})
	}
  render() {
  	let { isSignedIn, curUser } = this.state;
	    return (
	    <BrowserRouter>
	    <div>
	      <Switch>
	        <Route path="/signin" render={() => (
				    <SignIn
					    authenticate={this.signInAuthentication}
				    />
			   )}
	        />
			<Route path="/signup"
				render={() => (
			    	<SignUp
			    		authenticate={this.fakeSignUpAuth}
			    	/>
			    )}
	        />
{/*
			<Route path='/dashboard'
				render={()=>(
					isSignedIn ?
					<Dashboard
						name={this.state.curUser}
					/>
					:
					<Redirect to="/signin" />
				)}
			/>*/}
			<Route path='/contact' component={Contact} />
			<Route path='/forgot-password' component={ForgotPassword} />
			<Route path='/' exact render={()=>
				<Home
					handleGoogleAuth={this.handleGoogleAuth}
					/>}
			/>
			<Route path='/news' render={()=>
				<Home
					handleGoogleAuth={this.handleGoogleAuth}
				/>}
			/>
			<Route path="/test" component={Test} />
			<Route component={NoMatch} />
	      </Switch>
	    </div>
	    </BrowserRouter>
    );
  }
}
const NavBar =()=>{
	return(
		<div className="nav-bar">
			<h1>Blog</h1>
			<button>SignIn</button>
			<button>SignOut</button>
		</div>
	)
}
const ComponentWithRegex =({match}) => {
	console.log(match);
	return(<h1>ComponentWithRegex</h1>)
}
const Child =({match}) => {
	console.log(match);
	return(<h1>Child</h1>)
}
const NoMatch = () => (<h1>404!!! Page Not Found</h1>)
const Contact =() => (<h1> Contact </h1>);
const ForgotPassword =() => (<h1> forgot-password </h1>);

export default CommentApp;
