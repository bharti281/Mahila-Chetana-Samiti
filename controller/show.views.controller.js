const showMainPage = (req,res)=>{
    res.render('index');
}

const showLoginPage = (req, res) => {
  res.render("login",{ errors: 0});
};

//About us page
const showAboutUsPage = (req, res) => {
  res.render("about-us");
};

const showDirectorsMessagePage = (req, res) => {
  res.render("director’s-message");
};

const showOurTeamAdvisorsPage = (req, res) => {
  res.render("our-team-advisors");
};

const showOurPartnerPage = (req, res) => {
  res.render("our-partner");
};

const showAffiliationPage = (req, res) => {
  res.render("affiliation");
};

const showComplaintPage = (req, res) => {
  res.render("complaint");
};

const joinAsFundraiser = (req,res)=>{
   res.render("join-as-fundraiser", { errors: 0, oldData: {} });
}
const joinAsIntern = (req,res)=>{
   res.render("join-as-intern", { errors: 0, oldData: {} });
}
const joinAsMember = (req,res)=>{
   res.render("join-as-member", { errors: 0, oldData: {} });
}
const showJoinAsVolunteer = (req,res)=>{
  res.render("join-as-volunteer",{errors :0, oldData:{}})
}
//Activity pages

const showHealthHygienePage = (req, res) => {
  res.render("health-hygiene-initiative");
};

const showEnvironmentForestPage = (req, res) => {
  res.render("environment-forest");
};

const showYouthSkillPage = (req, res) => {
  res.render("youth-skill-development");
};

const showRuralDevelopmentPage = (req, res) => {
  res.render("rural-development");
};

const showWomenDevelopmentPage = (req, res) => {
  res.render("women-development");
};

const showEducationAwarenessPage = (req, res) => {
  res.render("education-awareness-program");
};

//Project pages
const showAnimalWelfare = (req, res) => {
  res.render("animal-welfare");
};

const showChildWelfare = (req, res) => {
  res.render("child-welfare");
};

const showWomenEmpowerment = (req, res) => {
  res.render("women-empowerment");
};

const showEnvironmentHelp = (req, res) => {
  res.render("environment-help");
};

// Committee Pages
const showExecutiveMember = (req, res) => {
  res.render("executive-member");
};

const showNationalExecutive = (req, res) => {
  res.render("national-executive");
};

const showRegionalExecutive = (req, res) => {
  res.render("regional-executive");
};

const showStateExecutive = (req, res) => {
  res.render("state-executive");
};

const showDivisionalExecutive = (req, res) => {
  res.render("divisional-executive");
};

const showDistrictExecutive = (req, res) => {
  res.render("district-executive");
};

const showTehsilCommittee = (req, res) => {
  res.render("tehsil-committee");
};

const showBlockExecutive = (req, res) => {
  res.render("block-executive");
};

const showCommitteeOnPoliticalAffairs = (req, res) => {
  res.render("committee-on-political-affairs");
};

const showCityExecutive = (req, res) => {
  res.render("city-executive");
};

const showAssemblyExecutive = (req, res) => {
  res.render("assembly-executive");
};

// Internship Pages
const showRegisterPage = (req, res) => {
  res.render("register");
};

const showInternshipVerification = (req, res) => {
  res.render("internship-verification");
};

const showInternshipCertificate = (req, res) => {
  res.render("internship-certificate");
};


// Highlights Pages
const showCampaign = (req, res) => {
  res.render("campaign");
};

const showBlog = (req, res) => {
  res.render("blog");
};

const showNews = (req, res) => {
  res.render("news");
};

const showPressRelease = (req, res) => {
  res.render("press-release");
};

const showOurAchievement = (req, res) => {
  res.render("our-achievment");
};

const showResources = (req, res) => {
  res.render("resources");
};

const showEvent = (req, res) => {
  res.render("event");
};

const showMedia = (req, res) => {
  res.render("media");
};

// Contact Page
const showContactUs = (req, res) => {
  res.render("contact-us");
};



// ✅ export all at once
export {
  showMainPage,
  showLoginPage,
  joinAsMember,
  joinAsFundraiser,
  joinAsIntern,
  showAboutUsPage,
  showDirectorsMessagePage,
  showOurTeamAdvisorsPage,
  showOurPartnerPage,
  showAffiliationPage,
  showComplaintPage,
  showHealthHygienePage,
  showEnvironmentForestPage,
  showYouthSkillPage,
  showRuralDevelopmentPage,
  showWomenDevelopmentPage,
  showEducationAwarenessPage,
  showAnimalWelfare,
  showChildWelfare,
  showWomenEmpowerment,
  showEnvironmentHelp,
  showExecutiveMember,
  showNationalExecutive,
  showRegionalExecutive,
  showStateExecutive,
  showDivisionalExecutive,
  showDistrictExecutive,
  showTehsilCommittee,
  showBlockExecutive,
  showCommitteeOnPoliticalAffairs,
  showCityExecutive,
  showAssemblyExecutive,
  showRegisterPage,
  showInternshipVerification,
  showInternshipCertificate,
  showJoinAsVolunteer,
  showCampaign,
  showBlog,
  showNews,
  showPressRelease,
  showOurAchievement,
  showResources,
  showEvent,
  showMedia,
  showContactUs
};