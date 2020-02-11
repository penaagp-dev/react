import React from 'react';
import { withRouter, Link } from 'react-router-dom';


function NaavbarLayout ({crumb}) {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <Link className="navbar-brand" to={"#"}>{crumb}</Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" id="tekan"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <i className="material-icons"></i>
                  <p className="d-lg-none d-md-block">
                    Stats
                  </p>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to={"#"}>
                  <i className="material-icons">notifications</i>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to={"#"}>
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default withRouter(NaavbarLayout);