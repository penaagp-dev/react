import React from 'react';
import FooterLayout from '../layouts/FooterLayout';
import * as widgetApi from '../api/widget';
import UpdateWidgetForm from '../components/UpdateWidgetForm';
import SideBar from '../layouts/SideBar';
import NavbarLayout from '../layouts/NavbarLayout';

class WidgetUpdate extends React.Component {
  state = {
    widget: null
  }

  componentDidMount () {
    this.fetchWidget();
  }

  fetchWidget () {
     return widgetApi.get(this.props.match.params.id)
       .then((data) => {
         if (data.code !== 200) {
           throw new Error(data.message)
         }

         const widget = data.data[0]
         
         this.setState({
           widget,
         })
       })
  }

  /**
   * @param  {object} event
   * @return {string} event.name
   */
  handleSubmit = (event) => {
    return widgetApi.update(this.props.match.params.id, {
      nm_widget: event.name
    })
      .then(() => {
        this.props.history.push('/widget')
      })
  }

  render(){
    const { widget } = this.state;

    return(
        <div className="dashboard-page">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="main-panel">
          <NavbarLayout crumb={"widget/update"}/>
          <div className="content">
            <div className="container-fluid col-sm-6">
              {widget && (
                <UpdateWidgetForm 
                  name={widget.nm_widget}
                  channelId={widget.id_channels}
                  onSubmit={this.handleSubmit}
                />
              )}
            </div>
          </div>
          <FooterLayout />
        </div>
      </div>
    );
  }
}

export default WidgetUpdate;