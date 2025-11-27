import express from "express";
import { body } from "express-validator";
import {
  getCustomers,
  addCustomer,
} from "../controllers/customersController.js";

const router = express.Router();

router.get("/", getCustomers);

router.post(
  "/add",
  [
    body("name").notEmpty().withMessage("Name is required!"),
    body("phone").isMobilePhone().withMessage("Phone number is invalid!"),
    body("email").isEmail().withMessage("Email is invalid!"),
  ],
  addCustomer
);

export default router;