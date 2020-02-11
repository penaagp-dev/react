import React from 'react';
import { Link } from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import * as widgetApi from '../api/widget';

import WidgetList from "../components/WidgetList";
import AdminLayout from '../layouts/FooterLayout';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';

class WidgetChannelsPage extends React.Component {
  state = {
    widgets: [],
  };

  handleDelete = (widget) => {
    return widgetApi.remove(widget.id_widget)
      .then(() => {
        // Remove widget from array
        const nextWidgets = this.state.widgets
          .filter(w => w.id_widget !== widget.id_widget);

        // set new widgets
        this.setState({
          widgets: nextWidgets
        });
        ToastsStore.success("Widget Deleted")
      })
      .catch((error) => {
        ToastsStore.error(error.response.data.message)
        throw error;
      });
  }

  componentDidMount () {
    this.fetchWidgets();
  }
  
  fetchWidgets = () => {
    return widgetApi.getByChannels(this.props.match.params.id)
      .then((res) => {
        this.setState({
          widgets: res.data,
        })
      })
  }

  render () {

    let data = "";
    if (this.state.widgets){
      data = <WidgetList widgets={this.state.widgets} onDelete={this.handleDelete} />
    }
    return (
      <div className="widget-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-panel">
          <NavbarLayout crumb={"Widget"}/>
          <div className="content">
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
            <div className="container-fluid">
              <Link className="btn btn-success" to={`/widget/${this.props.match.params.id}/create/`}>Create</Link>
              <hr />
              {data}
            </div>
          </div>
          <AdminLayout />
        </div>
      </div>
    );
  }
}

export default WidgetChannelsPage;