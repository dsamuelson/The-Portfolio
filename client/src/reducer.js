import { combineReducers } from "redux";

import { categoriesReducer } from "./features/categories/categoriesSlice";
import projectsReducer from "./features/projects/projectsSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    projects: projectsReducer
});

export default rootReducer;