import express from 'express';
import {
  addEmployee,
  getAllEmployees,
  updateEmployeeAccount,
} from '../controllers/employeeController.js';
import multer from 'multer';
import path from 'path';

const employeeRouter = express.Router();

// Image Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Routes
employeeRouter.post('/add-employee', upload.single('image'), addEmployee);
employeeRouter.get('/', getAllEmployees);
employeeRouter.get('/employee/profile/:id', updateEmployeeAccount);

export default employeeRouter;
