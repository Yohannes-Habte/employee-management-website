import React from 'react';
import './UpdateEmployeeProfilePage.scss';
import UpdateEmployeeProfile from '../../../components/employee/profile/UpdateEmployeeProfile';


const UpdateEmployeeProfilePage = () => {
  return (
    <main className="update-employee-profile-page">
      <article className="update-employee-profile-page-container">
        <h1 className="update-employee-profile-page-title">
          Update Employee Profile
        </h1>
        <UpdateEmployeeProfile />
      </article>
    </main>
  );
};

export default UpdateEmployeeProfilePage;
