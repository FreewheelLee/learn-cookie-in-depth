const express = require('express');
const router = express.Router();
const uuid = require('../util/uuid');

/* GET users listing. */
router.get('/', function (req, res, next) {
    const payload = {
        msg: 'the cookies server received',
        cookies: req.cookies
    }
    res.send(payload);
});

module.exports = router;
