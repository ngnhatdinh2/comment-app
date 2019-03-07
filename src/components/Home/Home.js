import React, { Component } from 'react';
import { Route, Link, Redirect, BrowserRouter } from 'react-router-dom';
import './Home.css';
import posts from '../Test/posts.js';
import CatelogyPage from '../CatelogyPage/CatelogyPage';
import PostPage from '../PostPage/PostPage';
import SignIn from '../SignIn/SignIn';  
import SignUp from '../SignUp/SignUp';  
import DefaultProvider from '../DefaultProvider/DefaultProvider';
import { Consumer } from '../DefaultProvider/DefaultProvider';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			posts: posts,
      username: ''
		}
	}
	componentDidMount(){
	}
  render() {
  		const { posts } = this.state;
  		return(
        <div id="main-app">
        <BrowserRouter>
        <DefaultProvider>
          <Route exact path='/signin' render={()=><SignIn />} />
          <Route exact path="/signup" component={() => <SignUp />} />
          <Route path='/news' exact render={()=><Redirect to="/news/1" />} />
          <Route path='/' exact render={()=><Redirect to="/news/1" />} />
          <Route exact path="/dashboard" 
            render={ () => 
              <Consumer>
                {
                  ({ state }) => state.currentUser ?
                    <h1 className="content">Protected dashboard! <a href="/">home</a></h1> :
                    <div className="content">
                      <h1>Access denied.</h1>
                      <p>You are not authorized to access this page.</p>
                      <a href="/">home</a>
                    </div>
                }
              </Consumer>}
          />
          <Route exact path="/signedOut" component={() => 
              <h1 className="content">You're now signed out. <a href="/">home</a></h1>} />
          <Route exact path="/accountCreated" component={() => 
            <h1 className="content">Account created. <Link to="/signin">
            Sign In Here</Link></h1>} />
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
        {/* <Footer /> */}
        </DefaultProvider>
        </BrowserRouter>
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
