const {Router} = require("express");
const {generHandler} = require("../handler/GenerHandler")

const GenerRouter = Router();
//ruta de crear genero "/"
GenerRouter.get("/",generHandler)



module.exports=GenerRouter
