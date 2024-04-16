import React, { useState } from 'react';
import './Employees.scss';
import AddEmployee from '../addEmployee/AddNewEmployee';

const Employees = () => {
  const [openAddEmployee, setOpenAddEmployee] = useState(false);

  return (
    <section className="employees-container">
      <h2 className="employees-container-title"> List of Employees </h2>
      <article className="add-employee-wrapper">
        <h3 className="add-employee-title"> Add New Employee</h3>
        <button
          className="add-employee-btn"
          onClick={() => setOpenAddEmployee(true)}
        >
          Add Employee
        </button>
      </article>
      <hr />

      {openAddEmployee && (
        <AddEmployee setOpenAddEmployee={setOpenAddEmployee} />
      )}
    </section>
  );
};

export default Employees;
