import { combineReducers } from "redux";
import contentsReducer from "./reducer/contentsReducer";
import modalReducer from './reducer/modalReducer';
import huntReducer from './reducer/huntReducer';
import parkReducer from "./reducer/parkReducer";
import unionReducer from './reducer/unionReducer';


const rootReducer = combineReducers({
    contentsReducer,
    modalReducer,
    huntReducer,
    parkReducer,
    unionReducer
});

export default rootReducer;