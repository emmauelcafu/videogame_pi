import { GET_VIDEOGAMES} from "../actions/index";


let initialState ={videogame:[]}

function rootReducer(state=initialState, action){
    
    switch (action.type) {
        case GET_VIDEOGAMES:
        
          return{
            ...state,
            videogame: action.payload
            
          }      
        default:
            return state
    }

}
export default rootReducer;