import { applyMiddleware, createStore } from "redux";
import catalogReducer from "./catalog/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

let store = createStore(catalogReducer, applyMiddleware(logger, thunk));

export default store;
