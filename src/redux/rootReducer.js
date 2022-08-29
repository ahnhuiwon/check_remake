import { combineReducers } from "redux";
import contentsReducer from "./reducer/contentsReducer";


const rootReducer = combineReducers({
    contentsReducer
});

export default rootReducer;