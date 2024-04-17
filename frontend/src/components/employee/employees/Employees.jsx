import React, { useEffect, useState } from 'react';
import './Employees.scss';
import AddEmployee from '../addEmployee/AddNewEmployee';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactIcons from '../../reactIcons/ReactIcons';

const Employees = () => {
  // Global react icons
  const { trashIcon, editIcon } = ReactIcons();
  // Local State Variables
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const [employees, setEmployees] = useState([]);

  // Display Employees
  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/employees`);
        if (data.success) {
          setEmployees(data.result);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllEmployees();
  }, []);

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

      <section className="employee-list-container">
        {/* Table addresses */}
        <table className="table-address">
          <thead className="table-head">
            <tr className="head-row">
              <th className="head-cell"> Name</th>
              <th className="head-cell"> Email </th>
              <th className="head-cell"> Gender</th>
              <th className="head-cell"> Birth Date</th>
              <th className="head-cell"> Profession</th>
              <th className="head-cell"> Language</th>
              <th className="head-cell"> Phone </th>
              <th className="head-cell"> Category</th>
              <th className="head-cell"> Salary</th>
              <th className="head-cell"> Address</th>
              <th className="head-cell"> Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {employees &&
              employees.map((employee) => {
                return (
                  <tr key={employee.employee_id} className="body-row">
                    <td className="body-cell">
                      {employee.first_name} {employee.last_name}
                    </td>
                    <td className="body-cell"> {employee.email} </td>
                    <td className="body-cell">{employee.gender}</td>
                    <td className="body-cell">
                      {employee.birth_date.substring(0, 10)}
                    </td>
                    <td className="body-cell"> {employee.profession}</td>
                    <td className="body-cell"> {employee.language}</td>
                    <td className="body-cell"> {employee.phone_number} </td>
                    <td className="body-cell"> {employee.category_id}</td>
                    <td className="body-cell"> {employee.salary}</td>
                    <td className="body-cell"> {employee.address}</td>
                    <td className="action-cell">
                      <Link
                        to={`/employee/profile/${employee.employee_Id}`}
                        className="update-employee-profile"
                      >
                        {editIcon}
                      </Link>
                      <button className="delete-employee-btn">
                        {trashIcon}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>

      {openAddEmployee && (
        <AddEmployee setOpenAddEmployee={setOpenAddEmployee} />
      )}
    </section>
  );
};

export default Employees;
