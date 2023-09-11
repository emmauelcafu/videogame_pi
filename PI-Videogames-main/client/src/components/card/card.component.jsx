import './card.style.css'


function Card ({videogames}){
    const{name,description,released,image,rating,platforms}=videogames

    return(
        <div className='card_component'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{released}</p>
            <p>{image}</p> 
            <p>{rating}</p>
            <p>{platforms}</p>
        </div>
    )
    
    }
    
    export default Card;