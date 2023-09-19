import { Link } from "react-router-dom";

function Landing(){
return(
    <div>

        <h1> bienvenido </h1>
        <Link to={"/home/"}>
        <button> Ir a home</button>

        </Link>
    </div>
)

}

export  default Landing;