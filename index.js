
console.log("Starting server...");
import express from 'express';
const app = express();
import AppRoute from "./routes/app.routes.js";
import 'dotenv/config';
import connectDB from "./model/mongodb.connection.js"

app.use(express.json());
app.set('view engine', 'ejs');
connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//All Routes are here 
app.use("/",AppRoute);
console.log("About to start listening...");

app.listen(process.env.PORT, () => {
  console.log(`✅ App listening on http://localhost:${process.env.PORT}`);
});