import React from 'react';
import * as PropTypes from 'prop-types';

class CreateUserForm extends React.Component{

  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();

    const email = event.target.email.value;
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const location = event.target.location.value;
    const region = event.target.region.value;
    const country = 92;
    const province = event.target.province.value;
    const npwp = event.target.npwp.value;
    const organization = event.target.organization.value;
    const phone = event.target.phone.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const password_confirm = event.target.password_confirm.value;
    
    if (password !== password_confirm) {
      alert("Passwords don't match");
    } else {
      const payload = {
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name,
        location: location,
        region: region,
        country: country,
        province: province,
        npwp: npwp,
        organization: organization,
        phone: phone,
      }
      this.props.onSubmit(payload)
    }
  };

  render(){
      return(
        <div className="card">
          <div className="card-header card-header-rose card-header-icon">
            <div className="card-icon">
              <i className="material-icons">user</i>
            </div>
            <h4 className="card-title">Register</h4>
          </div>
          <div className="card-body ">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input name="email" type="email" className="form-control" placeholder="email@email.com" required/>
              </div>
              <div className="form-group">
                <input name="username" type="text" className="form-control" placeholder="Username" required/>
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control" placeholder="Password" required/>
              </div>
              <div className="form-group">
                <input name="password_confirm" type="password" 
                  className="form-control"
                  placeholder="Confirm Password" required/>
              </div>
              <div className="form-group">
                <input name="first_name" type="text" className="form-control" placeholder="First Name" required/>
              </div>
              <div className="form-group">
                <input name="last_name" type="text" className="form-control" placeholder="Last Name" required/>
              </div>
              <div className="form-group">
                <input name="phone" type="text" className="form-control" placeholder="Phone Number" required/>
              </div>
              <div className="form-group">
                <input name="location" type="text" className="form-control" placeholder="Address" required/>
              </div>
              <div className="form-group">
                <input name="region" type="text" className="form-control" placeholder="Region"/>
              </div>
              <div className="form-group">
                <input name="province" type="text" className="form-control" placeholder="Province" required/>
              </div>
              <div className="form-group">
                <input name="country" type="text" className="form-control" placeholder="Country" required/>
              </div>
              <div className="form-group">
                <input name="organization" type="text" className="form-control" placeholder="Organization" required/>
              </div>
              <div className="form-group">
                <input name="npwp" type="text" className="form-control" placeholder="NPWP" required/>
              </div>
              <button className="btn btn-primary pull-right"
              >Create</button>
            </form>
          </div>
        </div>
        
      );
  }
}

CreateUserForm.propTypes = {
  userCreate: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};
export default CreateUserForm;
