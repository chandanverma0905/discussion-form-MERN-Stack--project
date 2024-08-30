
const router = require("express").Router();
const {postSignup, postLogin} = require("../controllers/auth.controller");

const {validateSchema} = require("../middlewares/validate.middleware.js");

const {userValidationSchema} = require("../validations/user.validator.js");

const {loginBodyValidationSchema} = require("../validations/auth.validator.js");

const validateUser = validateSchema(userValidationSchema);// middleware function

const validateLoginBody = validateSchema(loginBodyValidationSchema); // middleware function

router.post("/signup", validateUser, postSignup);
router.post("/login",validateLoginBody, postLogin);

module.exports = router;