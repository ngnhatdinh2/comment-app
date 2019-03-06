import React, { Component } from 'react';
import Home from './components/Home/Home';
import './App.css';

class CommentApp extends Component {
  render() {
		return(
			<Home/>
		)
  }
}

const NoMatch = () => (<h1>404!!! Page Not Found</h1>)
const Contact =() => (<h1> Contact </h1>);
const ForgotPassword =() => (<h1> forgot-password </h1>);

export default CommentApp;
