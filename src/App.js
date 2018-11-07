import React, { Component } from 'react';
import CommentsContainer from './components/CommentsContainer/CommentsContainer';

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
        <CommentsContainer name='nguyennhatdinh' postId={1}/>
      </div>
    );
  }
}

export default App;
