
function Form(){
return(
    <div>
        <h1> Registra tu video juego</h1>
        
        <form >
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre"  /><br /><br />

                    <label htmlFor="imagen">Imagen:</label>
                    <input type="file" id="imagen" name="imagen" /><br /><br />

                    <label htmlFor="descripcion">Descripción:</label><br />
                    <textarea id="descripcion" name="descripcion" rows="4" cols="50"  ></textarea><br /><br />

                    <label htmlFor="plataformas">Plataformas:</label>
                    <input type="text" id="plataformas" name="plataformas"  /><br /><br />

                    <label htmlFor="fechaLanzamiento">Fecha de Lanzamiento:</label>
                    <input type="date" id="fechaLanzamiento" name="fechaLanzamiento"  /><br /><br />

                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" min="0" max="10" step="0.1"   /><br /><br />

                    <label>Géneros:</label><br />
                    <input type="checkbox" id="accion" name="generos" value="Acción"   />
                    <label htmlFor="accion">Acción</label><br />
                    <input type="checkbox" id="aventura" name="generos" value="Aventura"   />
                    <label htmlFor="aventura">Aventura</label><br />
                    {/* Agregar más géneros según sea necesario */}

                    <br />

                    <input type="submit" value="Crear Videojuego" />
                </form>


    </div>
)

}

export default Form;