import React, {
    Component,
    createContext
  } from 'react';
  import {auth} from '../Base/Base';
  export const {
    Provider,
    Consumer
  } = createContext();
  
  class AppProvider extends Component {
    state = {
      currentUser: AppProvider.defaultProps.currentUser,
      message: AppProvider.defaultProps.message
    }
  
    componentDidMount() {
      auth.onAuthStateChanged(user => user && this.setState({
        currentUser: user
      }))
    }
  
    render() {
      return (
        <Provider value={{
          state: this.state,
          changeUser: user => this.setState({currentUser: user}),
          destroySession: () => this.setState({ 
            currentUser: AppProvider.defaultProps.currentUser 
          }),
          setMessage: message => this.setState({ message }),
          clearMessage: () => this.setState({ 
            message: AppProvider.defaultProps.message 
          })
        }}>
          {this.props.children}
        </Provider>
      )
    }
  }
  
  AppProvider.defaultProps = {
    currentUser: null,
    message: null
  }
  
  export default AppProvider;