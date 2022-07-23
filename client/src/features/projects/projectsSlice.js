import {
    SET_PORTFOLIO_PROJECTS,
    REMOVE_PROJECT
} from '../../utils/actions'

const initialState = {
    projects: []
};

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PORTFOLIO_PROJECTS:
            return {
                ...state,
                projects: [...action.projects]
            }
        default:
            return state;
    }
}