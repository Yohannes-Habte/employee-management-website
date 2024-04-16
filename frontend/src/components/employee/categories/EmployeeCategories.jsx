import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddEmployeeCategory from '../addCategory/AddEmployeeCategory';
import axios from 'axios';

const EmployeeCategories = () => {
  // Local state variables
  const [openAddEmployeeCategory, setOpenAddEmployeeCategory] = useState(false);
  const [categories, setCategories] = useState([]);

  // Display employee categories
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/categories`
        );
        if (data.success) {
          setCategories(data.result);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryData();
  }, [categories]);

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

      {openAddEmployeeCategory && (
        <AddEmployeeCategory
          setOpenAddEmployeeCategory={setOpenAddEmployeeCategory}
        />
      )}
    </section>
  );
};

export default EmployeeCategories;
