import React, { useEffect, useState } from 'react';
import './AddNewEmployee.scss';
import ReactIcons from '../../reactIcons/ReactIcons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
  birthDate: '',
  profession: '',
  language: '',
  phoneNumber: '',
  category: '',
  salary: '',
  address: '',
  image: '',
};
const AddNewEmployee = ({ setOpenAddEmployee }) => {
  const navigate = useNavigate();

  // Global react icons
  const {
    userIcon,
    emailIcon,
    passwordIcon,
    uploadIcon,
    dateIcon,
    languageIcon,
    phoneIcon,
    roleIcon,
    closeIcon,
  } = ReactIcons();

  // Local state variables
  const [employeeInfos, setEmployeeInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log('Categories=', categories);

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

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfos({ ...employeeInfos, [name]: value });
  };

  // Destructuring variables
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    address,
    category,
    salary,
    image,
  } = employeeInfos;

  // Reset variables
  const rest = () => {
    setEmployeeInfos({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      birthDate: '',
      profession: '',
      language: '',
      phoneNumber: '',
      address: '',
      salary: '',
      category: '',
      image: '',
    });
    setAgree(false);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // New Employee
      const employeeData = new FormData();
      employeeData.append('firstName', firstName);
      employeeData.append('middleName', middleName);
      employeeData.append('lastName', lastName);
      employeeData.append('email', email);
      employeeData.append('password', password);

      employeeData.append('gender', gender);
      employeeData.append('image', image);
      employeeData.append('birthDate', birthDate);
      employeeData.append('phoneNumber', phoneNumber);
      employeeData.append('profession', profession);

      employeeData.append('address', address);
      employeeData.append('salary', salary);
      employeeData.append('language', language);
      employeeData.append('category', category);
      employeeData.append('agree', agree);

      const { data } = await axios.post(
        `http://localhost:4000/api/employees/add-employee`,
        employeeData
      );

      rest();
      navigate('/employee/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="add-employee-modal">
      <section className="add-employee-popup-box">
        <span onClick={() => setOpenAddEmployee(false)} className="close-popup">
          {closeIcon}
        </span>
        <h2 className="add-employee-title"> Add New Employee</h2>

        <form
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
          className="add-employee-form"
        >
          {/* inputs container */}
          <div className="inputs-container">
            {/* First Name */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={'firstName'}
                id={'firstName'}
                autoComplete="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="input-field"
              />

              <label htmlFor={'firstName'} className="input-label">
                First Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Middle Name*/}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={'middleName'}
                id={'middleName'}
                autoComplete="middleName"
                value={middleName}
                onChange={handleChange}
                placeholder="Enter Middle Name"
                className="input-field"
              />

              <label htmlFor={'middleName'} className="input-label">
                Middle Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Last Name */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="text"
                name={'lastName'}
                id={'lastName'}
                autoComplete="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="input-field"
              />

              <label htmlFor={'lastName'} className="input-label">
                Last Name
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Email address */}
            <div className="input-container">
              <span className="input-icon"> {emailIcon} </span>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="input-field"
              />
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Password */}
            <div className="input-container">
              <span className="input-icon"> {passwordIcon} </span>
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="input-field"
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* User Image */}
            <div className="input-container">
              <span className="input-icon"> {uploadIcon} </span>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) =>
                  setEmployeeInfos({
                    ...employeeInfos,
                    image: e.target.files[0],
                  })
                }
                className="input-field"
              />
            </div>

            {/* Gender */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <select
                name="gender"
                id="gender"
                autoComplete="gender"
                value={gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>{' '}
              <label htmlFor={'gender'} className="input-label">
                Gender
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Birth Date */}
            <div className="input-container">
              <span className="input-icon"> {userIcon} </span>
              <input
                type="date"
                name={'birthDate'}
                id={'birthDate'}
                autoComplete="birthDate"
                value={birthDate}
                onChange={handleChange}
                placeholder="Enter Birth Date"
                className="input-field"
              />

              <label htmlFor={'birthDate'} className="input-label">
                Birth Date
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Phone Number */}
            <div className="input-container">
              <span className="input-icon"> {phoneIcon} </span>
              <input
                type="text"
                name={'phoneNumber'}
                id={'phoneNumber'}
                autoComplete="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="input-field"
              />

              <label htmlFor={'phoneNumber'} className="input-label">
                Phone Number
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Profession */}
            <div className="input-container">
              <span className="input-icon"> {dateIcon} </span>
              <input
                type="text"
                name={'profession'}
                id={'profession'}
                autoComplete="profession"
                value={profession}
                onChange={handleChange}
                placeholder="Enter Profession"
                className="input-field"
              />

              <label htmlFor={'profession'} className="input-label">
                Profession
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* address */}
            <div className="input-container">
              <span className="input-icon"> {dateIcon} </span>
              <input
                type="text"
                name={'address'}
                id={'address'}
                autoComplete="address"
                value={address}
                onChange={handleChange}
                placeholder="Enter Street House No., Zip Code, City, State Country"
                className="input-field"
              />

              <label htmlFor={'address'} className="input-label">
                Address (Street House No., Zip Code, City, State Country)
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Slary */}
            <div className="input-container">
              <span className="input-icon"> {dateIcon} </span>
              <input
                type="text"
                name={'salary'}
                id={'salary'}
                autoComplete="salary"
                value={salary}
                onChange={handleChange}
                placeholder="Enter Salary"
                className="input-field"
              />

              <label htmlFor={'salary'} className="input-label">
                Salary
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* language */}
            <div className="input-container">
              <span className="input-icon"> {languageIcon} </span>
              <select
                name="language"
                id="language"
                autoComplete="language"
                value={language}
                onChange={handleChange}
                className="input-field"
              >
                <option value="default">Select Language</option>
                <option value="english">English</option>
                <option value="german">German</option>
                <option value="tigrigna">Tigrigna</option>
              </select>

              <label htmlFor={'language'} className="input-label">
                Language
              </label>
              <span className="input-highlight"></span>
            </div>

            {/* Select Employee Role */}
            <div className="input-container">
              <span className="input-icon"> {roleIcon} </span>
              <select
                name="category"
                id="category"
                autoComplete="category"
                value={category}
                onChange={handleChange}
                className="input-field"
              >
                <option value="Default">Select Category </option>
                {categories &&
                  categories.map((category) => {
                    return (
                      <option value={category.category_id}>
                        {category.cateory_name}
                      </option>
                    );
                  })}
              </select>

              <label htmlFor={'category'} className="input-label">
                Category
              </label>
              <span className="input-highlight"></span>
            </div>
          </div>

          {/* Consent */}
          <div className="consent-container">
            <input
              type="checkbox"
              name="agree"
              className="consent-checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <span className="accept">I accept</span>
            <Link className={'terms-of-use'}> Terms of Use</Link>
          </div>

          {/* Button */}
          <button type="submit" className="employee-account-btn">
            Add Employee
          </button>
        </form>
      </section>
    </article>
  );
};

export default AddNewEmployee;
