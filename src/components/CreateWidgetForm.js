import React from 'react';
import * as PropTypes from 'prop-types';

class CreateWidgetForm extends React.Component {
  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();

    const name = event.target.name.value;

    const payload = {
      nm_widget: name
    }

    this.props.onSubmit(payload)
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Widget Name</label> 
          <input 
            name="name" 
            className="form-control" 
            type="text" 
            placeholder="Masukkan Nama Widget"
            pattern="[A-Za-z0-9\-]+"
          />
          <span className="small form-text text-muted">Use alphanumeric. Don't use space and symbol</span>
        </div>

        {/* <div className="form-group">
          <label>Channel</label> 
          <select name="channelId" className="form-control selectpicker">
            {this.props.channels.map((channel) => (
              <option key={channel.id_channels} value={channel.id_channels}>{channel.nm_channels}</option>
            ))}
          </select>
        </div> */}
        <button className="btn btn-primary">Create</button>
      </form>
    );
  }
}

CreateWidgetForm.propTypes = {
  channels: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateWidgetForm;