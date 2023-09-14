import {useSelector} from "react-redux";

import "./detail.style.css"

function Delail(){


const videoGameDetail = useSelector(state=>state.videogame) 
// valido si el es un array para saber si hay error:
if (!Array.isArray(videoGameDetail)) {
    return <div>No hay datos de videojuegos disponibles.</div>;
    
}
    return(
        <div className="Detail_component">


            <h1>estamos en el Detail</h1>

            <p>ID:{videoGameDetail.id}</p>
            <p>name</p>
            <p>imagen</p>
            <p>plataforma</p>
            <p>description</p>
            <p>fecha</p>
            <p>rating</p>
            <p>genre</p>

        </div>
    )
}


export default Delail ;