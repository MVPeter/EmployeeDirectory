import React from 'react'
// import TableBody from '../TableBody'
import BasicTable from '../TableHead/BasicTable';
import SortingTable from '../TableHead/SortingTable';


export default function TableHead({ employees, filterUser, order, setOrderState, isBusy }) {
    console.log(order)
    // let buttonOrder = order.button
    // let sOrder = order.sortOrder
    // let sortEmployees = []

    // const orderEmployees = () =>{
    //     if (order.sortOrder === true){
    //         console.log("A")
    //         console.log(order)
    //         sortEmployees = employees.sort((a, b) => a.buttonOrder > b.buttonOrder ? 1 : -1)
    //     } else {
    //         console.log("B")
    //         sortEmployees = employees.sort((a, b) => b.buttonOrder > a.buttonOrder ? 1 : -1)
    //     }
    // }
    // orderEmployees()

    // const sortEmployees = !sOrder ?
    //     employees.sort((a, b) => a.name.first > b.name.first ? 1 : -1) :
    //     employees.sort((a, b) => b.name.first > a.name.first ? 1 : -1)
    // console.log(sortEmployees)


    return (
        <div>
            {isBusy ? (
           <h2> loading... </h2>
            ) : (
                <SortingTable
                employees={employees}
            />
            )}
            {/* <table className="table table-striped mx-5">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>
                            <button onClick={() => setOrderState({sortOrder: !order.sortOrder, button: "name.first"})}>Name</button>
                        </th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location
                             <button onClick={() => setOrderState({sortOrder: !order.sortOrder, button: "location.state"})}>location</button> *
                        </th>

                    </tr >
                </thead >
        <tbody>
            {sortEmployees.filter(user =>
                user.name.first.toLowerCase().includes(filterUser.toString().toLowerCase())
            ).map(employee => (<TableBody
                image={employee.picture.thumbnail}
                fname={employee.name.first}
                lname={employee.name.last}
                email={employee.email}
                phone={employee.phone}
                state={employee.location.state} />))}

        </tbody>
            </table > */}
        </div >
    )
}
