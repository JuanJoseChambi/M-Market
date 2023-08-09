const { Router } = require("express");
const { sendMail, register } = require('../handlers/routerNodemailer')

const routerNodemailer = Router();

routerNodemailer.post("/paid", sendMail);
routerNodemailer.post("/register", register);

module.exports = routerNodemailer
