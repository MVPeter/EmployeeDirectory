import React, { useMemo} from 'react'
import { useTable } from 'react-table'
import { Columns } from './columns'
import './table.css'



export default function BasicTable(employees) {
    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => employees, [])
    console.log("data:")
    console.log(data.employees)

    const tableInstance = useTable({
        columns,
        data: data.employees,

    });

    console.log(tableInstance)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
    )
}
