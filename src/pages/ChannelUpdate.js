import React from 'react';
import SideBar from '../layouts/SideBar';
import FooterLayout from '../layouts/FooterLayout';
import * as channelsApi from '../api/channel';
import UpdateChannelForm from '../components/UpdateChannelForm';
import NavbarLayout from '../layouts/NavbarLayout';

class ChannelsUpdate extends React.Component {
  state = {
    channels: null
  }

  componentDidMount () {
    this.fetchChannels();
  }

  fetchChannels () {
     return channelsApi.get(this.props.match.params.id)
       .then((data) => {
         if (data.code !== 200) {
           throw new Error(data.message)
         }
         const channels = data.data[0]
         this.setState({
           channels,
         })
       })
  }

  /**
   * @param {object} event
   * @param {string} event.name
   * @param {string} event.userboardId
   */
  handleSubmit = (event) => {
    return channelsApi.update(this.props.match.params.id, {
      nm_channels: event.name,
      id_userboard: event.userboardId
    })
      .then(() => {
        this.props.history.push('/channel')
      })
  }

  render(){
    const { channels } = this.state;

    return(
      <div className="dashboard-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
        <NavbarLayout crumb="Channel/update"/>
          <div className="content">
            <div className="container-fluid col-sm-6">
            <h3>Channel Update</h3>
            <hr/>
              {channels && (
                <UpdateChannelForm 
                  name={channels.nm_channels}
                  userboardId={channels.id_userboard}
                  channelId={channels.id_channels}
                  onSubmit={this.handleSubmit}
                />
              )}
            </div>
          </div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default ChannelsUpdate;