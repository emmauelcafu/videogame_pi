import { GET_VIDEOGAMES, GET_REPICES_DETAIL} from "../actions/index";


let initialState ={videogame:[], videogameId:null}

function rootReducer(state=initialState, action){
    
    switch (action.type) {
        case GET_VIDEOGAMES:
        
          return{
            ...state,
            videogame: action.payload
            
          }    
          case GET_REPICES_DETAIL:

          return{
            ...state,
            videogameId: action.payload
          }

          
        default:
            return state
    }
    
}
export default rootReducer;