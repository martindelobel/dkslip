import { createStore } from "redux";
import catalogReducer from "./catalog/reducers";

let store=createStore(catalogReducer);

export default store;
