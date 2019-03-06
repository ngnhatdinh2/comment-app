import React, { Component } from 'react';
class PostPage extends  Component{
  render(){
    const { post } = this.props;
    return(
      <div className="main-post-container">
        <div className="main-post">
          <img src="https://picsum.photos/800/600/?random" alt="post image"/>
          <div className="post-content">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-info">
              <img src={`https://robohash.org/${post.title}`} alt="" />
              <span className="author">Nguyen Nhat Dinh</span>
              <span className="date">Jan 1 Updated on Jan 03, 2018</span>
            </div>
            <div className="post-tag">
              <div>#{'ngu'}</div>
              <div>#{'btich '}</div>
            </div>
            <p className="post-body">{post.body}</p>
          </div>
          <div className="scroll-bar">
           <div className="love-btn">
            <span>❤️</span> <span>10</span>
           </div>
           <div className="bookmark-btn">
             <span>🔖10</span>
           </div>
           <div className="share-btn">
            <span>✈ Share</span>
           </div>
          </div>
        </div>
        <div className="side-bar">
          <h2>This is Side bar</h2>
        </div>
      </div>
    )
  }
}
export default PostPage;
