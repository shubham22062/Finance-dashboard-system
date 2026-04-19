import express from "express";

import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import authRoute from "./routes/auth.routes.js"
import recordRoute from "./routes/record.routes.js"
import dashboardRoutes from "./routes/dashboard.routes.js"
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";


dotenv.config()

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth" , authRoute);
app.use("/api/record", recordRoute);
app.use("/api/dashboard", dashboardRoutes);

app.get("/" , (req,res)=>{
    res.send("Fianance system i srunning properly!!!")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the http://localhost:${PORT}`)
})