import { combineReducers } from "redux";

import { categoriesReducer } from "./features/categories/categoriesSlice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
});

export default rootReducer;