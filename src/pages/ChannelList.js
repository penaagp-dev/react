import React from 'react';
import { Link } from 'react-router-dom';

import * as channelApi from '../api/channel';

import FooterLayout from '../layouts/FooterLayout';
import ChannelList from "../components/ChannelsList";
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';
import { Modal, Button } from 'react-bootstrap'

class ChannelListPage extends React.Component {
  state = {
    channels: [],
    isConfirmationModalShowing: false,
  };

  handleDelete = (channel) => {
    return channelApi.remove(channel.id_channels)
      .then(() => {
        // Remove channel from array
        const nextchannels = this.state.channels
          .filter(w => w.id_channels !== channel.id_channels);

        // set new channels
        this.setState({
          channels: nextchannels
        });
      })
  }

  componentDidMount(){
    this.fetchChannels();
  }

  fetchChannels = () => {
    return channelApi.getAll()
      .then((response) => {
        console.log(typeof response.data)
        this.setState({
          channels: response.data,
        })
      })
  }

  /**
   * @param {object} event
   * @param {string} event.id_channels
   * @param {string} event.channels_key
   */
  handleKeyRefreshed = (event) => {
    this.setState((prevState) => {
      const updatedChannels = prevState.channels
        .map((channel) => {
          if (channel.id_channels === event.id_channels) {
            // update with fresh object
            return Object.assign({}, channel, {
              channels_key: event.channels_key
            })
          }
          return channel;
        })

      return {
        channels: updatedChannels
      }
    });
  }

  handleClose = () => {
    this.updateKeyCallback = null
    this.setState({ isConfirmationModalShowing: false })
  }

  handleUpdateKey = (callback) => {
    this.setState(() => ({ isConfirmationModalShowing: true }), () => {
      this.updateKeyCallback = callback
    })
  }

  handleYes = () => {
    this.updateKeyCallback()
    this.updateKeyCallback = null
    this.setState({ isConfirmationModalShowing: false })
  }

  render () {
    let data = ""
    if (this.state.channels){
      data = (
        <ChannelList 
          channels={this.state.channels} 
          onDelete={this.handleDelete} 
          onKeyRefreshed={this.handleKeyRefreshed}
          onUpdateKey={this.handleUpdateKey}
        />
      )
    }
    return (
      <div className="dashboard-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
          <NavbarLayout crumb={"Channel"}/>
          <div className="content">
            <div className="container-fluid">
              <Link className="btn btn-success" to="/channel/create">New Channel</Link>
              {data}
            </div>
          </div>
          <FooterLayout />
        </div>

        <Modal show={this.state.isConfirmationModalShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Refresh API Key</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to refresh API key?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ChannelListPage;
