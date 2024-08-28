import { Allmovies } from "../types/types";
const intialvalue = { listOfmovies: [], pageCount: 0 };
export const ReducerOne = (state = intialvalue, action) => {
  switch (action.type) {
    case Allmovies: {
      return { listOfmovies: action.data, pageCount: action.pages };
    }
    default: {
      return state;
    }
  }
};
