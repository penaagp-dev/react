import React from 'react';

import { ListGroup } from 'react-bootstrap'

function ServiceList ({ services }) {
  return(
    <div className="row">
    {services.map(service => (
      <div key={service.id_channels} className="col-lg-4 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-rose card-header-icon">
            <div className="card-icon">
              <i className="material-icons">add_shopping_cart</i>
            </div>
            <p className="card-category">{service.nm_service}</p>
            <h4 className="card-title"><b>{service.nm_service}</b></h4>
          </div>
          <div className="card-body">
            <hr />
            <b>Features </b>
            <hr />
            <p>
              <ListGroup variant="flush">
                <ListGroup.Item variant="primary">Telegram Support : {service.telegram_support}</ListGroup.Item >
                <ListGroup.Item variant="secondary">SMS Support : {service.sms_support}</ListGroup.Item >
                <ListGroup.Item variant="success">Grafana Support : {service.grafana_support}</ListGroup.Item >
                <ListGroup.Item variant="info">DNS Support : {service.dns_support}</ListGroup.Item >
                <ListGroup.Item variant="warning">Total Widget : {service.total_widget}</ListGroup.Item >
              </ListGroup>
            </p>
          </div>
          <div className="card-footer">
            
          </div>
        </div>
      </div>
    ))};
    </div>
  );
}

export default ServiceList;