import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

import * as auth from '../lib/auth';

function NavLink({ label, to, icon, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link className="nav-link nav-link" to={to}>
              <i className="material-icons">{icon}</i>
              <p>{label}</p>
          </Link>
        </li>
      )}
    />
  );
}

function SideBar ({ children, history }) {
  function handleLogout () {
    auth.removeToken();
    history.push('/login');
  };

  return (
    <div className="sidebar" data-color="green" data-background-color="white">
      <div className="logo">
        <Link to={"/"} className="simple-text logo-normal">
          ADRINI
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <NavLink to="/dashboard" label="Dashboard" icon="dashboard" />
          <NavLink to="/board" label="Board" icon="view_list" />
          <NavLink to="/service" label="Service" icon="view_agenda" />
          <NavLink to="/channel" label="Channel" icon="view_list" />
          <li className="nav-item ">
            <Link className="nav-link" onClick={handleLogout} to="#">
              <i className="material-icons">logout</i>
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default withRouter(SideBar);
