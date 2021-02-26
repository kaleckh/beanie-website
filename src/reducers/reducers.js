import { combineReducers } from "redux";
import beanieReducer from "./beanieReducer"
const reducers = combineReducers({
  beanies: beanieReducer 

  
});

export default reducers;
