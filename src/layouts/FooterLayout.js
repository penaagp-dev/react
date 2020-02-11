import React from 'react';
import { withRouter} from 'react-router-dom';

function AdminLayout () {
  return (
    <footer className="footer">
    <div className="container-fluid">
      <nav className="float-right">
        <ul>
          <li>
            <a href="adrini.com">
              Patende.io @ 2019
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
}

export default withRouter(AdminLayout);
