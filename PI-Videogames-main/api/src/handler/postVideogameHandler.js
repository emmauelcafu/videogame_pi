const {createVideogamesDB} = require('../controller/videogameControllers')


const postVideogameHandler = async(req,res)=>{
       const {name,description,released,image,rating,platforms,Genres }= req.body
            // console.log(name,description,released,image,rating);
           
       try {
        const newVideoGame  = await createVideogamesDB(name,description,released,image,rating, platforms,Genres )
        
        res.status(200).json(newVideoGame);
       
        
    } catch (error) {
        res.status(400).json({error: error.messenger});
        // console.log(error);
    }

}
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.👍
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).

module.exports={postVideogameHandler};