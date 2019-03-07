import React, { Component } from 'react';
// import Header from '../CatelogyPage/CatelogyPage';
import { Header, Footer} from '../CommonComps/CommonComps'
import './style.css';

class PostPage extends  Component{
  render(){
    const { post } = this.props;
    return(
      <div id="post-page">
        <Header />
        <div className="main-post">
          <img src="https://picsum.photos/800/600/?random" alt="post thumbnail"/>
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
            <p className="">
              Duis ea non eu reprehenderit officia nulla in qui. Ad ad do irure nisi excepteur non velit tempor. Est non enim aliquip Lorem. Velit ut quis esse nostrud quis mollit. Cupidatat consequat reprehenderit non dolore irure incididunt. Adipisicing nulla proident aliqua mollit laboris veniam.
            </p>
          </div>
          <div className="scroll-bar">
           <div className="love-btn">
            <span role='img' aria-label="love">❤️</span> <span>10</span>
           </div>
           <div className="bookmark-btn">
             <span role='img' aria-label="book mark">🔖10</span>
           </div>
           <div className="share-btn">
            <span role='img' aria-label="share">✈ Share</span>
           </div>
          </div>
        </div>
        <div className="side-bar">
          <h2>This is Side bar</h2>
        </div>
        <Footer />
      </div>
    )
  }
}
export default PostPage;
