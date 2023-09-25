import {
  GET_VIDEOGAMES,
  GET_REPICES_DETAIL,
  GET_VIDEOGAMESNAME,
  SET_ORDER,
  SET_FILTER_RATING,
} from "../actions/index";

let initialState = {
  videogame: [],
  videogameId: null,
  videogameName: [],
  order: null,
  filterByRanting: null,

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogame: action.payload,
      };
    case GET_REPICES_DETAIL:
      return {
        ...state,
        videogameId: action.payload,
      }; //buscar por nombre
    case GET_VIDEOGAMESNAME:
      return {
        ...state,
        videogameName: action.payload,
      };
    case SET_ORDER:
      let sortedVideogames = [...state.videogame]; // Clona la lista de videojuegos
      if (action.order === "asc") {
        sortedVideogames.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.order === "desc") {
        sortedVideogames.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        order: action.order,
        videogame: sortedVideogames,
      };

      case SET_FILTER_RATING:
        return{
          ...state,
          filterByRanting: action.rating
        }


    default:
      return state;
  }
}

export default rootReducer;
