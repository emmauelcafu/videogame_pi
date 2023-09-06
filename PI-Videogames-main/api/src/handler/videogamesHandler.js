const {getAllVideoGame,getVideogByName,getVideogId}= require("../controller/videogameControllers")



const videogameHandler = async(req,res)=>{
    const {name}=req.query;
  
    try {
        if(name){//lo tomamos por nombre si no esta , mandara todo los juegos.
            const videogByName= await getVideogByName(name)
            res.status(200).json(videogByName);
        }else {//todo los juegos*=)
            const response =await getAllVideoGame();
            res.status(200).json(response)
        }

    } catch (error) {
     
        res.status(400).send("pagina no encontrada");
                
    }
}

//se tiene que buscar por db y api con sus filtros
//resivimos params de id 
const videogamedetailHandler = async(req,res)=>{
        const {id}=req.params;
    try {
        const videogId =await getVideogId(id);
        res.status(200).json(videogId);
        
    } catch (error) {
        res.status(400).send("pagina no encontrada");
        
    }


}

module.exports= {videogameHandler,videogamedetailHandler}