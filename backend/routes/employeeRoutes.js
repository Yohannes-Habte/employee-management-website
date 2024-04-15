import express from "express";

const employeeRouter = express.Router()

// Routes
employeeRouter.get('/employee/:id');
employeeRouter.delete('/employee/:id');



export default employeeRouter;
