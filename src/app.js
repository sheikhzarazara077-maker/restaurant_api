import express from "express";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import handler404 from "./middlewares/404handler.js";
import menuRouter from "./routes/menuRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import customerRouter from "./routes/customerRoutes.js";
import authRouter from "./routes/authRoutes.js";
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Restaurant Ordering API" });
});
//mounting
app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);

app.use(handler404);
app.use(errorHandler);

export default app;