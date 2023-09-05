const {videogameHandler,videogamedetailHandler} = require("../handler/videogamesHandler")

const {Router} = require("express");

const videogameRouter = Router();

videogameRouter.get("/",videogameHandler)

videogameRouter.get("/:id",videogamedetailHandler)


module.exports =videogameRouter