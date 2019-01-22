import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';

const Post=(props)=>{
  const { post, classPost, onClick, history } = props;
  return(
    <div className={classPost}>
      <img className="post-image" src={`https://robohash.org/${uuidv1()}`} alt="wallpaper"/>
      <div className="post-intro">
        <h2 className="subtitle" onClick={onClick}>{post.title}</h2>
        {
          //classPost !== "medium-post" && <p onClick={onClick}>{post.body}</p>
        }
        <p className="post-body" onClick={onClick}>{post.body}</p>
        <div>
          <AuthorCase />
        </div>
      </div>
    </div>
  )
}
// Clickable Post
const PostWithRouter= withRouter((props) => (
  <Post {...props} onClick={ () => props.history.push('/signup') }/>
))
const TopPage = ({posts, catelogy}) =>{
  return(
    <div className="top-page">
      <div className="big-post-container">
        <PostWithRouter
          post={posts[0]}
          classPost="big-post"
        />
      </div>
      <div className="small-post-container">
        <PostWithRouter
          post={posts[0]}
          classPost="small-post"
        />
      </div>
      <div className="medium-post-container">
         <PostWithRouter
          post={posts[0]}
          classPost="medium-post"
        />
      </div>
    </div>
  )
}
const BottomPage = ({posts, catelogy}) => (
  <div className="bottom-page">
    <div className="adver">
      ADVERTISEMENT
    </div>
    <div className="post-container">
      <div className="bottom-left-container">
        <Route  path='/news' render={()=>
          <PostList
            posts={posts}
            catelogy={catelogy}
          />}
        />
      </div>
      <div className="bottom-right-container">
        <Route  path='/news' render={()=>
          <PopularPostList
            posts={posts}
            catelogy={catelogy}
          />}
        />
      </div>
    </div>
  </div>
);
export default CatelogyPage = ({ posts, catelogy }) =>{
  return(
    <React.Fragment>
      <TopPage posts = {posts} catelogy = {catelogy}/>
      <BottomPage posts = {posts} catelogy = {catelogy}/>
    </React.Fragment>
  )
}
