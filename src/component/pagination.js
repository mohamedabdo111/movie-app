import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getmovieswithpagination } from "../redux/actions/actionmovie";

const PaginationBtn = () => {
  const [coutnofpages, setofpages] = useState();
  const dispatch = useDispatch();
  const pages = useSelector((i) => i.pageCount);

  useEffect(() => {
    setofpages(pages);
  }, []);
  const handlePageClick = (i) => {
    dispatch(getmovieswithpagination(i.selected + 1));
  };

  const pageCount = coutnofpages;
  return (
    <Row>
      <Col>
        <ReactPaginate
          breakLabel="..."
          nextLabel="التالي"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="السابق"
          containerClassName={"pagination justify-content-center selecter p-3"}
          pageClassName={"page-item"}
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          activeClassName="active"
          breakClassName={"page-link"}
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
        />
      </Col>
    </Row>
  );
};

export default PaginationBtn;
