import {combineReducers} from "redux";
import ProjectsReducer from "./ProjectsReducer";

const RootReducer = combineReducers({
    projects: ProjectsReducer,
})

export default RootReducer;
