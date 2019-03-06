import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import './Home.css';
import posts from '../Test/posts.js';
import CatelogyPage from '../CatelogyPage/CatelogyPage';
import PostPage from '../PostPage/PostPage';
// testing components
import SignIn from '../SignIn/SignIn';  
import SignUp from '../SignUp/SignUp';  

import DefaultProvider from '../DefaultProvider/DefaultProvider';
import { Consumer } from '../DefaultProvider/DefaultProvider';
// MUST READ
// routes are defined here: /news   Posts: De cu, gon nhieu catelogy
// news/1 tro di Posts: ung voi moi catelogy


// MOluCULES
// class Header extends Component {
//   constructor(){
//     super();
//     this.state={
//       currrentCate: 0
//     }
//   }
//   render(){
//     return(
//       <div className="header">
//         <div className="header-bar">
//           <a to="/news"><img src="" alt="home logo"/></a>
//           <h1 id="logo">
//             Blog
//           </h1>
//           <RenderProps />
//           <NavItem />
//         </div>
//         {/*some error here, please delete /news/ to Debug*/}
//         <div className="catelogy-bar">
//           {
//             catelogies.map((catelogy, index)=>{
//                 let className = "catelogy-link ";
//                 console.log('cate',this.props.catelogy);
//                 if( index+1 == this.props.catelogy){
//                   className += "active-catelogy";
//                 }
//                 return (<a className={className} href={`/news/${index+1}`} key={index}>{catelogy}</a>)
//               }
//             )
//           }
//         </div>
//       </div>
//     )
//   }
// }
// const NavItem = (props) =>{
//     const handleSignOut = (context, history) => {
//       auth.logout();
//       context.destroySession();
//       history.push('/signedOut'); 
//     };
//     return(
//       <Consumer>
//         {
//           withRouter(({ state, history, ...context })=>
//               state.currentUser ? 
//               <div className="signin-nav-item">
//                 <p>{'username'}</p>
//                 <SignOutButton signOut={()=>handleSignOut(context, history)} />
//               </div> :
//               <div className="signin-nav-item">
//                 <SignInButton />
//                 <SignUpButton />
//               </div>)
          
//         }
//       </Consumer>
//     )
// }

// const Footer = ({}) => (
//   <div className="footer">
//       <div className="i1">
//         Built by 🕷️ With ❤
//       </div>
//       <div className="2">
//         2
//       </div>
//       <div className="3">
//         3
//       </div>
//       <div className="4">
//         4
//       </div>
//   </div>
// );

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
      const { match } = this.props;
  		return(
        <div id="main-app">
        <BrowserRouter>
        <DefaultProvider>
          {/* <Route exact path="/news/:catelogy"
            render={  ({ match })=>
                <Header 
                  catelogy={match.params.catelogy}
                />
              }
          /> */}
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
            Proceed to Dashboard</Link></h1>} />
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
