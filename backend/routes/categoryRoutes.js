import express from "express";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";

const categoryRouter = express.Router()

// Routes
categoryRouter.post('/add-category', createCategory);
categoryRouter.get('/', getAllCategories);




export default categoryRouter;