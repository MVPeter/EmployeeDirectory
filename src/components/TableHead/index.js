import React from 'react'
import TableBody from '../TableBody'

export default function TableHead({ employees, filterUser }) {
    console.log(employees)
    return (
        <div>
            <table className="table table-striped mx-5">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.filter(user =>
                        user.name.first.toLowerCase().includes(filterUser.toString().toLowerCase())
                    ).map(employee => (<TableBody
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
