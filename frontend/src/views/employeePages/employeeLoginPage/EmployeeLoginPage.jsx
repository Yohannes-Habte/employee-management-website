import React from 'react';
import "./EmployeeLoginPage.scss"
import EmployeeLogin from '../../../components/employee/login/EmployeeLogin';

const EmployeeLoginPage = () => {
  return (
    <main className="employee-login-page">
      <article className="employee-login-page-container">
        <h1 className="employee-login-page-title"> Welcome to Login Account</h1>
        <EmployeeLogin />
      </article>
    </main>
  );
};

export default EmployeeLoginPage;
