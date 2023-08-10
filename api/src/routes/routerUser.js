const {Router} =require('express');
const { postUser, getUser, updateUser } = require('../handlers/userHandler');
// const { post } = require('.');


routerUser=Router();

routerUser
.post('/',postUser)
.post('/login',getUser)
.put("/:id", updateUser)

module.exports = routerUser;