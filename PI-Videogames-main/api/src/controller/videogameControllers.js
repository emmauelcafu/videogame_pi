const axios = require ('axios');
const {Videogame} =require('../db');
// const {genresHandler} = require('../handler/GenresHandler');
// const {getGenerAllController}= require('../controller/genresControllers')

require('dotenv').config();
const {
    KEY_API,
  } = process.env;

//creamos un video juegos a la DB//

  const createVideogamesDB =async (name,description,released,image,rating,platforms)=>{

    const newVideoGame = await Videogame.create({
        name,
        description,
        released,
        image,
        rating,
        platforms
    })
    return newVideoGame;
}

//filto para la api//
function infofilter(array){
        return{
            name:array.name,
             description:array.description,
             released: array.released,
             image:array.background_image,
             rating: array.rating,
           platforms: array.platforms.map(platform=>platform.platform.name),    //?.map(plataf=>plataf.name),
           genres: array.genres.map(genre=>genre.name) //
        }
    }

  
//solicitud de todo los video juegos 
const getAllVideoGame=async ()=>{

    // const VideogameDB = await Videogame.findAll();

    try{
    const infoApi = await axios.get(`https://api.rawg.io/api/games?&key=${KEY_API}`);
    const infoApiData = infoApi.data;
    
    return {infoApiData }

}catch(error){
    console.error("Error al obtener datos de la API:", error);
}
}

//Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Debe buscar tanto los de la API como los de la base de datos.
// controlamos el get por nonbre
const getVideogByName=async(name)=>{
   try{
    const infoApi  = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${KEY_API}`);
    // se filtra la api//
    const infoApiData  = infofilter(infoApi.data);
    return infoApiData

   }catch(error){
    console.error("Error al obtener datos de la API:", error);
       
   }

}
//Tiene que incluir los datos del género del videojuego al que está asociado.👍
//Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.👍
// consultar por  /:id 👍
const getVideogId= async(id,source)=>{
    

    try {
            // se incluye la bd para validar si es en la api o en bd
        const infoApi =source === "api"? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY_API}`)).data: await Videogame.findByPk(id)
        // se filtra la api//
        const infoApiData =  infofilter(infoApi);
        // const genreName = await getGenerAllController();
     
        // infoApiData.genres = genreName;

        return infoApiData;
    } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    }

}




module.exports = {
    getVideogByName,
    getAllVideoGame,
    getVideogId,
    createVideogamesDB
    
}