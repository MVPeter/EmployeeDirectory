import React from 'react'
import { useTable } from 'react-table'
import { Columns } from './columns'

import React from 'react'

export default function BasicTable(employee) {
    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => employee, [])

    const tableInstance = useTable({
        columns: columns,
        data: data

    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGropu.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps}>
                {rows.map(ros => {
                    prepareRow(row)
                    return(
                <tr {...row.getRowProps()}>
                    {
                        row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                        })}
                </tr>

                    )
                })}

            </tbody>
        </table>
    )
}
