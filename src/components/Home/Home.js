import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import {provider, auth}  from '../Base/Base';
import uuidv1 from 'uuid/v1';
import base from '../Base/Base';
import './Home.css';
import posts from '../Test/posts.js';
import UserProfile from '../UserProfile/UserProfile';
import CatelogyPage from './CatelogyPage';
import PostPage from './PostPage';
// MUST READ
// routes are defined here: /news   Posts: De cu, gon nhieu catelogy
// news/1 tro di Posts: ung voi moi catelogy

// TEMPORARY
const authWithFireBase=(props)=>{
    auth.signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
      UserProfile.setUsername(result.user.providerData[0].displayName);
      this.setState({state: this.state});
    }).catch(function(error) {
      console.log('auth error', error);
  });
  }
const catelogies=['history','politics','sport','culture','tech','health'];

const SignInButton = withRouter(({ history }) =>(
  <button
    className="signin-btn"
    onClick={() => {history.push('/signin') }}
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

// MOluCULES
const Header = ({ signOut }) => {
  return(
    <div className="header">
      <div className="header-bar">
        <Link to="/news"><img src="" alt="home logo"/></Link>
        <h1 className="logo">
          Blog
        </h1>
        <RenderProps />
        <NavItem signOut={signOut}/>
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
const NavItem = ({ signOut }) =>{
  let username = UserProfile.getName();
  if(UserProfile.isAuthenticated()){
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
			posts: posts,
      username: ''
		}
	}
	componentDidMount(){
    // fetch some fake data
    // base.fetch('posts', {
    //   context: this,
    // }).then(data => {
    //   this.setState({posts: data})
    // }).catch(error => {
    //   console.log(error);
    // })
	}
  handleSignOut=()=>{
    UserProfile.signOut();
    this.setState({ state: this.state});
  }
  render() {
  		const { posts } = this.state;
      const { match } = this.props;
  		return(
        <div className="home">
          <Header signOut={this.handleSignOut}/>
          <Route path='/news' exact render={()=><Redirect to="/news/1" />} />
          <Route path='/' exact render={()=><Redirect to="/news/1" />} />
          {
          /* Render THe Page For Each Catelogy*/
            posts && posts.length &&  <Route exact path="/news/:catelogy"
              render={  ({ match })=>
                  <CatelogyPage
                    posts={ posts
                      // posts.filter(post=>post.userId ==   match.params.catelogy)
                    }
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
                    <PostPage
                      post={posts.find(post=>post.title === match.params.title)}
                    />
              }
            />
          )
        }
        <Footer />
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
