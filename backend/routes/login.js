const uuid = require('../util/uuid');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.cookie('login-session-id', uuid(),
        {
            maxAge: 1000 * 60,
            httpOnly: true,
            secure: false,  // Chrome will ignore this config, do not know why yet.
            // maxAge?: number;
            // signed?: boolean;
            // expires?: Date;
            // httpOnly?: boolean;
            // path?: string;
            // domain?: string;
            // secure?: boolean;
            // encode?: (val: string) => string;
            // sameSite?: boolean | 'lax' | 'strict' | 'none';
        });
    res.send({
        status: 'success'
    });

});

module.exports = router;
