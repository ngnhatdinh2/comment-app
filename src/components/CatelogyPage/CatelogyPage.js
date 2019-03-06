import React, { Component } from 'react';
import { Route,  withRouter } from 'react-router-dom';
import base from '../Base/Base';
import { auth } from '../Base/index';
import SlideShowGallery from '../Home/SlideShowGallery';
import { Consumer } from '../DefaultProvider/DefaultProvider';
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
const catelogies=['history','politics','sport','culture','tech','health'];

const SignInButton = withRouter(({ history }) =>(
  <button
    className="signin-btn"
    onClick={() => { history.push('/signin')}}
  >
    Sign In
  </button>
));
const SignUpButton = withRouter( (props) =>(
  <button
    className="signup-btn"
    onClick={() => {props.history.push('/signup') }}
  >
    Sign Up
  </button>
));
const SignOutButton = withRouter(({ signOut }) =>(
  <button
    className="signout-btn"
    onClick={signOut}
  >
    Sign Out
  </button>
));
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
                <Header 
                  catelogy={match.params.catelogy}
                />
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
const Footer = ({}) => (
  <div className="footer">
      <div className="i1">
        Built by 🕷️ With ❤
      </div>
      <div className="2">
        2
      </div>
      <div className="3">
        3
      </div>
      <div className="4">
        4
      </div>
  </div>
);
class Header extends Component {
  constructor(){
    super();
    this.state={
      currrentCate: 0
    }
  }
  render(){
    return(
      <div className="header">
        <div className="header-bar">
          <a to="/news"><img src="" alt="home logo"/></a>
          <h1 id="logo">
            Blog
          </h1>
          {/* <RenderProps /> */}
          <NavItem />
        </div>
        {/*some error here, please delete /news/ to Debug*/}
        <div className="catelogy-bar">
          {
            catelogies.map((catelogy, index)=>{
                let className = "catelogy-link ";
                console.log('cate',this.props.catelogy);
                if( index+1 == this.props.catelogy){
                  className += "active-catelogy";
                }
                return (<a className={className} href={`/news/${index+1}`} key={index}>{catelogy}</a>)
              }
            )
          }
        </div>
      </div>
    )
  }
}
const NavItem = (props) =>{
    const handleSignOut = (context, history) => {
      auth.logout();
      context.destroySession();
      history.push('/signedOut'); 
    };
    return(
      <Consumer>
        {
          withRouter(({ state, history, ...context })=>
              state.currentUser ? 
              <div className="signin-nav-item">
                <p>{'username'}</p>
                <SignOutButton signOut={()=>handleSignOut(context, history)} />
              </div> :
              <div className="signin-nav-item">
                <SignInButton />
                <SignUpButton />
              </div>)
          
        }
      </Consumer>
    )
}
export default CatelogyPage;
