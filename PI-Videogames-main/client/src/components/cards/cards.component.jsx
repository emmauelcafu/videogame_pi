import { useSelector } from "react-redux";
import Card from "../card/card.component";
import "./cards.style.css";

function Cards() {
  const videogames = useSelector((state) => state.videogame);
  const videogamesNames = useSelector((state) => state.videogameName);
  const order = useSelector((state) => state.order);

  // Determinar si hay una búsqueda activa
  const isSearching = videogamesNames.length > 0;

  // Filtrar videojuegos según si hay una búsqueda activa o no
  const filteredVideogames = isSearching ? videogamesNames : videogames;

  // Ordenar videojuegos según el estado de orden actual
  const sortedVideogames = [...filteredVideogames].sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0; // En caso de que el estado de orden sea nulo o no válido
  });
  console.log(videogames)
  if (!Array.isArray(sortedVideogames) || sortedVideogames.length === 0) {
    return <div>No hay datos de videojuegos disponibles.</div>;
  }
  console.log("Orden actual:", order);
  return (
    <div className="cards_component">
      {sortedVideogames.map((videogame) => {
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
