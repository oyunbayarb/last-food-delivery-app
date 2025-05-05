import {foodModel} from "../model/food.js";

export const createFood = async (req, res) => {
  try {
    const data = await foodModel.create(req.body);
    res.status(201).send({success: true, data: data});
  } catch (error) {
    res.status(500).send({success: false, message: error});
  }
};
