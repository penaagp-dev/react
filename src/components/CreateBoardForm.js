import React from 'react';
import * as PropTypes from 'prop-types';

class CreateBoardForm extends React.Component {
  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();

    const name = event.target.name.value;  
    const serial = event.target.serial.value;  

    const payload = {
      nm_board: name,
      serial_board: serial
    }

    this.props.onSubmit(payload)
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Board Name</label> 
          <input name="name" className="form-control" type="text" placeholder="Board Name"/>
        </div>

        <div className="form-group">
          <label>Serial</label> 
          <input name="serial" className="form-control" type="text" placeholder="Serial Board"/>
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    );
  }
}

CreateBoardForm.propTypes = {
  board: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateBoardForm;