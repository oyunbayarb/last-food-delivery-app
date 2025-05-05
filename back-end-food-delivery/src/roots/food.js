import {Router} from "express";
import {createFood} from "../controller/food.js";

export const foodRouter = Router();
foodRouter.post("/", createFood);
