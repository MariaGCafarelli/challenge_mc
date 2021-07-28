import React from "react";
import "./PaginationButtons.css";

import { getBeersByDate } from "../../api/search";

function PaginationButtons({ page, next, prev, selectedDate, setBeers, setLoader, setNext, setPrev, setPage }) {
    
  function nextPage() {
    setPage(page + 1);
    getBeersByDate(
      selectedDate,
      page + 1,
      setBeers,
      setLoader,
      setNext,
      setPrev
    );
  };

  function prevPage() {
    setPage(page - 1);
    getBeersByDate(
      selectedDate,
      page - 1,
      setBeers,
      setLoader,
      setNext,
      setPrev
    );
  };

  return (
    <div className="pagination-buttons">
      <button
        disabled={!prev}
        onClick={prevPage}
        className="btn-font btn-pagination"
      >
        Prev
      </button>
      <span style={{ margin: 10, fontWeight: 700 }}>{page}</span>
      <button
        disabled={!next}
        onClick={nextPage}
        className="btn-font btn-pagination"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
