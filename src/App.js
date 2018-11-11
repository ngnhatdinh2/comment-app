import React, { Component } from 'react';
import CommentsContainer from './components/CommentsContainer/CommentsContainer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';
class App extends Component {
	constructor(){
		super();
		this.state={
			users: []
		}
	}
	componentDidMount(){

	}
  render() {
    return (
      <div className="App">
        {/*<CommentsContainer name='nguyennhatdinh' postId={1}/>*/}
        <SignUp />
      </div>
    );
  }
}

export default App;
