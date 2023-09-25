const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { KEY_API } = process.env;

//creamos un video juegos a la DB//
const createVideogamesDB = async (
  name,
  description,
  released,
  image,
  rating,
  platforms,
  genres
) => {
  try {
    //verificar si ya existe en db.
    const existenteGenres = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    const newVideoGame = await Videogame.create({
      name,
      description,
      released,
      image,
      rating,
      platforms,
    });
    //asociar el videojuego con los genres existentes

    if (existenteGenres.length > 0) {
      await newVideoGame.addGenres(existenteGenres);
    } else {
      //coloca el genres predeterminado si no lo hay
      const defaultGenre = await Genre.findOne({
        where: { name: "Sin género" },
      });
      if (defaultGenre) {
        await newVideoGame.addGenre(defaultGenre);
      }
    }
    return newVideoGame;
  } catch (error) {
    console.error("Error al crear el videojuego:", error);
    throw error;
  }
};

//filtrado
function cls(array) {
  return array.map((array) => {
    return {
      id: array.id,
      name: array.name,
      description: array.description,
      released: array.released,
      image: array.background_image,
      rating: array.rating,
      platforms: array.platforms.map((arra) => arra.platform.name),
      genres: array.genres.map((arra) => arra.name),
    };
  });
}

//solicitud de todo los video juegos
const getAllVideoGame = async () => {
  try {
    const infoApi = await axios.get(
      `https://api.rawg.io/api/games?&key=${KEY_API}`
    );
    const infoApiData = infoApi.data.results;

    const infoAllData = cls(infoApiData).slice(0, 100); // se retorna solo 15 videogames
    return infoAllData;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
};

//Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.👍
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.👍
//Debe buscar tanto los de la API como los de la base de datos.👍
// controlamos el get por nonbre👍
const getVideogByName = async (name) => {
  try {
    //buscamos en videogame db...
    const converName = name.toLowerCase(); //se convierte en minuscula
    const dbvideogame = await Videogame.findOne({
      where: {
        name: converName,
      },
      include: Genre,
    });

    if (dbvideogame) {
      return dbvideogame;
    } else {
      const infoApi = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${KEY_API}`
      );
      const infoApiData = infoApi.data.results;

      if (infoApiData.length > 0) {
        const infomap = cls(infoApiData).slice(0, 15);
        return infomap;
      } else {
      }
      return console.log("no existe el juego");
    }
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
};
//Tiene que incluir los datos del género del videojuego al que está asociado.👍
//Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.🤞
// consultar por  /:id 👍
const getVideogId = async (id, source) => {
  try {
    // se incluye la bd para validar si es en la api o en bd
    const infoApi =
      source === "api"
        ? (
            await axios.get(
              `https://api.rawg.io/api/games/${id}?key=${KEY_API}`
            )
          ).data
        : await Videogame.findByPk(id);
    if (source === "api") {
      const {
        id,
        name,
        description,
        released,
        background_image,
        rating,
        platforms,
        genres,
      } = infoApi;
      platformNa = platforms.map((arr) => arr.platform.name);
      image = background_image;
      genreNa = genres.map((genres) => genres.name);

      return {
        id,
        name,
        description,
        released,
        image,
        rating,
        platformNa,
        genreNa,
      };
    }
    return infoApi;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
};

module.exports = {
  getVideogByName,
  getAllVideoGame,
  getVideogId,
  createVideogamesDB,
};
