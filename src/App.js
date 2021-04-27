import React, { useState, useEffect } from "react";
import Container from "./components/Container"
import Header from "./components/Header"
import API from "./api/api.js"
import './App.css';

function App() {
  const [employees, setEmployeesState] = useState({
    employees: []

  });

  useEffect(() => {
    API.get20List().then((res) => {
      setEmployeesState(res);
      console.log("employee: ")
      console.log(employees);
    });
  }, []);

  return (
    
      <div>
        <Header />
        <Container />
        
      </div>
    
  );
}

export default App;
