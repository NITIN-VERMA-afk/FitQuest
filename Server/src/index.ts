import dotenv from "dotenv";

import ConnectDB from "./db/index";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongo db connection failed!!!", error);
  });
