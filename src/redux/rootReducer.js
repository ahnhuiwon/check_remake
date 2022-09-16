import { combineReducers } from "redux";
import contentsReducer from "./reducer/contentsReducer";
import modalReducer from './reducer/modalReducer';
import huntReducer from './reducer/huntReducer';
import parkReducer from "./reducer/parkReducer";
import unionReducer from './reducer/unionReducer';
import etcReducer from './reducer/etcReducer';
import bossReducer from './reducer/bossReducer';
import bossModalReducer from './reducer/bossModalReducer';


const rootReducer = combineReducers({
    contentsReducer,
    modalReducer,
    huntReducer,
    parkReducer,
    unionReducer,
    etcReducer,
    bossReducer,
    bossModalReducer
});

export default rootReducer;