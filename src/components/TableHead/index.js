import React from 'react'
import FilteringTable from '../TableHead/FilteringTable';

export default function TableHead({ employees, isBusy }) {

    return (
        <div>
            {isBusy ? (
           <h2> loading... </h2>
            ) : (
                <FilteringTable
                employees={employees}
            />
            )}
        </div >
    )
}
