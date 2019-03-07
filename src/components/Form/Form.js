import React, {
    Component,
    createRef
  } from 'react';
  import PropTypes from 'prop-types';
  import { auth }  from '../Base/index';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { withRouter } from 'react-router-dom';
  // import * as icons from '@fortawesome/free-solid-svg-icons';
  import * as fab from '@fortawesome/free-brands-svg-icons';
  import { google, github, facebook } from '../Base/Base';
  import {auth as authWithProvider} from '../Base/Base';
  import './style.css';
  class Form extends Component {
    constructor(props) {
      super(props);
      this.email = createRef();
      this.password = createRef();
      this.handleSuccess = this.handleSuccess.bind(this);
      this.handleErrors = this.handleErrors.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSuccess() {
      this.resetForm();
      this.props.onSuccess && this.props.onSuccess();
    }
  
    handleErrors(reason) {
      this.resetForm();
      this.props.onError && this.props.onError(reason);
      alert(reason);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const {
        email,
        password,
        props: { action }
      } = this;
      auth.userSession(
        action,
        email.current.value,
        password.current.value
      ).then((res)=>{this.handleSuccess(res)}).catch(this.handleErrors);  
    }
  
    resetForm() {
      if (!this.email.current || !this.password.current) { return }
      const { email, password } = Form.defaultProps;
      this.email.current.value = email;
      this.password.current.value = password;
    }
    handleAuthenticationWith = (provider)=>{
      const providers={google, facebook, github};

      authWithProvider.signInWithPopup(providers[`${provider}`])
        .then( this.props.history.push('/dashboard'))
        .catch(error=> {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
        });
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit} id='form'> 
          <h3 id="title">{this.props.title}</h3>
          <label>Username</label>
          <input
            className="input"
            name="name"
            type="email"
            ref={this.email}
          />
          <label>Password</label>
          <input
            className="input"
            name="password"
            type="password"
            autoComplete="none"
            ref={this.password}
          />
          <div id="icons-container">
            <FontAwesomeIcon size="lg" 
              onClick={()=>this.handleAuthenticationWith('facebook')} 
              className="icons" icon={fab.faFacebook} />
            <FontAwesomeIcon size="lg" 
              onClick={()=>this.handleAuthenticationWith('github')} 
              className="icons" icon={fab.faGithub} />
            <FontAwesomeIcon size="lg" 
              onClick={()=>this.handleAuthenticationWith('google')} 
              className="icons" icon={fab.faGoogle} />
          </div>
          <button id="submit-btn" type="submit">Submit</button>
        </form>
      )
    }
  }
  
  Form.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  }
  
  Form.defaultProps = {
    errors: '',
    email: '',
    password: ''
  }
  
  export default withRouter(Form);