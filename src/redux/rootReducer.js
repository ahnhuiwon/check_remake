import { combineReducers } from "redux";
import contentsReducer from "./reducer/contentsReducer";
import modalReducer from './reducer/modalReducer';


const rootReducer = combineReducers({
    contentsReducer,
    modalReducer
});

export default rootReducer;