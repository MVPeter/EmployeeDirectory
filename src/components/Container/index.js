import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import Search from '../Search'


function Container({employees, search}) {



  return (
    <div>
      <div className="jumbotron bg-info">
        <h1 className="display-3">Employee List</h1>
        <p className="lead"></p>
        <hr className="my-2"></hr>
      </div>
      <div clasName="px-2">
      <Search 
      employees={employees}
      search={search}/>
      <TableHead employees={employees}/>
      </div>

    </div>
  )
}

export default Container