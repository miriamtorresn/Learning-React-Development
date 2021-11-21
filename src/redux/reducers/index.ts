import { combineReducers } from "redux";
import productReducer from "./productReducer";

// Preparing in case you're using more reducers
const rootReducer = combineReducers({
  productReducer
});

export default rootReducer;
