import React from 'react';

import DataTable from '../layouts/DataTable';


class BoardList extends React.Component {

  handleDeleteClick = (boards) => {
    this.props.onDelete(boards) // panggil props onDelete
  }


  render(){
    const row = []
    this.props.boards.map((board) => (
      row.push({
        "serial": board.serial_board,
        "nm_board": board.nm_board,
        "action": <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteClick(board)}>Hapus</button>

      })
    ));

    const data = {
      columns: [
        {
          label: 'Serial',
          field: 'serial',
          sort: 'asc'
        },
        {
          label: 'Name',
          field: 'nm_board',
          sort: 'asc'
        }
      ],
      rows: row
    };
    return (
      <DataTable data={data} />
    );
  }
  
}

export default BoardList;