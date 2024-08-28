import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import img1 from "../images/img1.jpeg";
import "../style.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [mov, setmov] = useState([]);
  const para = useParams();

  const ShowDetails = async () => {
    const x = await axios.get(
      `https://api.themoviedb.org/3/movie/${para.id}?api_key=8637422c9539a5009fc0e2012572360a&language=ar`
    );
    setmov(x.data);
  };

  useEffect(() => {
    ShowDetails();
  }, []);

  console.log(mov);
  return (
    <div>
      <Row className=" mt-3">
        <Col className="d-flex flex-wrap justify-content-center parent-div">
          <div className="col-xs-12 col-sm-7 col-md-5 col-lg-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              alt="1"
              className=" card obj"
            ></img>
          </div>
          <div className="col-xs-12 col-sm-7 col-md-6 col-lg-8">
            <h4>اسم الفيلم: {mov.title}</h4>
            <h4>تاريخ الفيلم: {mov.release_date}</h4>
            <h4>عدد المقيمين: {mov.vote_count}</h4>
            <h4>التقييم: {mov.vote_average}</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="parent-story p-0">
          <div className="story">
            <h4 className="p-3 ">القصة:</h4>
            <p className="px-4">{mov.overview}</p>
          </div>
        </Col>
      </Row>

      <Row className="my-3 text-center">
        <Col xs="12" sm="6" className="my-2">
          <Link to={"/"}>
            <Button className="btnss">العودة الي الصفحة الرئيسية</Button>
          </Link>
        </Col>
        <Col className="my-2">
          <a href={mov.homepage}>
            <Button className="btnss">مشاهدة الفيلم</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
