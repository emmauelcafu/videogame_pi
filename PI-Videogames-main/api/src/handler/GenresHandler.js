const   {getGenerAllController} = require('../controller/genresControllers')
// ("/genres")
const genresHandler =async (req,res)=>{

    try {
        const genresByNAme = await getGenerAllController()
        res.status(200).json(genresByNAme)


    } catch (error) {
    res.status(400).json({error: error.messenger})

    }

}

module.exports={
    genresHandler
}