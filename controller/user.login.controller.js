import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import Register from "../model/register.schema.js";


export const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    // 🧩 Validate login form
    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    // 🔍 Find user by email
    const user = await Register.findOne({ email });
    if (!user) {
      return res.render("login", {
        errors: [{ msg: "Email does not exist!" }],
       
      });
    }

    // 🔑 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("login", {
        errors: [{ msg: "Password not match" }],
        
      });
    }

    // 🧭 Create session and store user info
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      registerType: user.registerType,
      isLogin: true,
    };

    // Set session expiry (1 hour)
    req.session.cookie.maxAge = 60 * 60 * 1000; // 1 hour
    
    // ✅ Redirect to dashboard
    console.log("You login successfully ")
    console.log(req.session.user);
    console.log(req.session.user.isLogin);
    return res.redirect("/");

  } catch (error) {
    console.error("❌ Login Error:", error);
    return res.status(500).render("login", {
      errors: [{ msg: "Server error, please try again later" }],
    });
  }
};


