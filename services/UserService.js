/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Signup user and returns auth token
*
* user User  (optional)
* returns _auth_signup_post_200_response
* */
const authSignupPOST = ({ user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        user,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = authSignupPOST;
