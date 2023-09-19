import { Link } from "react-router-dom";
import Search from "../search/search.component"


import "./navnar.style.css"

function Navbar (){

    return(
        <div className="div1">
            <form className="form-search" action="" >

            {/* buscnado */}
            <Search className="search" />

           
            
            <Link to={"/form/"}>
            <button className="boton-crear"> Crear video juegos</button>
            </Link>

            </form>
        </div>
        ) 
    }
    
    export default Navbar;