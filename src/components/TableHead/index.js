import React from 'react'
import TableBody from '../TableBody'

export default function index() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>

                    </tr>
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        </div>
    )
}