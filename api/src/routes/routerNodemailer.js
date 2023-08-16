const { Router } = require("express");
const { sendMail } = require('../handlers/routerNodemailer')

const routerNodemailer = Router();

routerNodemailer.post("/purchase", sendMail)

module.exports = routerNodemailer
