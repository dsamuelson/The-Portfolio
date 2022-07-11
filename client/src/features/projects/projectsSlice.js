import {
    SET_PORTFOLIO_PROJECTS,
    REMOVE_PROJECT
} from '../../utils/actions'

const initialState = {
    projects: [],
    ignoredProjects: []
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PORTFOLIO_PROJECTS:
            return {
                ...state,
                projects: [...action.projects]
            }
        case REMOVE_PROJECT:
            return {
                ...state,
                ignoredProjects: [...action.ignoredProjects]
            }
        default:
            return state;
    }
}