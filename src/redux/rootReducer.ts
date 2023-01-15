import { combineReducers } from "redux";
import { articlesReducer } from "./reducers/articles";

const RootReducer = combineReducers({
  articles: articlesReducer,
});
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
