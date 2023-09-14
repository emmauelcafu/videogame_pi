import './card.style.css'
import { Link } from 'react-router-dom';

function Card (props){
   const id = props.id

    return(
        <div className='card_component'>
            <Link className="Link_card" to={`/home/${id}`}>
            <img className='image' src={props.image} alt={props.name}  />
            <h3>{props.name}</h3>
            <p>Géneros: {props.genres.join(', ')}</p>
            </Link>
        </div>
    )
    
    }
    
    export default Card;