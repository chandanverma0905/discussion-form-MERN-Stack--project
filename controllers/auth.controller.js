
const AuthService = require("../services/auth.service");
// const UserService = require("../services/user.service");


const AuthServiceInstance = new AuthService();
// const UserServiceInstance = new UserService();


const postSignup = async (req, res)=>{
   
    try{
         const result = await AuthServiceInstance.signup(req.body);
         res.json(result);
    }

    catch(error){
      res.json(error.message);
    }

};

const postLogin = async (req, res)=>{
   
  try{
       const result = await AuthServiceInstance.login(req.body);
       if(result.isLoggedIn)  //if this is true, return the object
       { 
        // set the cookie
          res.cookie("token", result.token, {
            maxAge: 60* 60 * 1000,
            httpOnly: true, //this is the key & value "httpOnly: true" which makes the cookies inaccessible through the console
          });
           res.json(result);
       }

       else{
        res.status(403).json({message: "Invalid Credentials"});
       }
      
  }

  catch(error){
    res.json(error.message);
  }

};

module.exports = {
    postSignup,
    postLogin
};