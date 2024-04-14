import React from 'react';
import "./EmployeeSignupPage.scss"
import EmployeeSignup from '../../../components/employee/register/EmployeeSignup';

const EmployeeSignupPage = () => {
  return (
    <main className="employee-signup-page">
      <article className="employee-signup-page-container">
        <h1 className="employee-signup-page-title"> Create Account for Free</h1>

        <EmployeeSignup />
      </article>
    </main>
  );
};

export default EmployeeSignupPage;
