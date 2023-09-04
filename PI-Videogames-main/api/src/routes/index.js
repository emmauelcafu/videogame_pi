const { Router } = require('express');
const getVideogameRouter = require("./videogamesRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", getVideogameRouter)

module.exports = router;
