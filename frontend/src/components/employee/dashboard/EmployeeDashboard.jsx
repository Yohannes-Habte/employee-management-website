import React from 'react';
import "./EmployeeDashboard.scss"
import Employees from '../employees/Employees';
import EmployeeProfile from '../profile/UpdateEmployeeProfile';
import EmployeeCategories from '../categories/EmployeeCategories';

const EmployeeDashboard = ({ active }) => {
  return (
    <article className="employee-dashboard-container">
      {active === 1 && (
        <section className="employee-dashboard-summary">
          <h2 className="employee-dashboard-title"> Employee Dashboard </h2>
        </section>
      )}

      {active === 2 && <Employees />}

      {active === 3 && <EmployeeCategories />}

      {active === 4 && <EmployeeProfile />}
    </article>
  );
};

export default EmployeeDashboard;
