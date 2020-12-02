import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
const rootReducer = combineReducers({
  todoState: todoReducer,
});
export default rootReducer;
