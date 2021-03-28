const express = require('express');
const router = express.Router();
const uuid = require('../util/uuid');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.cookie('users-id', uuid(),
        {
            maxAge: 1000 * 60,
            // You can't access these tokens in the client's javascript
            httpOnly: true,
            secure: true
        });
    res.send('respond with a resource');
});

module.exports = router;
