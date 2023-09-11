require('dotenv').config();

const axios = require("axios");
const {KEY_API} = process.env;
//filtros para utilizarlo despues.
function filtarGenersName (array){
    return array.map((genre)=>{
        return{
            name: genre.name
        }
    })
}

  //se hace la consulta por genres a la api//
const getGenerAllController=async()=>{
    try{
    const infoGenerApi= await axios.get(`https://api.rawg.io/api/genres?&key=${KEY_API}`)
    const infoGenerApiData = infoGenerApi.data.results;
        /// se hace un filtro para solo retornar el name del genres.
    return  filtarGenersName(infoGenerApiData);

    }catch(error){
        "Error al obtener datos de la API:",error
    }
}




// Obtiene un arreglo con todos los géneros existentes de la API.👍
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

module.exports={getGenerAllController}