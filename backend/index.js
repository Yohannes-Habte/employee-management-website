import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Routes
import authRouter from './routes/authRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import employeeRouter from './routes/employeeRoutes.js';

// Express app
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://employee-management-website'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  })
);
app.use(express.json());

// End points
app.use('/api/auths', authRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/employees', employeeRouter);

// Server Listner
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`The server starts on port ${port}`);
});
