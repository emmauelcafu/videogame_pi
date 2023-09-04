const {videogameHandler} = require("../handler/videogamesHandler")

const {Router} = require("express");

const videogameRouter = Router();

videogameRouter.get("/",videogameHandler)


module.exports =videogameRouter