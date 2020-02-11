import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../layouts/DataTable';

class WidgetList extends React.Component {
  handleDeleteClick = (widget) => {
    this.props.onDelete(widget) // panggil props onDelete
  }

  handleUpdateClick = (widget) => {
    this.props.onUpdate(widget)
  }

  render () {
    const row = this.props.widgets
      .map((widget) => ({
        "nm_widget": widget.nm_widget,
        "create_at": widget.create_at,
        "action": (
          <div>
            <Link className="btn btn-warning btn-sm" to={`/widget/${widget.id_widget}/edit`}>Edit</Link>
            <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteClick(widget)}>Hapus</button>
          </div>
         )
      }));

    const data = {
      columns: [
        {
          label: 'Name',
          field: 'nm_channels',
          sort: 'asc'
        },
        {
          label: 'Create At',
          field: 'create_at',
          sort: 'asc'
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc'
        }
      ],
      rows: row
    };
    return (
      <DataTable data={data}/>
    )
  }
}

export default WidgetList;
