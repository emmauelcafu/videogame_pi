import { useSelector } from "react-redux";
import Card from "../card/card.component";
import "./cards.style.css";

function Cards() {
  const videogames = useSelector((state) => state.videogame);

  const videogamesNames = useSelector((state) => state.videogameName);
  const filterVideos = videogamesNames.length > 0;

 console.log(videogamesNames);

  const lisVideoGmaes = filterVideos ? videogamesNames : videogames;

  if (!Array.isArray(lisVideoGmaes)) {
    return <div>No hay datos de videojuegos disponibles.</div>;
  }
  return (
    <div className="cards_component">
      {lisVideoGmaes.map((videogame) => {
        return (
          <Card
            key={videogame.id}
            id={videogame.id}
            name={videogame.name}
            description={videogame.description}
            released={videogame.released}
            image={videogame.image}
            rating={videogame.rating}
            genres={videogame.genres}
            platforms={videogame.platforms}
          />
        );
      })}
    </div>
  );
}

export default Cards;
