import React, { useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import GlobalFilter from '../TableHead/GlobalFilter';
import { Columns } from './columns'
import './table.css'

export default function FilteringTable(employees) {
    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => employees, [])
    console.log("data:")
    console.log(data.employees)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data: data.employees,

    }, useGlobalFilter, useSortBy);

    const { globalFilter } = state
    

    return (
        <>
        <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                                        </span>
                                        </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return(
                <tr {...row.getRowProps()}>
                    {
                        row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                </tr>

                    )
                })}

            </tbody>
        </table>
        </>
    )
}
