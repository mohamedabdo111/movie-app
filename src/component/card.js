import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Card = ({ showoncard }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="cards ">
      <Link to={`/movie/${showoncard.id}`}>
        <div className="cardd rounded-3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${showoncard.poster_path}`}
            alt="poster"
          />
          <div className="overLayes">
            <div className="overlay">
              <div className="overlay-content">
                <h5>اسم الفيلم: {showoncard.title} </h5>
                <h5>تاريخ الاصدار : {showoncard.release_date}</h5>
                <h5>عدد الاصوات : {showoncard.vote_count}</h5>
                <h5>التقييم: {showoncard.vote_average}</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Card;
