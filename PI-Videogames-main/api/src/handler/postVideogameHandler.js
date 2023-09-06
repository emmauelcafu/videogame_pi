const {createVideogamesDB} = require('../controller/videogameControllers')


const postVideogameHandler = async(req,res)=>{
       const {name,description,released,image,rating}= req.body
       
            const acracteres = (name,description,released,image,rating)
            // console.log(name,description,released,image,rating);
       try {
        const newVideoGame  = await createVideogamesDB(acracteres)
        res.status(200).json(newVideoGame );
       
        
    } catch (error) {
        res.status(400).json({error: error.messenger});
        
    }

}

module.exports={postVideogameHandler};