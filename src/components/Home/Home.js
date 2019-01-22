import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import './Home.css';
import base from '../Base/Base';
import {provider, auth}  from '../Base/Base';
// MUST READ
// routes are defined here: /news   Posts: De cu, gon nhieu catelogy
// news/1 tro di Posts: ung voi moi catelogy

// TEMPORARY
const authWithFireBase=()=>{
    auth.signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result.user);
    }).catch(function(error) {
      console.log('auth error', error);
  });
  }
const catelogies=['history','politics','sport','culture','tech','health'];


const CatelogyPage = ({ posts, catelogy }) =>{
  return(
    <React.Fragment>
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
    </React.Fragment>
  )
}
const PostContent=({ post })=>{
  if(!post){
    return (
      <h1 className="errorPage">OOPSS!!! Somthing went wrong</h1>
    )
  }
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
            <div>#{'sex'}</div>
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

// SMALL COMPONENTS
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
const PostWithRouter= withRouter((props) => (
  <Post {...props} onClick={ () => props.history.push('/signup') }/>
))
const SignInButton = withRouter(({ history }) =>(
  <button
    className="signin-btn"
    onClick={authWithFireBase}
  >
    Sign In
  </button>
));
const SignUpButton = withRouter( (props) =>(
  <button
    className="signup-btn"
    onClick={() => { console.log(props); props.history.push('/signup') }}
  >
    Sign Up
  </button>
));
const SignOutButton = withRouter(({ history, signOut }) =>(
  <button
    className="signout-btn"
    onClick={signOut}
  >
    Sign Out
  </button>
));
//

const Header = ({ username }) => {
  return(
    <div className="header">
      <div className="header-bar">
        <Link to="/news"><img src="" alt="home logo"/></Link>
        <h1 className="logo">
          Blog
        </h1>
        <RenderProps />
        <NavItem username={username}/>
      </div>
      {/*some error here, please delete /news/ to Debug*/}
      <div className="catelogy-bar">
        {
          catelogies.map((catelogy, index)=>
              <Link to={`/news/${index+1}`} key={index}>{catelogy}</Link>
          )
        }
      </div>
    </div>
  )
}
const NavItem = ({ username, signOut }) =>{
  if(username !== "unknown"){
    return(
      <div className="signin-nav-item">
        <p>{username}</p>
        <SignOutButton signOut={signOut}/>
      </div>
    )
  }
  return(
    <div className="signin-nav-item">
      <SignInButton />
      <SignUpButton />
    </div>)
}

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
            posts && posts.map( post =>
                                <div className="bottom-left-container-item" key={post.id}>
                                  <PostWithRouter post={post} classPost="small-post" />
                                </div>
                                ))
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

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			posts: null
		}
	}
	componentWillMount(){
    // fetch some fake data
    // base.fetch('posts', {
    //   context: this,
    //   asArray: true
    // }).then(data => {
    //   this.setState({posts: data})
    //   console.log(this.state);
    // }).catch(error => {
    //   //handle error
    //   console.log(error);
    // })
    // console.log(base);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res=> res.json())
			.then( posts => this.setState({ posts }))
			.catch(err=>console.log('error'))
	}
  handleSignOut=()=>{
    this.props.signOut();
  }
  handleSignIn=()=>{
    console.log('sign in');
  }
  handleSignUp=()=>{
    console.log('sign up');
  }
  render() {
  		const { posts } = this.state;
      const { match, username, isSignedIn } = this.props;
  		return(
      <div>
        <div className="home">
          <Header username={username} />
          <Route path='/news' exact render={()=><Redirect to="/news/1" />} />
          <Route path='/' exact render={()=><Redirect to="/news/1" />} />
          {
          /* Render THe Page For Each Catelogy*/
            posts && <Route exact path="/news/:catelogy"
              render={  ({ match })=>
                  <CatelogyPage
                    posts={posts.filter(post=>post.userId ==   match.params.catelogy)}
                    catelogy={match.params.catelogy}
                  />
                }
            />
          }
        {
          //render the current clicked post
          posts &&
          (
            <Route path={`/news/:catelogy/:title`}
              render={({ match })=>
                    <PostContent
                      post={posts.find(post=>post.title === match.params.title)}
                    />
              }
            />
          )
        }
        <Footer />
        </div>
      </div>
    );}
}
class RenderProps extends React.Component {
  render() {
    return (
      <HoverState
        render={isHover => {
          if (isHover) {
            return <button>🌙</button>;
          }

          return <button>☀️</button>;
        }}
      />
    );
  }
}
const Author = (props) =>{
  return(
    <div className={"author-info "+ props.className}>
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
class HoverState extends React.Component {
  state = { isHover: false };

  handleHover = isHover => () => {
    this.setState({ isHover });
  };
  render() {
    return (
      <div
        onMouseOver={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
        className="hover-state"
      >
        { this.props.children }
        {this.props.render(this.state.isHover)}
      </div>
    );
  }
}

export default Home;
