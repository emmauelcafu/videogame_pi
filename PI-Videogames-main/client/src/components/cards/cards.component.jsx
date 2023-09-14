import { useSelector } from "react-redux";
import Card from "../card/card.component"
import './cards.style.css'

function Cards (){
   
    const videogames = useSelector(state=>state.videogame)
    if (!Array.isArray(videogames)) {
        return <div>No hay datos de videojuegos disponibles.</div>;
        
    }
return(
    <div className='cards_component'>
        {videogames.map(videogame=>{
            return <Card 
            key={videogame.id}
            id={videogame.id}
            name={videogame.name}
            description={videogame.image}
            released={videogame.released}
            image={videogame.image}
            rating={videogame.rating}
            genres= {videogame.genres}
            platforms={videogame.platforms}
            
            />
    })}
       
    </div>
)

}

export default Cards;