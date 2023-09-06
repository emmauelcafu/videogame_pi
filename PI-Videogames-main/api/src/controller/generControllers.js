require('dotenv').config();

const axios = require("axios");
const {KEY_API} = process.env;

function filtarGenersName (array){
    return array.map((genre)=>{
        return{
            name: genre.name
        }
    })
}

  //se hace la consulta por gener a la api//
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


module.exports={getGenerAllController}