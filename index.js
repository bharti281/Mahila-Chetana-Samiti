import express from 'express';
const app = express();
import AppRoute from "./routes/app.routes.js";
import 'dotenv/config';
import session from "express-session";
import connectDB from "./model/mongodb.connection.js"

app.use(express.json());
app.set('view engine', 'ejs');
connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/uploads", express.static("uploads"));

app.use(
  session({
    secret: process.env.SESSION_SECRET, // keep in .env
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    },
  })
);
//All Routes are here 
app.use("/", AppRoute);
console.log("About to start listening...");

app.listen(process.env.PORT, () => {
  console.log(`✅ App listening on http://localhost:${process.env.PORT}`);
});