import { Type } from "./action.type"


// Initialize the state
export const initialState ={
    basket:[]
}

// Define the reducer function

export const reducer = (state, action) =>{
    switch (action.type) {
        case Type.ADD_TO_BASKET: 
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
    
        default:
            return state;
    }
}

// const [state, dispatch] = useReducer(reducer,initialState)