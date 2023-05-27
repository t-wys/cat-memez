import { createStore } from "redux";
import { memesReducer } from "./reducers/globalReducers";

const store = createStore(memesReducer);

export default store;
