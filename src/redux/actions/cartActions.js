import { ADD_TO_CART } from "./actions";
import { SET_SHOW_TOAST } from "./actions";

const addToCart = (data)=>{
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}

const setShowToast=(data)=>{
    return {
        type: SET_SHOW_TOAST,
        payload: data
    }
}

export {addToCart, setShowToast}