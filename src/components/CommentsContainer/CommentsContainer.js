import React, { Component } from 'react';
import uuidv1  from 'uuid/v1';
import CommentDisplayer from '../CommentDisplayer/CommentDisplayer';
import UserComment from '../UserComment/UserComment';	
class CommentsContainer extends Component {
	constructor(){
		super();
		this.state={
			currentComments: [],
			newComment: {},
      body: ''
		};
	}
	// Fetch comments from API in this func
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
			.then(respone=>respone.json())
				.then(comments=>this.setState({
					currentComments: comments
				}))
	}
  addComment=()=>{
	if(this.state.body.length <= 0 || this.state.body[0].keyCode===13) 
		return ;
	const temp = {name: this.props.name, body: this.state.body, postId: this.props.postId}
  	this.setState({
  		currentComments: [...this.state.currentComments, temp]
  	});
  	this.setState({
  		body: '',
  	})
  }
  handleInputChange=(event)=>{
  	const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
    	[name]: value
    })
    
  }
  handleEnter=(event) => {
    if(event.keyCode===13 && event.shiftKey === false){
      event.preventDefault();
      this.addComment();
    }
  }
  render() {
    return (
      <div className="CommentsContainer">
      	<UserComment handleCommentSubmit={this.addComment}
      		avt={this.state.avt}
      		name={this.props.name}
      		body={this.state.body}
      		isLiked={this.state.isLiked}
          handleEnter={this.handleEnter}
      		handleInputChange={this.handleInputChange}
          />
        <CommentList comments={this.state.currentComments} postId={this.props.postId}  />
      </div>
    );
  }
}
const CommentList=({comments, postId})=>{
  return(
      comments.filter(comment=>comment.postId === postId)
        .map(comment=><CommentDisplayer key={uuidv1()}comment={comment}/>)
    )
}

export default CommentsContainer;