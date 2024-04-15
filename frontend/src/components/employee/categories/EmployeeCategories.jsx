import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddEmployeeCategory from '../addCategory/AddEmployeeCategory';

const EmployeeCategories = () => {
  const [openAddEmployeeCategory, setOpenAddEmployeeCategory] = useState(false);

  return (
    <section className="employees-container">
      <h2 className="employees-container-title"> Categories of Employees</h2>
      <article className="add-employee-wrapper">
        <h3 className="add-employee-title"> Add New Employee Category</h3>
        <button
          className="add-employee-btn"
          onClick={() => setOpenAddEmployeeCategory(true)}
        >
          Add Category
        </button>
      </article>
      <hr />

      {openAddEmployeeCategory && <AddEmployeeCategory />}
    </section>
  );
};

export default EmployeeCategories;
