const {Router} =require('express');
const { postUser, getUser, updateUser,getUserPurchase, getUserPurchaseID } = require('../handlers/userHandler');
// const { post } = require('.');


routerUser=Router();

routerUser
.post('/',postUser)
.post('/login',getUser)
.put("/:id", updateUser)
// .get('/', getUserPurchase)
.get('/:id', getUserPurchaseID)

module.exports = routerUser;