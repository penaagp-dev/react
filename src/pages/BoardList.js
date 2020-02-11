import React from 'react';
import { Link } from 'react-router-dom';

import FooterLayout from '../layouts/FooterLayout';

import * as userboardApi from '../api/userboard';
import * as boardApi from '../api/board';
import BoardList from '../components/BoardList';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';


class BoardListPage extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount () {
    this.fetchBoards();
  }

  handleDelete = (board) => {
    return boardApi.remove(board.id_board)
      .then(() => {
        const nextBoard = this.state.boards.filter(w => w.id_board !== board.id_board);

        // set new channels
        this.setState({
          boards: nextBoard
        });
      })
  }

  fetchBoards () {
    return userboardApi.getAll()
      .then(data => {
        this.setState({
          boards: data.data,
        });
      });
  }

  render () {
    let data = ""
    if (this.state.boards){
      data = <BoardList boards={this.state.boards} onDelete={this.handleDelete}/>
    }
    return (
      <div className="dashboard-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
          <NavbarLayout crumb={"Board"}/>
          <div className="content">
            <hr/>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                <Link className="btn btn-success" to="/board/create">New Board</Link>
                {data}
                </div>
              </div>
            </div>
          </div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default BoardListPage;
