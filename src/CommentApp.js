import React, { Component } from 'react';
//import CommentsContainer from './components/CommentsContainer/CommentsContainer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

/*const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};*/

class CommentApp extends Component {
	constructor(props){
		super(props);
		this.state={
			isSignedIn: false,
			curUser: 'unknown',
		}
	}
	componentDidMount(){

	}
	handleSignOut=()=>{
		this.setState((prevState)=>{
			return {
				isSignedIn: !prevState.isSignedIn,
				curUser: 'unknown'
			};
		})
	}
	handleSignIn=(usr,pass)=>{
		// do dome fake validations
		if(usr === 'admin' && pass === 'admin'){
			this.setState({
				isSignedIn: 1,
				curUser: 'admin'
			})
			return 1;
		}
		return 0;
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
			    	signIn={this.handleSignIn} 
			    	isSignedIn={this.state.isSignedIn}
			    	refTo={'/news'}
			    />
			   )}
	        />

			<Route path="/signup" 
				render={() => (
			    	<SignUp
			    		signIn={this.handleSignIn} 
			    		isSignedIn={this.state.isSignedIn}
			    		refTo={'/news'}
			    	/>
			    )}
	        />

			<Route path='/dashboard' 
				render={()=>(
					isSignedIn ?
					<Dashboard 
						name={this.state.curUser} 
					/>
					:
					<Redirect to="/signin" />
				)}
			/>
			<Route path='/contact' component={Contact} /> 
			<Route path='/forgot-password' component={ForgotPassword} />
			<Route path='/' exact render={()=>
				<Home 
					username={curUser} 
					signOut={this.handleSignOut}
					/>} 
			/>
			<Route path='/news'  render={()=>
				<Home 
					username={curUser} 
					signOut={this.handleSignOut}
				/>} 
			/>
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
