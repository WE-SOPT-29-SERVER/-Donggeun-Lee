const express = require('express');
const router = express.Router();

// param: /user/4 -> :id
// query: /user?id=5 -> req.query

router.get('/profile/:id', require('./userProfileGET'));
router.post('/signup', require('./userSignupPOST'));
router.post('/login', require('./userLoginPOST'));
router.put('/:id', require('./userProfilePUT'));
router.delete('/:id', require('./userProfileDELETE'));

module.exports = router;
