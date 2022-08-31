import { combineReducers } from "redux";
import likeReducer from './likeReducer';


export const makeRootReducer = () => {
      return combineReducers({
      like: likeReducer,
      });
}

export default makeRootReducer