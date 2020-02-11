import React from 'react';
import { Link } from 'react-router-dom';

import * as channelApi from '../api/channel';

function ChannelCard ({
  channel,
  onRefreshKey,
  onDelete
}) {
  return (
    <div key={channel.id_channels} className="col-lg-4 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-header card-header-rose card-header-icon">
          <div className="card-icon">
            <i className="material-icons">build</i>
          </div>
          <p className="card-category">{channel.channels_state}</p>
          <h4 className="card-title"><b>{channel.nm_channels}</b></h4>
        </div>
        <div className="card-body">
          <hr />
          <button className="btn btn-warning btn-round btn-sm" onClick={() => onRefreshKey(channel)}>
            <i className="material-icons">autorenew</i>
          </button>
          <button className="btn btn-success btn-round btn-sm"><i className="material-icons">file_copy</i></button>
          <a className="btn btn-primary btn-round btn-sm" href="https://documenter.getpostman.com/view/2980775/S1ETRwae?version=latest" target="_blank">
            <i className="material-icons">contact_support</i> Documentation
          </a>
          <hr />
          <p>
            Chanels Id : <b>{channel.id_channels}</b><br />
            Apikey: <b>{channel.channels_key}</b>
          </p>
        </div>
        <div className="card-footer">
          <Link className="btn btn-warning" to={`/channel/${channel.id_channels}/edit`}>
            <i className="material-icons">edit</i>
            <div className="ripple-container"></div>
          </Link>
          <Link className="btn btn-info" to={`/widget/${channel.id_channels}/channels`}>
            <i className="material-icons">dns</i>
            <div className="ripple-container"></div>
            Widget
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(channel)}>
            <i className="material-icons">close</i>
            <div className="ripple-container"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

class ChannelsList extends React.Component {
  handleDelete = (channels) => {
    this.props.onDelete(channels)
  }

  handleUpdateKeys = (channel) => {
    this.props.onUpdateKey(() => {
      return channelApi.updateKeys(channel.id_channels)
        .then((response) => {
          const newChannelsKey = response.data.data.channels_key;
          
          this.props.onKeyRefreshed({
            id_channels: channel.id_channels,
            channels_key: newChannelsKey
          })
        });
    })
  }

  render (){
    return (
      <div className="row">
        {this.props.channels.map(channel => (
          <ChannelCard 
            key={channel.id_channels}
            channel={channel}
            onDelete={this.handleDelete}
            onRefreshKey={this.handleUpdateKeys}
          />
        ))};
      </div>
    );
  }
}

export default ChannelsList;