// here in this complete code we have created a strategy called as JWT Strategy configuration and registered with our app. Now we can go ahead and use the registered strategy.

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const secret = process.env.JWT_SECRET;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret, 
}

const jwtstrategy = new JWTStrategy(options, async(payload, done)=>{
      
      try{
            console.log('payload from passport', payload);
            const user = await UserServiceInstance.findByUsername(payload.username);
            console.log('user from passport', user);
            return done(null, user) // when you have successfully extracted the user then the error is null
      }

      catch(error){
                return done (error, false);
      }
})

module.exports = (passport) =>{
   passport.use(jwtstrategy);
};