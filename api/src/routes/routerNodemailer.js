const { Router } = require("express");
const { sendMail } = require('../handlers/routerNodemailer')

const routerNodemailer = Router();

routerNodemailer.post("/", sendMail);

module.exports = routerNodemailer
