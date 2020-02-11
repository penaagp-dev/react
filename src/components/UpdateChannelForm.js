import React from 'react';
import * as PropTypes from 'prop-types';

class UpdateChannelForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.name,
    }
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();

    const payload = {
      name: this.state.name,
      userboardId: this.props.userboardId,
    }

    this.props.onSubmit(payload);
};

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Channel Name</label>
          <input name="name" value={this.state.name} className="form-control" onChange={this.handleNameChange} />
        </div>
        <button className="btn btn-primary">Update Channel</button>
      </form>
    );
  }
}

UpdateChannelForm.propTypes= {
    userboards: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
}
  
export default UpdateChannelForm;