/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');


const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library
const { validate } = require('jsonschema');
const { User } = require('../components/schema/User'); 


const authSignupPOST = async (request, response) => {
  try {
   

    const user = request.body;
    const isValid = validateUser(user);

    console.log(isValid);
    if (!isValid) {
      // response.status(500).json({msg : "Give the correct credentials"});
      
      throw new Error(`Could not create the user`);
    }
    // Generate a JWT token
    const authToken = jwt.sign({ userId: user.id }, '8Zz5tw0Ionm3XPZZfN0NOml', { expiresIn: '1h' });

    // Include authToken in the response
  
    Controller.sendResponse(response, { authtoken: authToken });
  } catch (error) {
    // Handle any errors
    Controller.sendError(response, error);
  }
};
function validateUser(user) {
  const requiredKeys = ['uid', 'first_name', 'last_name', 'password', 'email', 'image', 'created_at', 'updated_at'];

  for (const key of requiredKeys) {
    if (!(key in user)) {
      return false;
    }
  }

  return true;
}


module.exports = {
  authSignupPOST,
};
