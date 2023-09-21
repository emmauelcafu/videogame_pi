const {
  getAllVideoGame,
  getVideogByName,
  getVideogId,
} = require("../controller/videogameControllers");

const videogameHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      //lo tomamos por nombre si no esta , mandara todo los juegos.
      const videogByName = await getVideogByName(name);
      res.status(200).json(videogByName);
      //  if(name.length ===0){
      //     res.status(400).send(`name del video juego no encomtradp `);
      //  }
      //  else{
      //     res.status(200).json(videogByName);
      //  }
    } else {
      //todo los juegos*=)
      const response = await getAllVideoGame();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).send("pagina no encontrada");
  }
};
//Tiene que incluir los datos del género del videojuego al que está asociado.
//Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
//resivimos params de id
const videogamedetailHandler = async (req, res) => {
  const { id } = req.params;
  //validamos la bd si es o en en la api
  const source = isNaN(id) ? "bd" : "api";
  try {
    const videogId = await getVideogId(id, source);
    res.status(200).json(videogId);
  } catch (error) {
    res.status(400).send("pagina no encontrada");
  }
};

module.exports = { videogameHandler, videogamedetailHandler };
