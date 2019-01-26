import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import './CatelogyPage.css';

const Author = ({ className, author}) =>{
  return(
    <div className={"author-info "+ className}>
      <div>
        <img src="" alt="author avatar"/>
        <strong>Author name</strong>
        <button>
          Follow
        </button>
      </div>
    </div>
  )
}
class AuthorCase extends React.Component {
  render() {
    return(
      <div >
        <span className="hover-state">
          Dinh
          <Author />
        </span>
      </div>
    )
  }
}
const PostCard=({ post, classPost, onClick, history })=>{
  return(
    <div className="post" >
      <img className="post-image" src={`https://placeimg.com/640/480/${uuidv1()}`} alt="wallpaper"/>
      <div className="layer"></div>
      <div className="text-block">
        <h1 className="subtitle" onClick={onClick}>{post.title}</h1>
        <p className="post-body" onClick={onClick}>
          {post.body}
          <AuthorCase />
        </p>
          {/*  */}
      </div>
    </div>
  )
}
const PostWithRouter= withRouter((props) => (
  <PostCard {...props} onClick={ () => props.history.push('/news/1/Lorem ipsum dolor sit amet, consectetur adipisicing elit. test') }/>
))
const PopularPostList=({ posts, catelogy })=>{
          return(
            posts && posts.map( (post, index) =>
                                index < 2 &&
                                <div className="popularPostsContainer" key={post.id}>
                                  <h3>{catelogy}</h3>
                                  <div>
                                    <img src={`https://robohash.org/${post.title}`} alt=""/>
                                    <Link
                                      to={`/news/${catelogy}/${post.title}`}
                                    >
                                        {post.title}<br/>
                                    </Link>
                                  </div>
                                </div>
                                ))
}
const PostList=({ posts, catelogy })=>{
          return(
            posts && posts.length && posts.map( post =>
                                <div className="bottom-left-container-item" key={post.id}>
                                  <PostWithRouter post={post} classPost="small-post" />
                                </div>
                                ))
}
const CatelogyPage = ({ posts, catelogy }) =>{
  return(
    <React.Fragment>
      <div className="top-page">
          <PostWithRouter
            post={posts[0]}
            className="big1-post"
          />
          <PostWithRouter
            post={posts[0]}
            classPost="small-post"
          />
           <PostWithRouter
            post={posts[0]}
            classPost="medium-post"
          />
          <PostWithRouter
            post={posts[0]}
            classPost="big-post"
          />
          <PostWithRouter
            post={posts[0]}
            classPost="small-post"
          />
           <PostWithRouter
            post={posts[0]}
            classPost="medium-post"
          />
          <PostWithRouter
            post={posts[0]}
            classPost="big-post"
          />
          <PostWithRouter
            post={posts[0]}
            classPost="small-post"
          />
           <PostWithRouter
            post={posts[0]}
            classPost="medium-post"
          />
      </div>
      {/* <div className="bottom-page">
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
      </div> */}
    </React.Fragment>
  )
}

export default CatelogyPage;
