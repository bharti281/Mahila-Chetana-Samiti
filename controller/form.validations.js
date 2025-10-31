import { body, validationResult } from "express-validator";

export const validateMemberForm = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("dob").notEmpty().withMessage("Date of Birth is required"),
  body("gender").notEmpty().withMessage("Gender is required"),
  body("mobile").notEmpty().withMessage("Mobile number is required"),
  body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
  body("pincode").notEmpty().withMessage("Pincode is required").isLength({ min: 6, max: 6 }).withMessage("Must be 6 digits"),
  body("state").notEmpty().withMessage("State is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("password").notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // 🚨 Instead of re-rendering, return JSON with all errors
      return res.status(400).json({
        success: false,
        errors: errors.mapped()
      });
    }

    next(); // move to next handler if no errors
  }
];
