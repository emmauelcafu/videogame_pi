const { Router } = require('express');
const videogameRouter = require("./videogamesRouter")
const GenresRouter = require("./genresRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogameRouter)
//ruta de crear genero 
router.use("/genres", GenresRouter)

module.exports = router;
