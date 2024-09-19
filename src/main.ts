import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/Database";
import { routes } from "./Routes";
import Logger from "./infra/middlewares/Logger";
import Auth from "./controllers/AuthMiddleware";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerConfig from "./infra/swagger-options";
import swaggerUi from 'swagger-ui-express'

dotenv.config();

const app = express();
const SwaggerOptions = swaggerJSDoc(swaggerConfig)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerOptions));
app.use(express.json(), Logger.init);
app.use(Auth.protect()); 
app.use("/auth", routes.router);



const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("SERVER IS RUNING");
    });
  } catch (error) {
    console.log(`Error is: ${error}`);
    process.exit(1);
  }
};

startServer();
