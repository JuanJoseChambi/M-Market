const { Router } = require("express");
const { thirdPartyRegistration } = require('../handlers/routerNodemailer')

const routerNodemailer = Router();

routerNodemailer.post("/register", thirdPartyRegistration);

module.exports = routerNodemailer
