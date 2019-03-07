import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { Route,  withRouter } from 'react-router-dom';
import base from '../Base/Base';
import SlideShowGallery from '../Home/SlideShowGallery';
import {Header, Footer} from '../CommonComps/CommonComps';
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
  let className = 'post ';

  if(rand <= 1){
    className += 'small-postCard';
  }
  else if(rand <= 2 && rand > 1){
    className += 'medium-postCard';
  }
  else{
    className += 'big-postCard';
  }
  const lorem = 'Adipisicing quis et aute magna cillum pariatur. Ea nisi duis aliquip sunt consequat id reprehenderit aliqua pariatur officia culpa duis occaecat reprehenderit. Exercitation do ipsum voluptate ex commodo esse Lorem amet et ipsum.'
  return(
    <div className={className} >
      <img className="post-image" src={post.imgUrl} alt="wallpaper"/>
      <div className="layer"></div>
      <div className="text-block">
        <h1 className="subtitle" onClick={onClick}>{post.title}</h1>
        <div className="post-body" onClick={onClick}>
          <p>{className.includes('big') ? lorem : post.title}</p>
          
        </div>
      </div>
      <AuthorCase />
    </div>
  )
}
const PostWithRouter= withRouter((props) => (
  <PostCard {...props} onClick={ () => props.history.push('/news/1/Lorem ipsum dolor sit amet, consectetur adipisicing elit. test') }/>
))

class PostList extends Component
{
  render(){
    let className = '';
    const { posts } = this.props;
    return(
      <div className='post-list'>
      {
        posts && posts.length && 
        posts.map( post =>
                          <PostWithRouter 
                            post={post} 
                            key={uuidv1()} 
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
      <div className="home">
        <Route exact path="/news/:catelogy"
            render={  ({ match })=>
                <Header catelogy={match.params.catelogy} />
              }
          />
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
        <Footer />
      </div>
    )
  }
  
}

export  { CatelogyPage as default };

