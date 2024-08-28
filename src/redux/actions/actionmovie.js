import axios from "axios";
import { Allmovies, UrlAllmovies } from "../types/types";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
export const getAllmovies = () => {
  return async (dispatch) => {
    const response = await axios.get(UrlAllmovies);
    console.log(response.data);
    dispatch({
      type: Allmovies,
      data: response.data.results,
      pages: 500,
    });
  };
};
export const getsearchmovies = (word) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8637422c9539a5009fc0e2012572360a&query=${word}&language=ar`
    );
    console.log(response);
    dispatch({
      type: Allmovies,
      data: response.data.results,
      pages: 500,
    });
  };
};

export const getmovieswithpagination = (number) => {
  return async (dipatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=8637422c9539a5009fc0e2012572360a&language=ar&page=${number}`
    );

    dipatch({
      type: Allmovies,
      data: res.data.results,
      pages: 500,
    });
  };
};
