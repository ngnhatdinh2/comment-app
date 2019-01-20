import React, { Component } from 'react';
//import CommentsContainer from './components/CommentsContainer/CommentsContainer';
import Test from './components/Test/Test';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import base from './components/Base/Base';
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
		    this.setState({users: users})
		  }).catch(error => {
		    console.log('error')
		  })
	}
	componentWillUnmount(){
		base.removeBinding(this.ref);
	}
	fakeSignUpAuth=({email, name, username, phone})=>{
		const user = this.state.users.find(user=>
			user.email === email ||
			user.name === name ||
			user.username === username ||
			user.phone === phone
		);
		if(user){
			return 0;
		}
		else{
			return 1;
		}
	}
	fakeAuthentication=(username, password)=>{
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
	        {/*<CommentsContainer name='nguyennhatdinh' postId={1}/>*/}
	        <Route path="/signin" render={() => (
			    <SignIn 
			    	isSignedIn={this.state.isSignedIn}
			    	authenticate={this.fakeAuthentication}
			    	refTo={'/news'}
			    />
			   )}
	        />
			<Route path="/signup" 
				render={() => (
			    	<SignUp
			    		signIn={this.fakeAuthentication} 
			    		isSignedIn={this.state.isSignedIn}
			    		authenticate={this.fakeSignUpAuth}
			    		refTo={'/news'}
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
					username={curUser} 
					signOut={this.handleSignOut}
					isSignedIn={isSignedIn}
					/>} 
			/>
			<Route path='/news' render={()=>
				<Home
					isSignedIn={isSignedIn} 
					username={curUser} 
					signOut={this.handleSignOut}
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
