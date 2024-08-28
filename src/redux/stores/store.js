import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { ReducerOne } from "../reducers/reducerone";

export const storeone = createStore(ReducerOne, applyMiddleware(thunk));
