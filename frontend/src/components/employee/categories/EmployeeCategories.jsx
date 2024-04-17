import React, { useEffect, useState } from 'react';
import './EmployeeCategories.scss';
import { Link } from 'react-router-dom';
import AddEmployeeCategory from '../addCategory/AddEmployeeCategory';
import axios from 'axios';
import ReactIcons from '../../reactIcons/ReactIcons';

const EmployeeCategories = () => {
  // Global react icons
  const { trashIcon, editIcon } = ReactIcons();

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
    <section className="employee-categories-container">
      <h2 className="employees-categories-title"> Categories of Employees</h2>
      <article className="add-employee-category-wrapper">
        <h3 className="add-category-title"> Add New Employee Category</h3>
        <button
          className="add-category-btn"
          onClick={() => setOpenAddEmployeeCategory(true)}
        >
          Add Category
        </button>
      </article>
      <hr />

      <section className="employee-categories-list-container">
        {/* Table addresses */}
        <table className="table-address">
          <thead className="table-head">
            <tr className="head-row">
              <th className="head-cell"> Category ID</th>
              <th className="head-cell"> Category Name </th>
              <th className="head-cell"> Description</th>
              <th className="head-cell"> Keywords</th>
              <th className="head-cell"> Consent</th>
              <th className="head-cell"> Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {categories &&
              categories.map((category) => {
                return (
                  <tr key={category.category_id} className="body-row">
                    <td className="body-cell">{category.category_id}</td>
                    <td className="body-cell"> {category.category_name} </td>
                    <td className="body-cell"> {category.description} </td>
                    <td className="body-cell"> {category.keywords}</td>
                    <td className="body-cell">
                      {category.agree === 1 ? 'Agree' : 'Not Agree'}
                    </td>
                    <td className="action-cell">
                      <Link
                        to={`/employee/category/${category.category_id}`}
                        className="update-category"
                      >
                        {editIcon}
                      </Link>
                      <button className="delete-category-btn">
                        {trashIcon}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>

      {openAddEmployeeCategory && (
        <AddEmployeeCategory
          setOpenAddEmployeeCategory={setOpenAddEmployeeCategory}
        />
      )}
    </section>
  );
};

export default EmployeeCategories;
