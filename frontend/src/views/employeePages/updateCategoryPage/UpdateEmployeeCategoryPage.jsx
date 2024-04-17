import React, { useState } from 'react';
import './UpdateEmployeeCategoryPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import ReactIcons from '../../../components/reactIcons/ReactIcons';
import axios from 'axios';

const initialState = {
  categoryName: '',
  description: '',
  keywords: '',
};

const UpdateEmployeeCategoryPage = () => {
  // Navigate to employee dashboar
  const navigate = useNavigate();

  // Global react icons
  const { categoryIcon, messageIcon, closeIcon } = ReactIcons();

  // Local state variables
  const [categoryInfos, setCategoryInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryInfos({ ...categoryInfos, [name]: value });
  };

  // Destructuring variables
  const { categoryName, description, keywords } = categoryInfos;

  // Reset variables
  const rest = () => {
    setCategoryInfos({
      categoryName: '',
      description: '',
      keywords: '',
    });
    setAgree(false);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // New Employee
      const addCategory = {
        categoryName: categoryName,
        description: description,
        keywords: keywords,
        agree: agree,
      };
      const { data } = await axios.post(
        `http://localhost:4000/api/categories/category/update`,
        addCategory
      );

      if (data.success) {
        rest();
        navigate('/employee/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="update-employee-categories-page">
      <article className="update-employee-categories-page-container">
        <h1 className="update-employee-categories-page-title">
          Update Employee Category
        </h1>
        <form onSubmit={handleSubmit} className="update-employee-category-form">
          {/* Category Name */}
          <div className="input-container">
            <span className="input-icon"> {categoryIcon} </span>
            <input
              type="text"
              name="categoryName"
              value={categoryName}
              onChange={handleChange}
              placeholder="Enter Category Name"
              className="input-field"
            />
            <label htmlFor="categoryName" className="input-label">
              Category Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Category Description */}
          <div className="input-container">
            <span className="input-icon"> {messageIcon} </span>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder=" Enter Description"
              className="input-field"
            />
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Category Keywords */}
          <div className="input-container">
            <span className="input-icon"> {messageIcon} </span>
            <input
              type="text"
              name="keywords"
              value={keywords}
              onChange={handleChange}
              placeholder=" Enter Keywords"
              className="input-field"
            />
            <label htmlFor="keywords" className="input-label">
              Keywords
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Consent */}
          <div className="input-consent">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="consent-checkbox"
            />
            <label htmlFor="agree" className="accept">
              I accept
            </label>

            <Link className={'terms-of-user'}> Terms of Use</Link>
          </div>

          <button type="submit" className="update-category-btn">
            Add Category
          </button>
        </form>
      </article>
    </main>
  );
};

export default UpdateEmployeeCategoryPage;
