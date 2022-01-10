import passport from 'passport';
import {
  Strategy,
  StrategyOptions,
  ExtractJwt,
  VerifyCallback
} from 'passport-jwt';

const startegyOptions: StrategyOptions = {
  secretOrKey: 'Hola', // Secret key public
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() // See Extracting the JWT from the request for more details.
  // issuer: 'accounts.examplesoft.com' // If defined the token issuer (iss) will be verified against this value.
  // audience: 'yoursite.net' // If defined, the token audience (aud) will be verified against this value.
};

const vefifyToken: VerifyCallback = (payload, done) => {
  // return done(err);
  return done(null, {});
};

passport.use(new Strategy(startegyOptions, vefifyToken));
