import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Register from "../model/register.schema.js";
import { validationResult } from "express-validator";
import 'dotenv/config';

const register = async (req, res) => {
  try {
    const errors = validationResult(req);

      // This gives "/join-as-member" or "/join-as-volunteer"
  const currentPage = req.originalUrl.replace("/", "");
  // console.log(currentPage);

    if (!errors.isEmpty()) {
      return res.render(currentPage, {
        errors: errors.array(),
        oldData: req.body,
      });
    }
   
    const { name, dob, gender, mobile, email, pincode, state, city, address,registerType, password } = req.body;

    const existingUser = await Register.findOne({ email });

    if (existingUser) {
      return res.render(currentPage, {
        errors: [{ msg: "Email already registered" }],
        oldData: req.body,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newMember = new Register({
      name,
      dob,
      gender,
      mobile,
      email,
      pincode,
      state,
      city,
      address,
      registerType,
      password: hashedPassword,
      profile: req.files?.profile ? req.files.profile[0].filename : null,
      aadhar: req.files?.aadhar ? req.files.aadhar[0].filename : null,
    });

    await newMember.save();

    // const token = jwt.sign(
    //   { id: newMember._id, email: newMember.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    // return res.status(201).json({
    //   success: true,
    //   message: "Member registered successfully",
    //   token,
    //   data: {
    //     id: newMember._id,
    //     name: newMember.name,
    //     email: newMember.email,
    //   },
    // });

     // 🎫 Create JWT with only id, name, email
    const token = jwt.sign(
      {
        id: newMember._id,
        name: newMember.name,
        email: newMember.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 🍪 Store JWT in cookie (HTTP-only for security)
    res.cookie("authToken", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    // 🧭 Render login page with success message
      return res.redirect("/login");


  } catch (error) {
    console.error("❌ Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { register };

