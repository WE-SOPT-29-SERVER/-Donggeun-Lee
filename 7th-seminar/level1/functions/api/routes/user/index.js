const express = require('express');
const router = express.Router();

// param: /user/4 -> :id
// query: /user?id=5 -> req.query
router.get('/list', require('./userListGET'));
router.get('/:userId', require('./userGET'));
router.put('/:userId', require('./userPUT'));

module.exports = router;
