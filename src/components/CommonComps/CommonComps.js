import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../DefaultProvider/DefaultProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { auth } from '../Base/index';
import './style.css';

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
      };
    }
    render(){
      return(
        <div className="header">
          <div className="header-bar">
  <FontAwesomeIcon size="lg"    
                  onClick={()=>console.log(icons)}
                  id="home-icon" icon={icons.faHome} />
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
export { Header, Footer};