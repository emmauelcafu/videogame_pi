import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


import "./form.style.css"

function Form() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    image: "",
    rating: "",
    platforms: "",
    genres: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;
     // Si el campo es "genres", asegúrate de manejar las selecciones múltiples
     if (property === "genres") {
      // Verifica si el checkbox está marcado o desmarcado
      value = form.genres.includes(value)
        ? form.genres.filter((genre) => genre !== value)
        : [...form.genres, value];
    }



    setForm({ ...form, [property]: value });
  };

  const submiHandler = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(form);

    axios
      .post("http://localhost:3001/videogames/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => alert("errrdaaaa el juego se creo"))
      .catch((err) => alert("eyyyy! no se creo el video juego errrrrrdaaaa"));
  };
  return (
    <div className="div-form">
      <h1> Registra tu video juego</h1>

      <form onSubmit={submiHandler}>
        <div>
          <label>Nombre: </label>
          <input type="text" onChange={changeHandler} name="name" />
        </div>
        <div>
          <label>Descripcion: </label>
          <input type="text" onChange={changeHandler} name="description" />
        </div>
        <div>
          <label>fecha: </label>
          <input type="date" onChange={changeHandler} name="released" />
        </div>
        <div>
          <label>Imagen: </label>
          <input type="text" onChange={changeHandler} name="image" />
        </div>
        <div>
          <label>Rating: </label>
          <input type="number" onChange={changeHandler} name="rating" />
        </div>
        <div>
          <label>Plataforma: </label>
          <input type="text" onChange={changeHandler} name="platforms" />
        </div>

        <label>Género: </label>
        <div>
  <label>Género: </label>
  <input type="checkbox" name="genres" value="Acción" onChange={changeHandler} /> Acción
  <input type="checkbox" name="genres" value="Indie" onChange={changeHandler} /> Indie
  <input type="checkbox" name="genres" value="Adventure" onChange={changeHandler} /> Adventure
  <input type="checkbox" name="genres" value="RPG" onChange={changeHandler} /> RPG
  <input type="checkbox" name="genres" value="Strategy" onChange={changeHandler} /> Strategy
  <input type="checkbox" name="genres" value="Shooter" onChange={changeHandler} /> Shooter
  <input type="checkbox" name="genres" value="Casual" onChange={changeHandler} /> Casual
  <input type="checkbox" name="genres" value="Simulation" onChange={changeHandler} /> Simulation
  <input type="checkbox" name="genres" value="Puzzle" onChange={changeHandler} /> Puzzle
  <input type="checkbox" name="genres" value="Arcade" onChange={changeHandler} /> Arcade
  <input type="checkbox" name="genres" value="Platformer" onChange={changeHandler} /> Platformer
  <input type="checkbox" name="genres" value="Massively Multiplayer" onChange={changeHandler} /> Massively Multiplayer
  <input type="checkbox" name="genres" value="Racing" onChange={changeHandler} /> Racing
  <input type="checkbox" name="genres" value="Sports" onChange={changeHandler} /> Sports
  <input type="checkbox" name="genres" value="Fighting" onChange={changeHandler} /> Fighting
  <input type="checkbox" name="genres" value="Family" onChange={changeHandler} /> Family
  <input type="checkbox" name="genres" value="Board Games" onChange={changeHandler} /> Board Games
  <input type="checkbox" name="genres" value="Educational" onChange={changeHandler} /> Educational
  <input type="checkbox" name="genres" value="Card" onChange={changeHandler} /> Card
  {/* Agrega más opciones de género según sea necesario */}
</div>

        <button>Enviar </button>

        <Link to="/home/">
          <button>ir al home</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
