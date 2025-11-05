import express from "express";
const router = express.Router();
import * as showViews from "../controller/show.views.controller.js";
import * as userSignup from "../controller/user.signup.js";
import { validateMemberForm } from "../controller/form.validations.js";
import { loginFormValidation } from "../controller/form.validations.js";
import{login} from "../controller/user.login.controller.js";
import upload from "../middleware/multer.upload.js";


//All get request are listed here
router.get("/",showViews.showMainPage);
router.get("/register",showViews.showRegisterPage);
router.get("/login",showViews.showLoginPage);
router.get("/join-as-member",showViews.joinAsMember);
router.get("/join-as-fundraiser",showViews.joinAsFundraiser);
router.get("/join-as-intern",showViews.joinAsIntern);

// Internship Pages
router.get("/internship-verification", showViews.showInternshipVerification);
router.get("/internship-certificate", showViews.showInternshipCertificate);

//About us routes 
router.get("/about-us", showViews.showAboutUsPage);
router.get("/directors-message", showViews.showDirectorsMessagePage);
router.get("/our-team-advisors", showViews.showOurTeamAdvisorsPage);
router.get("/our-partner", showViews.showOurPartnerPage);
router.get("/affiliation", showViews.showAffiliationPage);
router.get("/complaint", showViews.showComplaintPage);

// Activity routes
router.get("/health-hygiene-initiative", showViews.showHealthHygienePage);
router.get("/environment-forest", showViews.showEnvironmentForestPage);
router.get("/youth-skill-development", showViews.showYouthSkillPage);
router.get("/rural-development", showViews.showRuralDevelopmentPage);
router.get("/women-development", showViews.showWomenDevelopmentPage);
router.get("/education-awareness-program", showViews.showEducationAwarenessPage);


// ✅ Project pages
router.get("/animal-welfare", showViews.showAnimalWelfare);
router.get("/child-welfare", showViews.showChildWelfare);
router.get("/women-empowerment", showViews.showWomenEmpowerment);
router.get("/environment-help", showViews.showEnvironmentHelp);


// ✅ Committee pages
router.get("/executive-member", showViews.showExecutiveMember);
router.get("/national-executive", showViews.showNationalExecutive);
router.get("/regional-executive", showViews.showRegionalExecutive);
router.get("/state-executive", showViews.showStateExecutive);
router.get("/divisional-executive", showViews.showDivisionalExecutive);
router.get("/district-executive", showViews.showDistrictExecutive);
router.get("/tehsil-committee", showViews.showTehsilCommittee);
router.get("/block-executive", showViews.showBlockExecutive);
router.get("/committee-on-political-affairs", showViews.showCommitteeOnPoliticalAffairs);
router.get("/city-executive", showViews.showCityExecutive);
router.get("/assembly-executive", showViews.showAssemblyExecutive);


router.get("/join-as-volunteer",showViews.showJoinAsVolunteer);


// Highlights Pages
router.get("/campaign", showViews.showCampaign);
router.get("/blog", showViews.showBlog);
router.get("/news", showViews.showNews);
router.get("/press-release", showViews.showPressRelease);
router.get("/our-achievement", showViews.showOurAchievement);
router.get("/resources", showViews.showResources);
router.get("/event", showViews.showEvent);
router.get("/media", showViews.showMedia);

// Contact Page
router.get("/contact-us", showViews.showContactUs);



//All post request are listed here


//All register route here  ------------->
router.post("/join-as-member",upload.fields([{ name: "profile", maxCount: 1 },{ name: "aadhar", maxCount: 1 },]),validateMemberForm,userSignup.register
);
router.post("/join-as-volunteer",upload.fields([{ name: "profile", maxCount: 1 }]),validateMemberForm,userSignup.register);
router.post("/join-as-fundraiser",upload.fields([{ name: "profile", maxCount: 1 }]),validateMemberForm,userSignup.register);

// Login route here 
router.post("/login", loginFormValidation,login)


export default router
