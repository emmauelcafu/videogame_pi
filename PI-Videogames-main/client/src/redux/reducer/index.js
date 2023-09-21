import {
  GET_VIDEOGAMES,
  GET_REPICES_DETAIL,
  GET_VIDEOGAMESNAME,
  POST_CREATEVIDEOGAMES,
} from "../actions/index";

let initialState = {
  videogame: [],
  videogameId: null,
  videogamename: [],
  createvideogames: [],
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
      };
    case GET_VIDEOGAMESNAME:
      return {
        ...state,
        videogamename: action.payload,
      };
    case POST_CREATEVIDEOGAMES:
      return {
        ...state,
        createvideogames: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
