import React from 'react';

import * as sso from '../api/sso';


class UserCreate extends React.Component {
  state = {
    users: [],
  }
  componentDidMount () {
    
  }

  handleSubmit = (payload) => {
    return sso.userInsert(payload)
      .then(() => {
        this.props.history.push('/user/add');
      })
  };

  render(){
      return(
          <>
            <div className="card">
              <div class="card-header card-header-rose card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">user</i>
                </div>
                <h4 class="card-title">Add User</h4>
              </div>
              <div class="card-body ">
              
              </div>
            </div>
          </>
      );
  }
}

export default UserCreate;