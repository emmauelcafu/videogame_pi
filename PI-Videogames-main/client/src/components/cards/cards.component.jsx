import Card from "../card/card.component"
import './cards.style.css'

function Cards ({videogame}){

    const listaVideogame = videogame;

return(
    <div className='cards_component'>
        {listaVideogame?.map(videoGame=>(
            <Card videoGame={videoGame}/>
        ))}
       
    </div>
)

}

export default Cards;