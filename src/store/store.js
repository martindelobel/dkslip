import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import catalogReducer from "./catalog/reducers";
import cartReducer from "./cart/reducers";
import userReducer from "./user/reducer";
import categoryReducer from "./category/reducers";
import productReducer from "./product/reducers";
import { reducer as formReducer } from 'redux-form';
import deliveryReducer from "./delivery/reducers";

let reducers = combineReducers(
  {
    cartReducer:cartReducer,
    catalogReducer:catalogReducer,
    userReducer:userReducer,
    categoryReducer:categoryReducer,
    productReducer:productReducer,
    form: formReducer,
    deliveryReducer:deliveryReducer
  }
);

let store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
