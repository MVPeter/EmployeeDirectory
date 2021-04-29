import React, { useState, useEffect } from "react";
// import React from 'react';
import Container from "./components/Container"
import Header from "./components/Header"
import API from "./api/api.js"
import './App.css';

function App() {
  const [employees, setEmployeesState] = useState([]);
  const [order, setOrderState] = useState("")
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    API.get20List()
      .then(res => {
        console.log(res.data)
        setEmployeesState(res.data.results)
      }
      ).catch(err => console.log(err));
  }, []);

  console.log("employees: ")
  console.log(employees);

  return (

    <div>
      {/* <Header /> */}
      <Container 
      employees={employees}
      order={order}
      filterUser={filterUser}
      setFilterUser={setFilterUser}
      />

    </div>

  );
}

export default App;
