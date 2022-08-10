import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
//import Users from "./models/UserModel.js" //import untuk kebutuhan generate table

dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log("Database connected...");
    //await Users.sync(); //untuk generate table
} catch{
    console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(3000, ()=> console.log('Server running at port 3000'));