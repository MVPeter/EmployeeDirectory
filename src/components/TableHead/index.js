import React from 'react'
import TableBody from '../TableBody'

export default function TableHead({employees}) {
    console.log(employees)
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
                    {employees.map(employee => (<TableBody
                        image={employee.picture.thumbnail}
                        fname={employee.name.first}
                        lname={employee.name.last}
                        email={employee.email}
                        phone={employee.phone}
                        state={employee.location.state} />))}

                </tbody>
            </table>
        </div>
    )
}
