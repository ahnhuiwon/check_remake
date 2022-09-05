import { combineReducers } from "redux";
import contentsReducer from "./reducer/contentsReducer";
import modalReducer from './reducer/modalReducer';
import huntReducer from './reducer/huntReducer';


const rootReducer = combineReducers({
    contentsReducer,
    modalReducer,
    huntReducer
});

export default rootReducer;