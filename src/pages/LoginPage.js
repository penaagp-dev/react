import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import * as sso from '../api/sso';
import { setAuthToken } from '../lib/auth';

import '../css/login.css';
import Logo from '../img/patende.png';  


export default class LoginPage extends React.Component {
  state = { 
    isSubmitting: false,
    redirectToReferrer: false 
  };

  /**
   * @param {React.SyntheticEvent} event
   */
  handleSubmit = event => {
    event.persist();
    event.preventDefault();
    
    this.setState({ isSubmitting: true }, () => {
      const { username, password } = event.target;

      return sso.login({
        username: username.value,
        password: password.value
      })
        .then((data) => {
          setAuthToken(data.data['Access-Token']);
          this.setState({
            redirectToReferrer: true,
            isSubmitting: false,
          });
        })
        .catch((error) => {
          this.setState({ 
            isSubmitting: false,
          });
          ToastsStore.error(error.response.data.message)
          throw error;
        });
    });
  };
  
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className={'style.loginForm'}>
        <div className="login-image">
          <img src={Logo} alt="Patende" className="image-logo"></img>
        </div>
        <div className="login-input">
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
          <form onSubmit={this.handleSubmit}>
            <h2 className="welcome-text">Sign to adrini!</h2>
            <input type="text" name="username" placeholder="Username" class="input" />
            <input type="password" name="password" placeholder="Password" class="input" />
            <input type="checkbox" class="checkbox" id="checkbox1" checked />
            <label for="checkbox1" class="input-label">Remember Me</label>
            <button className="input input-button">Login</button>
            <Link to="/register" className="input input-button input-button-gmail full-input">
              <span className="logo">Create Account!</span>  
            </Link>
            <hr />
          </form>
          {/* <Link to="/register" className="complete-text">Forgot Password?</Link> */}
        </div>
      </div>
    );
  }
}
