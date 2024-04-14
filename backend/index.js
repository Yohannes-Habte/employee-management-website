import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Express app
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://employee-management-app'],
    credentials: true,
  })
);
app.use(express.json());

app.get("/user", (req, res, next) => {
    res.send("Habtemariam")
})

// Server Listner
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`The server starts on port ${port}`);
});