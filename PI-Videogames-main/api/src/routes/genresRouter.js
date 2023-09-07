const {Router} = require("express");
const {genresHandler} = require("../handler/GenresHandler")

const GenresRouter = Router();
//ruta de crear genero "/"
GenresRouter.get("/",genresHandler)



module.exports=GenresRouter
