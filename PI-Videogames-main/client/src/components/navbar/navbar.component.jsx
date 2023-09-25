import { Link } from "react-router-dom";
import Search from "../search/search.component"
import Filter from "../filter/filter.component"

import "./navbar.style.css"

function Navbar (){

    return(
        <div className="div1">
            <form className="form-search" action="" >
            {/* filtrar */}
            <Filter/>

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