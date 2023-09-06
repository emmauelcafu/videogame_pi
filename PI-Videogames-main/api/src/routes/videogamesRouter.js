const {videogameHandler,videogamedetailHandler} = require("../handler/videogamesHandler")
const {postVideogameHandler}= require("../handler/postVideogameHandler")
const {Router} = require("express");

const videogameRouter = Router();

videogameRouter.get("/",videogameHandler)

videogameRouter.get("/:id",videogamedetailHandler)

videogameRouter.post("/",postVideogameHandler)

module.exports =videogameRouter