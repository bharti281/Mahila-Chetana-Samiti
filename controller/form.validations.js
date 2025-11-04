import { body } from "express-validator";

export const validateMemberForm = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 6 })
    .withMessage("Name at least 6 character long"),

  //body("dob").notEmpty().withMessage("Date of Birth is required"),

  body("gender").notEmpty().withMessage("Gender is required"),

  body("mobile")
  .trim()
  .notEmpty().withMessage("Mobile number is required")
  .isLength({ min: 10, max: 10 }).withMessage("Mobile number should be exactly 10 digits")
  .isNumeric().withMessage("Mobile number should contain only numbers"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),

body("pincode")
  .trim()
  .notEmpty().withMessage("Pincode is required")
  .isLength({ min: 6, max: 6 }).withMessage("Pincode must be exactly 6 digits")
  .isNumeric().withMessage("Pincode should contain only numbers"),

  body("state")
    .notEmpty()
    .withMessage("State is required")
    .isLength({ min: 3 })
    .withMessage("State at least 3 character long"),

  body("city")
    .notEmpty()
    .withMessage("City is required")
    .isLength({ min: 3 })
    .withMessage("City at least 3 character long"),

  body("address")
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ min: 6 })
    .withMessage("Address at least 6 character long"),
    
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password at least 8 character long"),
];
