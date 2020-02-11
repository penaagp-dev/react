import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import * as widgetApi from '../api/widget';

import CreateWidgetForm from '../components/CreateWidgetForm';

import FooterLayout from '../layouts/FooterLayout';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';

class WidgetCreate extends React.Component {
  state = {
    channels: [],
  }

  componentDidMount () {
  }

  handleSubmit = (payload) => {
    const data_widget = {
      id_channels: this.props.match.params.id_channels,
      nm_widget: payload.nm_widget
    }
    return widgetApi.create(data_widget)
      .then(() => {
        ToastsStore.success("Created Channels Success")
        setTimeout(function() {
          this.props.history.push(`/widget/${this.props.match.params.id_channels}/channels`);
        }.bind(this), 1000)
        
      })
      .catch((error) => {
        ToastsStore.error(error.response.data.message)
        throw error;
      });
  };

  render () {
    return (
      <div className="widgetCreatePage">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
        <NavbarLayout crumb={"Widget"}/>
          <div className="content">
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
            <div className="container-fluid col-sm-6">
              <CreateWidgetForm 
                channels={this.state.channels}
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

export default WidgetCreate;