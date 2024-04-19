import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './views/homePage/HomePage';
import ContactPage from './views/contactPage/ContactPage';
import EmployeeSignupPage from './views/employeePages/employeeRegisterpage/EmployeeSignupPage';
import EmployeeLoginPage from './views/employeePages/employeeLoginPage/EmployeeLoginPage';
import EmployeeDashboardPage from './views/employeePages/employeeDashboardPage/EmployeeDashboardPage';
import UpdateEmployeeProfilePage from './views/employeePages/updateProfilePage/UpdateEmployeeProfilePage';
import UpdateEmployeeCategoryPage from './views/employeePages/updateCategoryPage/UpdateEmployeeCategoryPage';
import AboutPage from './views/aboutPage/AboutPage';
import ProductsPage from './views/productsPage/ProductsPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<EmployeeSignupPage />} />
          <Route path="/login" element={<EmployeeLoginPage />} />

          {/* Employee Pages */}
          <Route
            path="/employee/dashboard"
            element={<EmployeeDashboardPage />}
          />

          <Route
            path="/employee/category/:id"
            element={<UpdateEmployeeCategoryPage />}
          />

          <Route
            path="/employee/profile/:id"
            element={<UpdateEmployeeProfilePage />}
          />
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
