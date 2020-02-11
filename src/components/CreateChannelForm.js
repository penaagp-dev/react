import React from 'react';
import * as PropTypes from 'prop-types';

class CreateChannelForm extends React.Component{
  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();

    const name = event.target.name.value;
    const userboardId = event.target.userboardId.value;
    const serviceId = event.target.serviceId.value;;

    const payload = {
        nm_channels: name,
        id_userboard: userboardId,
        id_service: serviceId
    }

    this.props.onSubmit(payload);
};


  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Channel Name</label>
            <input name="name" type="text" className="form-control" placeholder="Insert Name" required/>
          </div>
          <div className="form-group">
            <label>Board Name</label>
            <select name="userboardId" className="form-control select-picker">
              {this.props.userboards.map((userboard) => (
                  <option key={userboard.id_userboard} value={userboard.id_userboard}>{userboard.nm_board}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Service Type</label>
            <select name="serviceId" className="form-control select-picker">
              {this.props.services.map((service) => (
                  <option key={service.id_service} value={service.id_service}>{service.nm_service}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">New Channel</button>
        </form>
    );
  }
}

CreateChannelForm.propTypes= {
    userboards: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
}
  
export default CreateChannelForm;