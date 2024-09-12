const express = require("express");
const router = express.Router();
const estudiantesmodelo = require("./estudiantesmodelo.js");
router.post("/",estudiantesmodelo.ingresar);
module.exports = router;