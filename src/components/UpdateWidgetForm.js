import React from 'react';
import * as PropTypes from 'prop-types';

class UpdateWidgetForm extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        name: props.name
      }
    }
  
    handleUpdateName = (event) => {
      this.setState({
        name: event.target.value,
      });
    }
  
    handleSubmit = (event) => {
      event.persist();
      event.preventDefault();
  
      this.props.onSubmit({ name: this.state.name })
    }
  
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Widget Name</label>
            <input 
              id="name" 
              value={this.state.name} 
              onChange={this.handleUpdateName} 
              className="form-control" 
              placeholder="Insert Name"
              pattern="[A-Za-z0-9\-]+"
            />
          </div>
          <div className="form-group">
            <label>Channel ID</label>
            <p>{this.props.channelId}</p>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      );
    }
  }

  UpdateWidgetForm.propTypes= {
    nm_widget: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
}
  
export default UpdateWidgetForm;