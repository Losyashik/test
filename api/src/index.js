import express from "express";
import userRouter from "./routers/userRouter.js";
import docRouter from "./routers/docRouter.js";
import serveStatic from "serve-static";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(serveStatic(__dirname + "/../dist"));
app.use("/api/users", userRouter);
app.use("/api/docs", docRouter);

function startServe() {
  try {
    app.listen(PORT, () => {
      console.log("Server start on port", PORT);
    });
  } catch (e) {
    console.error(e);
  }
}

startServe();
