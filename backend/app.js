const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const login = require('./routes/login');
const usersRouter = require('./routes/users');
const cookiesReceivedRouter = require('./routes/cookies-received');

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/login', login);
app.use('/api/users', usersRouter);
app.use('/api/cookies-received', cookiesReceivedRouter);

module.exports = app;
