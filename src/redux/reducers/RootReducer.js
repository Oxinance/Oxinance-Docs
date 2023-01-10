import {combineReducers} from "redux";
import ApiReducer from "./ApiReducer";

const RootReducer = combineReducers({
    api: ApiReducer,
})

export default RootReducer;
