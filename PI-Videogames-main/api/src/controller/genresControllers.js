require("dotenv").config();

const { Genre } = require("../db");

const axios = require("axios");
const { KEY_API } = process.env;
//filtros para utilizarlo despues.
function filtarGenersName(array) {
  return array.map((genre) => {
    return {
      name: genre.name,
    };
  });
}

//se hace la consulta por genres a la api//
const getGenerAllController = async () => {
  try {
    const infoGenerApi = await axios.get(
      `https://api.rawg.io/api/genres?&key=${KEY_API}`
    );
    const infoGenerApiData = infoGenerApi.data.results;
    /// se hace un filtro para solo retornar el name del genres.
    const filtrogenres = filtarGenersName(infoGenerApiData);
    // verificar si ya existe en db
    const existeGenres = await Genre.findAll({
      where: {
        name: filtrogenres.map((genres) => genres.name),
      },
    });
    //filtrar genres no ecistente  en db
    const newGenres = filtrogenres.filter((genre) => {
      return !existeGenres.some(
        (existingGenre) => existingGenre.name === genre.name
      );
    });

    if (newGenres.length > 0) {
      await Genre.bulkCreate(newGenres);
    }

    console.log("Géneros guardados en la base de datos.");
    return newGenres;
  } catch (error) {
    "Error al obtener datos de la API:", error;
  }
};

// Obtiene un arreglo con todos los géneros existentes de la API.👍
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

module.exports = { getGenerAllController };
