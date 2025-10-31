import express from "express";
const router = express.Router();
import * as showViews from "../controller/show.views.controller.js";
import * as userSignup from "../controller/user.signup.js";
import { validateMemberForm } from "../controller/form.validations.js"; // ✅ named import


//All get request are listed here
router.get("/",showViews.showMainPage);
router.get('/:page', showViews.showAllStaticPages);

// All post request are listed here

router.post("/join-as-member",validateMemberForm,userSignup.joinAsMember)


export default router
