import React, { useEffect, useState } from "react";
import Card from "./card";
import { Row } from "react-bootstrap";
import PaginationBtn from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllmovies } from "../redux/actions/actionmovie";
const Movielist = () => {
  const [movies, setmovies] = useState([]); // to show first Movies

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllmovies());
  }, []);
  const values = useSelector((state) => state.listOfmovies);

  useEffect(() => {
    setmovies(values);
  }, [values]);
  return (
    <Row className="my-2">
      {movies.length >= 1 ? (
        movies.map((item) => {
          return (
            <>
              <Card showoncard={item}></Card>
            </>
          );
        })
      ) : (
        <h2>لا يوجد افلام</h2>
      )}

      {movies.length >= 1 ? <PaginationBtn></PaginationBtn> : null}
    </Row>
  );
};

export default Movielist;
