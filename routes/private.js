const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route 
  } else {                          
    res.redirect("/login");        
  }                                
});                       
   //ONLY If the above condition is accomplished, the user can access to the next routes.
router.get("/main", (req, res, next) => {
  const {username} = req.session.currentUser;
  res.render("./private/main", {username});
});
router.get("/personal", (req, res, next) => {
  const {username} = req.session.currentUser;
  res.render("./private/personal", {username});
});

module.exports = router;