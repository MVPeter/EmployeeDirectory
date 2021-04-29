import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import Search from '../Search'


function Container({employees}) {



  return (
    <div>
      <div className="jumbotron bg-info">
        <h1 className="display-3">Employee List</h1>
        <p className="lead"></p>
        <hr className="my-2"></hr>
      </div>
      <Search employees={employees}/>
      <TableHead employees={employees}/>


    </div>
  )
}

export default Container