import { Link } from "react-router-dom";
import Search from "../search/search.component"
function Navbar (){

    return(
        <div>
            <form action="">

            {/* buscnado */}
            <Search/>

           
            
            <Link to={"/form/"}>
            <button> Crear video juegos</button>
            </Link>

            </form>
        </div>
        ) 
    }
    
    export default Navbar;