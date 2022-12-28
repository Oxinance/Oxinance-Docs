export const SET_PROJECTS = "SET_PROJECTS";
export const SET_SELECTED_PROJECT = "SET_SELECTED_PROJECT";
export const CHANGE_DEVELOPMENT_MODE = "CHANGE_DEVELOPMENT_MODE";

function getProjectLiveState(project) {
    if (project.live_stripe_account_id) {
        if (project.live_requirements.disabled_reason === null) {
            return "ONBOARD_COMPLETED"
        } else {
            return "ONBOARD_UNFINISHED"
        }
    } else {
        return "ONBOARD_NOT_STARTED"
    }
}

function getProjectSandboxState(project) {
    if (project.sandbox_stripe_account_id) {
        if (project.sandbox_requirements.disabled_reason === null) {
            return "ONBOARD_COMPLETED"
        } else {
            return "ONBOARD_UNFINISHED"
        }
    } else {
        return "ONBOARD_NOT_STARTED"
    }}

export function setProjects(response) {
    return async (dispatch, getState) => {
        if (response.status === 200 || response.status === 201) {

            const payload = { list: response.data, isLoaded: true, isLive: true, hasProjects: false };

            response.data.forEach((project) => {
                project.live_state = getProjectLiveState(project);
                project.sandbox_state = getProjectSandboxState(project);
            })

            if (response.data.length > 0) {
                payload.selectedProject = response.data[0];
            }

            dispatch({
                type: SET_PROJECTS,
                payload: payload
            })
        }
    }
}

export function setSelectedProject(project) {
    return async (dispatch, getState) => {
        const state = getState();

        const projects = {...state.projects};

        projects.selectedProject = project;

        console.log(projects.selectedProject)

        dispatch({
            type: SET_SELECTED_PROJECT,
            payload: projects
        })
    }
}

export function toogleMode() {
    return async (dispatch, getState) => {
        const state = getState();

        const projects = {...state.projects};

        projects.isLive = !state.projects.isLive;

        dispatch({
            type: CHANGE_DEVELOPMENT_MODE,
            payload: projects
        })
    }
}
