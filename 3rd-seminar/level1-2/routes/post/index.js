const express = require('express');
const router = express.Router();

router.get('/', require('./postPostsGET'));
router.get('/:id', require('./postPostGET'));
router.post('/', require('./postPostPOST'));
router.put('/:id', require('./postPostPUT'));
router.delete('/:id', require('./postPostDELETE'));

module.exports = router;
