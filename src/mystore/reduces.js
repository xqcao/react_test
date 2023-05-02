import { combineReducers } from "redux";
import todoReducer from "./todos/todos_reduce";

export default combineReducers({ todoState: todoReducer });
