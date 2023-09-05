const axios = require ('axios');

require('dotenv').config();
const {
    KEY_API,
  } = process.env;
  
//solicitud de todo los video juegos 
const getAllVideoGame=async ()=>{
    try{

    const infoApi = await axios.get(`https://api.rawg.io/api/games?&key=${KEY_API}`);
    const infoApiData = infoApi.data;
    return infoApiData;
}catch(error){
    console.error("Error al obtener datos de la API:", error);
}
}

// controlamos el get por nonbre
const getVideogByName=async(name)=>{
   try{
    const infoApi  = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${KEY_API}`);
    
    const infoApiData  = infoApi.data;
    return infoApiData

   }catch(error){
    console.error("Error al obtener datos de la API:", error);

   }

}
// consultar por  /:id 
const getVideogId= async(id)=>{
    try {

        const infoApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY_API}`)
        const infoApiData = infoApi.data
        return infoApiData;
    } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    }

}


module.exports = {
    getVideogByName,
    getAllVideoGame,
    getVideogId,
    
}