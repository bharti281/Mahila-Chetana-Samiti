import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Register from "../model/register.schema.js";
import { validationResult } from "express-validator";

const joinAsMember = async (req, res) => {
  try {
    // ✅ Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.mapped(),
      });
    }

    const {
      name,
      dob,
      gender,
      mobile,
      email,
      pincode,
      state,
      city,
      address,
      profile,
      aadhar,
      password,
    } = req.body;

    // ✅ Check if user already exists (match schema's field name)
    const existingUser = await Register.findOne({ userid: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: { email: { msg: "Email already registered" } },
      });
    }

    // ✅ Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user (schema uses `userid` instead of `email`)
    const newMember = new Register({
      name,
      dob,
      gender,
      mobile,
      email: email, // ✅ correct field name
      pincode,
      state,
      city,
      address,
      profile,
      aadhar,
      password: hashedPassword,
    });

    await newMember.save();

    // ✅ Generate JWT token
    const token = jwt.sign(
      { id: newMember._id, email: newMember.userid },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      success: true,
      message: "Member registered successfully",
      token,
      data: {
        id: newMember._id,
        name: newMember.name,
        email: newMember.userid,
      },
    });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { joinAsMember };

