import React from 'react';
import FooterLayout from '../layouts/FooterLayout';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';
import '../assets/css/material-dashboard.min.css';

import { Link } from 'react-router-dom';

function Dashboard () {
  return (
    <div className="dashboard-page">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-panel">
        <NavbarLayout crumb={"Dashboard"}/>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-warning card-header-icon">
                    <Link className="card-icon" to="/board">
                      <i className="material-icons">dns</i>
                    </Link>
                    <p className="card-category">BOARD</p>
                    <h3 className="card-title">
                      <small>View Board List</small>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <Link to="/board/create"> <i className="material-icons text-danger">create</i> | Create Board</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-success card-header-icon">
                    <Link className="card-icon" to="/channel">
                      <i className="material-icons">add_to_home_screen</i>
                    </Link>
                    <p className="card-category">Channels</p>
                    <h3 className="card-title"><small>Channel List</small></h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                    <Link to="/channel/create"> <i className="material-icons text-danger">create</i> | Create Channels</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-danger card-header-icon">
                    <Link className="card-icon" to="/widget">
                      <i className="material-icons">info_outline</i>
                    </Link>
                    <p className="card-category">Widget</p>
                    <h3 className="card-title"><small>View Widget List</small></h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <Link to="/widget/create"> <i className="material-icons text-danger">create</i> | Create Widget</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-info card-header-icon">
                    <a className="card-icon" href="https://documenter.getpostman.com/view/2980775/S1ETRwae?version=latest" target="_blank">
                      <i className="material-icons">contact_support</i>
                    </a>
                    <p className="card-category">Support</p>
                    <h4 className="card-title"><small>Docs And Support 24 Hours</small></h4>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">email</i> | meongbego@gmail.com | 081247930699
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-warning card-header-icon">
                    <div className="card-icon" >
                      <i className="material-icons">trending_up</i>
                    </div>
                    <p className="card-category">Grafik</p>
                    <h3 className="card-title">
                      <small>View Board List</small>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <Link to="/board/create"> <i className="material-icons text-danger">create</i> | Create Grafik Models</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-warning card-header-icon">
                    <div className="card-icon" >
                      <i className="material-icons">trending_up</i>
                    </div>
                    <p className="card-category">Grafik</p>
                    <h3 className="card-title">
                      <small>Grafik Views</small>
                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <Link to="/board/create"> <i className="material-icons text-danger">create</i> | Create Grafik Models</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLayout />
      </div>
    </div>
  );
}

export default Dashboard;
