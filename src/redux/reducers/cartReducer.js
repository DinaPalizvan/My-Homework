import { ADD_TO_CART, SET_SHOW_TOAST } from "../actions/actions";

const initialState= {
    cart:[],
    toast: false
}

const cartReducer= (state= initialState, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state, 
                cart: [...state.cart, action.payload],
            }
        case SET_SHOW_TOAST:
            return {
                ...state,
                toast: action.payload
            }
        default:
            return state;
    }
}


export default cartReducer