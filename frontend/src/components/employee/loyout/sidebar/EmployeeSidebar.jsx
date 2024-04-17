import React from 'react';
import './EmployeeSidebar.scss';
import { Link } from 'react-router-dom';
import ReactIcons from '../../../reactIcons/ReactIcons';

const EmployeeSidebar = ({ setActive, active }) => {
  const { userIcon, dashboardIcon, categoryIcon, usersIcon, logoutIcon } =
    ReactIcons();
  return (
    <aside className="employee-sidebar-container">
      <h3 className="dashboard" onClick={() => setActive(1)}>
        <span
          className={
            active === 1 ? 'active-dashboard-icon' : 'passive-dashboard-icon'
          }
        >
          {dashboardIcon}
        </span>
        <Link
          to={'/employee/dashboard'}
          className={active === 1 ? 'active-dashboard' : 'passive-dashboard'}
        >
          Dashboard
        </Link>
      </h3>

      <ul className="employee-sidebar-items">
        <li
          onClick={() => setActive(2)}
          className={
            active === 2 ? 'active-sidebar-item' : 'passive-sidebar-item'
          }
        >
          <span className={active === 2 ? 'active-icon' : 'passive-icon'}>
            {usersIcon}
          </span>
          <span className="sidebar-text"> Employees</span>
        </li>

        <li
          onClick={() => setActive(3)}
          className={
            active === 3 ? 'active-sidebar-item' : 'passive-sidebar-item'
          }
        >
          <span className={active === 3 ? 'active-icon' : 'passive-icon'}>
            {categoryIcon}
          </span>
          <span className="sidebar-text"> Category</span>
        </li>

        <li
          onClick={() => setActive(4)}
          className={
            active === 4 ? 'active-sidebar-item' : 'passive-sidebar-item'
          }
        >
          <span className={active === 4 ? 'active-icon' : 'passive-icon'}>
            {userIcon}
          </span>

          <span className="sidebar-text"> Profile </span>
        </li>

        <li
          className={
            active === 5 ? 'active-sidebar-item' : 'passive-sidebar-item'
          }
        >
          <span className={active === 5 ? 'active-icon' : 'passive-icon'}>
            {logoutIcon}
          </span>
          <Link to={'/login'}>
            <span className="sidebar-text"> Logout </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default EmployeeSidebar;
