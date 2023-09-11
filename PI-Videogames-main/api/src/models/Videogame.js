const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    released:{ 
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.INTEGER
    },
    platforms:{
      type: DataTypes.STRING
    },
    created:{
      type:DataTypes.BOOLEAN,
      defaultValue:true,
  }
  });
};


 //**modelos de video juegos** ; con id unico
// id:
// Nombre:
// imagen:
// plataforma:
// descripcion:
// fecha_de_lanzamiento:
// rating:
// genero: