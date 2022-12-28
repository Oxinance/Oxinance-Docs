import {CHANGE_DEVELOPMENT_MODE, SET_PROJECTS, SET_SELECTED_PROJECT} from "../actions/ProjectsActions";

const initialState = { isLoaded: false, isLive: true }

const ProjectsReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_PROJECTS: {
            return action.payload;
        }
        case SET_SELECTED_PROJECT: {
            return action.payload;
        }
        case CHANGE_DEVELOPMENT_MODE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default ProjectsReducer;
