const {Router} =require('express');
const { postUser, getUser } = require('../handlers/userHandler');
// const { post } = require('.');


routerUser=Router();

routerUser
.post('/',postUser)
.post('/login',getUser)

module.exports = routerUser;