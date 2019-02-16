import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import base from '../Base/Base';
import uuidv1 from 'uuid/v1';
import SlideShowGallery from './SlideShowGallery';
import './CatelogyPage.css';

class AuthorCase extends React.Component {
  render() {
    return(
      <div >
        <div className="hover-state">
          <span id="marker">⭐ </span>
          <span id="author-name">Author's Name</span>
          <div className={"author-info"}>
            <img id="reputation-icon" src='https://cdn3.iconfinder.com/data/icons/solid-webi-con-1-black/128/Trusted_Trust_Certified_Reputation-512.png' alt="reputation"/>
            <span>100</span>
            <button id="follow-btn">
              Follow
            </button>
          </div>
        </div>
      </div>
    )
  }
}
const PostCard=({ post, onClick })=>{
  const  rand =  Math.floor(Math.random()*(3-1+1)+1);
  console.log('rand', rand);
  let className = 'post ';

  // if(rand <= 1){
  //   className += 'small-postCard';
  // }
  // else if(rand <= 2 && rand > 1){
  //   className += 'medium-postCard';
  // }
  // else{
  //   className += 'big-postCard';
  // }
  
  return(
    <div className={className} >
      <img className="post-image" src={post.imgUrl} alt="wallpaper"/>
      <div className="layer"></div>
      <div className="text-block">
        <h1 className="subtitle" onClick={onClick}>{post.title}</h1>
        <div className="post-body" onClick={onClick}>
          <span>{post.title}</span>
          <AuthorCase />
        </div>
      </div>
    </div>
  )
}
const PostWithRouter= withRouter((props) => (
  <PostCard {...props} onClick={ () => props.history.push('/news/1/Lorem ipsum dolor sit amet, consectetur adipisicing elit. test') }/>
))

class PostList extends Component
{
  render(){
    // const  rand =  Math.floor(Math.random()*(3-1+1)+1);
    // console.log('rand', rand);
    let className = '';
    // if(rand <= 1){
    //   className = 'small-postCard';
    // }
    // else if(rand <= 2 && rand > 1){
    //   className = 'medium-postCard';
    // }
    // else{
    //   className = 'big-postCard';
    // }
    const { posts } = this.props;
    return(
      <div className='post-list'>
      {
        posts && posts.length && 
        posts.map( post =>
                          <PostWithRouter 
                            post={post} 
                            key={post.id} 
                            classPost={className}
                          />)
      }
      </div>
    )                    
    }
}
class CatelogyPage extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  componentDidMount(){
     //fetch some fake data
    base.fetch('posts', {
      context: this,
    }).then(data => {
      this.setState({posts: data})
    }).catch(error => {
      console.log(error);
    })
  }
  render(){
    const { posts } = this.state;
    return(
      <React.Fragment>
        <div className="top-page">
          { 
            posts && <SlideShowGallery posts={[posts[0], posts[1], posts[0], posts[1], posts[0], posts[1]]} />
          } 
        </div>
        <div className="bottom-page">
          {
            posts && <PostList posts = {posts} />
          }
        </div>
      </React.Fragment>
    )
  }
  
}

export default CatelogyPage;
