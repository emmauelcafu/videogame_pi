import axios from "axios";

export const GET_REPICES_DETAIL = "GET_REPICES_DETAIL";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMESNAME = "GET_VIDEOGAMESNAME";
export const POST_CREATEVIDEOGAMES = "POST_CREATEVIDEOGAMES";
export const SET_ORDER = "SET_ORDER";
export const SET_FILTER_RATING = "SET_FILTER_RATING";

export function getVideogameId(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/videogames/${id}`);
    const videoGamesId = response.data;
    return dispatch({
      type: GET_REPICES_DETAIL,
      payload: videoGamesId,
    });
  };
}

export function getVideogam() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    const videogames = response.data;
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: videogames,
    });
  };
}

export function getVideoname(name) {
  return async function (dispatch) {
    try{
   const response = await axios.get(`http://localhost:3001/videogames/?name=${name}`);
    const videogameName = response.data;
   
    return dispatch({
      type: GET_VIDEOGAMESNAME,
      payload: videogameName,
    });
  }catch (error){
    alert("error en la busqueda de nombre", error)
  }
  };
}

export function filterVideogames(order){
  return function(dispatch){
    return dispatch({
      type: SET_ORDER,order
    })
  }
}

export function filterRantigVideoGames(rating){
  return function(dispatch){
    return dispatch({
      type: SET_FILTER_RATING,rating
    })
  }
}
