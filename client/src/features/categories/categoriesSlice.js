import {
    UPDATE_CATEGORIES,
    CURRENT_CATEGORY
} from '../../utils/actions'

const initialState = {
    categories: [{name: 'About', description: 'All about Me'}, {name: 'Portfolio', description: 'My work and projects'}, {name: 'Contact', description: 'Reach out to me'}, {name: 'Resume', description: 'My Resume and Qualifications'}],
    currentCategory: {name: 'About', description: 'All about Me'}
}

export function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        case CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        default:
            return state;
    }
}