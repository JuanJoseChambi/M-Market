const {Router} =require('express');
const { postUser, getUser } = require('../handlers/userHandler');
// const { post } = require('.');


routerUser=Router();

routerUser
.post('/',postUser)
.get('/',getUser)

module.exports = routerUser;