const {getAllVideoGame,getVideogByName}= require("../controller/videogameControllers")



const videogameHandler = async(req,res)=>{
    const {name}=req.query;
  
    try {
        if(name){
            const videogByName= await getVideogByName(name)
            res.status(200).json(videogByName);
        }else {
            const response =await getAllVideoGame();
            res.status(200).json(response)
        }

    } catch (error) {
     
        res.status(400).send("pagina no encontrada");
                
    }
}


module.exports= {videogameHandler}