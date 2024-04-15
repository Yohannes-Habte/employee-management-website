import React, { useState } from 'react';
import './EmployeeDashboardPage.scss';
import EmployeeDashboard from '../../../components/employee/dashboard/EmployeeDashboard';
import EmployeeSidebar from '../../../components/employee/loyout/sidebar/EmployeeSidebar';

const EmployeeDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <main className="employee-dashboard-page">
      <article className="employee-dashboard-page-container">
        <h1 className="employee-dashboard-page-title"> Employee Dashboard </h1>
        <div className="employee-dashboard-box">
          <EmployeeSidebar setActive={setActive} active={active} />
          <EmployeeDashboard active={active} />
        </div>
      </article>
    </main>
  );
};

export default EmployeeDashboardPage;
