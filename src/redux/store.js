import { createStore, applyMiddleware, combineReducers } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
