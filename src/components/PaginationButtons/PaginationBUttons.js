import React from "react";
import "./PaginationButtons.css";

import { getBeersByName, getBeersByDate } from "../../api/search";

/**
 * Componente that represents the
 * current pagination state for each search
 */
function PaginationButtons({
  value,
  page,
  next,
  prev,
  beerName,
  selectedDate,
  setBeers,
  setLoader,
  setNext,
  setPrev,
  setPage
}) {
  function nextPage() {
    setPage(page + 1);
    if (value === "name") {
      getBeersByName(beerName, page + 1, setBeers, setLoader, setNext, setPrev);
    } else {
      getBeersByDate(
        selectedDate,
        page + 1,
        setBeers,
        setLoader,
        setNext,
        setPrev
      );
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
      if (value === "name") {
        getBeersByName(
          beerName,
          page - 1,
          setBeers,
          setLoader,
          setNext,
          setPrev
        );
      } else {
        getBeersByDate(
          selectedDate,
          page - 1,
          setBeers,
          setLoader,
          setNext,
          setPrev
        );
      }
    }
  }

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
