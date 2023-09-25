// Filter.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterVideogames, filterRantigVideoGames } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState(""); // Estado para el orden seleccionado
  const [selectedRating, setSelectedRating] = useState(""); // Estado para el rating seleccionado

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setSelectedOrder(newOrder);
    dispatch(filterVideogames(newOrder)); // Aplicar el filtro al cambiar la selección
  };

  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setSelectedRating(newRating);
    dispatch(filterRantigVideoGames(newRating)); // Aplicar el filtro por rating al cambiar la selección
  };

  return (
    <div>
      <select
        name="Sort"
        value={selectedOrder}
        onChange={handleOrderChange} // Manejar el cambio de selección de orden
      >
        <option disabled value="">
          Sort
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select
        name="Rating"
        value={selectedRating}
        onChange={handleRatingChange} // Manejar el cambio de selección de rating
      >
        <option disabled value="">
          Rating
        </option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        {/* Agrega más opciones de rating según tus necesidades */}
      </select>
    </div>
  );
};

export default Filter;
