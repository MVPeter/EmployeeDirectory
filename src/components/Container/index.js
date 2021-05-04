import React from 'react';
import TableHead from '../TableHead';

function Container({employees, setFilterUser, order, setOrderState, filterUser, isBusy}) {



  return (
    <div>
      <div className="jumbotron bg-info">
        <h1 className="display-3">Employee List</h1>
        <p className="lead"></p>
        <hr className="my-2"></hr>
      </div>
      <div clasName="px-2">

      <TableHead 
      order={order}
      setOrderState={setOrderState}
      setFilterUser={setFilterUser}
      employees={employees}
      filterUser={filterUser}
      isBusy={isBusy}
      />
      </div>

    </div>
  )
}

export default Container