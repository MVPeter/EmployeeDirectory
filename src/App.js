import React, { useState, useEffect } from "react";
import Container from "./components/Container"
import API from "./api/api.js"
import './App.css';

function App() {
  const [employees, setEmployeesState] = useState([]);
  const [order, setOrderState] = useState({sortOrder: false, button:""});
  const [filterUser, setFilterUser] = useState([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    API.get20List()
      .then(res => {
        console.log(res.data)
        setEmployeesState(res.data.results)
        setBusy(false)
      }
      ).catch(err => console.log(err));
  }, []);

  const handleSortFunction = () => setOrderState(!order)
  

  console.log("employees: ")
  console.log(employees);

  return (

    <div>
      
      
      <Container 
      employees={employees}
      order={order}
      setOrderState={setOrderState}
      handleSortFunction={handleSortFunction}
      filterUser={filterUser}
      setFilterUser={setFilterUser}
      isBusy={isBusy}
      />
       
    </div>

  );
}

export default App;
