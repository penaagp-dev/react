import React from 'react';
import * as serviceApi from '../api/service';
import FooterLayout from '../layouts/FooterLayout';

import ServiceList from '../components/ServiceList';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';

class ServiceListPage extends React.Component{
  state = {
    services: [],
  };

  componentDidMount () {
    this.fetchServices();
  }

  fetchServices () {
    return serviceApi.getAll()
      .then((response) => {
        this.setState({
            services: response.data,
        })
      })
  }

  render(){
    return(
      <div className="service-page">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-panel">
        <NavbarLayout crumb={"Service"}/>
        <div className="content">
          <div className="container-fluid">
            <h1>Service</h1>
            <hr/>
            <ServiceList services={this.state.services} />
          </div>
        </div>
        <FooterLayout />
      </div>
      </div>

    );
  }
}

export default ServiceListPage;