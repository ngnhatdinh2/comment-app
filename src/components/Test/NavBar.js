import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { auth } from '../Base/index';
import { Consumer } from '../DefaultProvider/DefaultProvider';

const Navbar = props => {
  const handleLogout = context => {
    auth.logout();
    context.destroySession();
    props.history.push('/signedOut');
  };

  return <Consumer>
    {({ state, ...context }) => (
      state.currentUser ?
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a onClick={() => handleLogout(context)}>Logout</a></li>
        </ul>
        :
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Login</Link></li>
          <li><Link to="/signup">Create Account</Link></li>
        </ul>
    )}
  </Consumer>
};

export default withRouter(Navbar);