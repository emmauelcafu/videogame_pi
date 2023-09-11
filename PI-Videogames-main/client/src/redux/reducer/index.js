import {GET_REPICES_DETAIL} from "../actions/index"

let initialState ={videogame:[]}

function rootReducer(state=initialState, action){
    
    switch (action.type) {
        case GET_REPICES_DETAIL:
          return{
            ...state,
            videogame: action.payload
          }      
    
        default:
            return state
    }

}
export default rootReducer;