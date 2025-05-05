import express, {json} from "express";
import {PORT} from "./utils/env.js";
import cors from "cors";
import {foodRouter} from "./roots/food.js";

const app = express();
app.use(json());
app.use(cors());

app.use("/food", foodRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running at:http://localhost:${PORT}`);
});
