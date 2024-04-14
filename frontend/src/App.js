import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './views/homePage/HomePage';
import ContactPage from './views/contactPage/ContactPage';
import EmployeeSignupPage from './views/employeePages/employeeRegisterpage/EmployeeSignupPage';
import EmployeeLoginPage from './views/employeePages/employeeLoginPage/EmployeeLoginPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<EmployeeSignupPage />} />
          <Route path="/login" element={<EmployeeLoginPage />} />
        </Routes>

        {/* React toastify */}
        <ToastContainer
          position="top-right"
          limit={1}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </div>
  );
};

export default App;
