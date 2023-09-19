import axios from "axios";

export const GET_REPICES_DETAIL = "GET_REPICES_DETAIL";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
    
export function getVideogameId(id){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/videogames/${id}`)
         const videoGamesId = response.data
        return dispatch({
            type: GET_REPICES_DETAIL,
            payload: videoGamesId
        })
    }
};

export function getVideogam(){

    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/videogames')
        const videogames = response.data
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames
        })
    }
    }