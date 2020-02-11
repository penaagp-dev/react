import React from 'react';

import * as boardApi from '../api/board';

import CreateBoardForm from '../components/CreateBoardForm';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import FooterLayout from '../layouts/FooterLayout';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';

class WidgetCreate extends React.Component {
  state = {
    board: [],
  }

  componentDidMount () {
  }

  handleSubmit = (payload) => {
    return boardApi.create(payload)
      .then(() => {
        ToastsStore.success("Created Board Success")
        setTimeout(function() {
          this.props.history.push('/board');
        }.bind(this), 1000)
        
      })
  };

  render () {
    return (
      <div className="BoardCreatePage">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
        <NavbarLayout crumb={"board/new"}/>
          <div className="content">
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
            <div className="container-fluid col-sm-6">
              <CreateBoardForm 
                board={this.state.board}
                onSubmit={this.handleSubmit} 
              />
            </div>
          </div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default WidgetCreate;