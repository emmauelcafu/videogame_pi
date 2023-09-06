const   {getGenerAllController} = require('../controller/generControllers')
// ("/genres")
const generHandler =async (req,res)=>{

    try {
        const genresByNAme = await getGenerAllController()
        res.status(200).json(genresByNAme)


    } catch (error) {
    res.status(400).json({error: error.messenger})

    }

}

module.exports={
    generHandler
}