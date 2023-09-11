import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navnar.component";
import { useSelector} from "react-redux";
function Home (){

    // const dispath = useDispatch();
    const allVideogame =useSelector((state)=>state.videogames);


    return(
        <div>
            <h1>hola estamos en home</h1>
            <Navbar/>
            <Cards allvideogame={allVideogame}/>
        </div>
    )

}

export default Home;