import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import * as channelApi from '../api/channel';
import * as userboardApi from '../api/userboard';
import * as serviceApi from '../api/service';

import FooterLayout from '../layouts/FooterLayout';
import SideBar from '../layouts/SideBar';
import CreateChannelForm from '../components/CreateChannelForm'
import NavbarLayout from '../layouts/NavbarLayout';

class ChannelCreate extends React.Component {
  state = {
    userboards: [],
    services: [],
    redirectToReferrer: false,
    isSubmitting: false,
  }

  componentDidMount(){
    this.fetchUserBoards();
    this.fetchUserService();
  }

  fetchUserBoards = () =>{
    return userboardApi.getAll()
      .then((response) => {
        this.setState({
          userboards: response.data,
        })
      })
  }

  fetchUserService = () =>{
    return serviceApi.getAll()
      .then((response) => {
        this.setState({
          services: response.data,
        })
      })
  }

  handleSubmit = (payload) => {
    return channelApi.create(payload)
      .then(() => {
        ToastsStore.success("Created Channels Success")
        setTimeout(function() {
          this.props.history.push('/channel');
          this.setState({
            redirectToReferrer: true
          });
        }.bind(this), 1000)
      })
      .catch((error) => {
        ToastsStore.error(error.response.data.message)
        this.setState({ 
          redirectToReferrer: false,
        });
        throw error;
      });
  }

  render(){
    return(
      <div className="channelCreatePage">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
          <NavbarLayout crumb={"Channel / Channel Create"}/>
          <div className="content">
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
            <div className="container-fluid col-sm-6">
              <CreateChannelForm
                userboards={this.state.userboards}
                services={this.state.services}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default ChannelCreate;