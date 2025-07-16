const express = require('express');
const router = express.Router();

const userSignInController = require('../controller/user/userSignIn');

router.post('/login', userSignInController);

module.exports = router;
