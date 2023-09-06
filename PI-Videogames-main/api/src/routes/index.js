const { Router } = require('express');
const videogameRouter = require("./videogamesRouter")
const GenerRouter = require("./generRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogameRouter)
//ruta de crear genero 
router.use("/genres", GenerRouter)

module.exports = router;
