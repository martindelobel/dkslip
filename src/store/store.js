import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducers";
import cartReducer from "./cart/reducers";
//import userReducer from "./user/reducer";



let reducers = combineReducers(
  {
    cartReducer:cartReducer,
    catalogReducer:catalogReducer,
  //userReducer:userReducer
  }
);

let store = createStore(reducers, applyMiddleware(logger, thunk));


export default store;
