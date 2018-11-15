import React, { Component } from 'react';
import CommentsContainer from './components/CommentsContainer/CommentsContainer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import ClassesNesting from './components/Test/test';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import './App.css';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

class App extends Component {
	constructor(){
		super();
		this.state={
			isSignedIn: false,
			curUser: 'unknown',
		}
	}
	componentDidMount(){

	}
	handleSignIn=(usr,pass)=>{
		// do dome validations
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
  	let { isSignedIn } = this.state;
	    return (
	    <BrowserRouter>
	      <div className="App">
	        {/*<CommentsContainer name='nguyennhatdinh' postId={1}/>*/}
	        <Route exact path="/" render={() => (
			    <SignIn 
			    	signIn={this.handleSignIn} 
			    	isSignedIn={this.state.isSignedIn}
			    	refTo={'/dashboard'}
			    />
			   )}
	        />

			<Route  path="/signup" 
				render={() => (
			    	<SignUp
			    		signIn={this.handleSignIn} 
			    		isSignedIn={this.state.isSignedIn}
			    		refTo={'/dashboard'}
			    	/>
			    )}
	        />

			<Route path='/dashboard' 
				render={()=>(
					<Dashboard 
						name={this.state.curUser} 
					/>
				)}
			/>
			<Route path='/contact' component={Contact}/> 
			<Route path='/forgot-password' component={ForgotPassword}/>
	      </div>

	    </BrowserRouter>
    );
  }
}

const Contact =() => (<h1> Contact </h1>);
const ForgotPassword =() => (<h1> forgot-password </h1>);
export default App;
