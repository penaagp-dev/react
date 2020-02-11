import React from 'react';
import { Redirect } from 'react-router-dom';

import * as sso from '../api/sso';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import CreateUserForm from '../components/CreateUserForm'

class RegisterPage extends React.Component{
  state = {
    isSubmitting: false,
    redirectToReferrer: false 
  }
  
  componentDidMount () {
    this.fetchCountry();
  }
  
  fetchCountry () {
    //  return channelsApi.get(this.props.match.params.id)
    //    .then((data) => {
    //      if (data.code !== 200) {
    //        throw new Error(data.message)
    //      }
    //      const channels = data.data[0]
    //      this.setState({
    //        channels,
    //      })
    //    })
  }
  
  handleSubmit = (payload) => {
    const user_payload = {
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      location: payload.location,
      region: payload.region,
      country: payload.country,
      province: payload.province,
      npwp: payload.npwp,
      organization: payload.organization,
      phone: payload.phone,
    }
    return sso.userInsert(user_payload)
      .then((data) => {
        const user_data = {
          id_userdata: data.data.id,
          username: payload.username,
          password: payload.password
        }
        sso.userInsertLogin(user_data)
        .then((data) => {
          ToastsStore.success("Check your email for activate this account")
          setTimeout(function() {
            this.setState({
              redirectToReferrer: true,
              isSubmitting: false,
            });
          }.bind(this), 3000)
        })
      })
      .catch((error) => {
        this.setState({ 
          isSubmitting: false,
        });
        ToastsStore.error(error.response.data.message)
        throw error;
      });

  };

  render(){
      let { from } = this.props.location.state || { from: { pathname: "/login" } };
      let { redirectToReferrer } = this.state;

      if (redirectToReferrer) return <Redirect to={from} />;
      return(
        <div>
          <br/>
          <div className="col-md-8 ml-auto mr-auto">
            <div className="content">
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
              <div className="container-fluid">
                <CreateUserForm
                  userCreate={this.state.userCreate}
                  onSubmit={this.handleSubmit} 
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default RegisterPage;