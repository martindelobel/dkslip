import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import catalogReducer from "./catalog/reducers";
import cartReducer from "./cart/reducers";
import userReducer from "./user/reducer";



let reducers = combineReducers(
  {
    cartReducer:cartReducer,
    catalog:catalogReducer,
    userReducer:userReducer
  }
);

let store = createStore(reducers, applyMiddleware(logger, thunk));


export default store;
