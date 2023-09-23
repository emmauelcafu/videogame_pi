import { useEffect } from "react";
import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navnar.component";
import { useDispatch } from "react-redux";
import { getVideogam } from "../../redux/actions/index";

import "./home.style.css";

function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getVideogam());
  }, [dispatch]);

  return (
    <div>
      <h1 className="h1-text">Juegos a la moda</h1>
      <Navbar className="navBar" />
      <Cards />
    </div>
  );
}

export default Home;
