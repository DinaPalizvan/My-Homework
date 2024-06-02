import {legacy_createStore} from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const store= legacy_createStore(cartReducer, composeWithDevTools())

export default store