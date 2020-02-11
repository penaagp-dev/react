import React from 'react';
import { MDBDataTable } from 'mdbreact';


function Datatable({data}){
  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}

export default Datatable;