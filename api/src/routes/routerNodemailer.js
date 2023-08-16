const { Router } = require("express");
const { thirdPartyRegistration, sendMail } = require('../handlers/routerNodemailer')

const routerNodemailer = Router();

routerNodemailer.post("/purchase", sendMail)
routerNodemailer.post("/register", thirdPartyRegistration);

module.exports = routerNodemailer
