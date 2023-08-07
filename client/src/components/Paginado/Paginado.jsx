import React from "react";
import styles from "./Paginado.module.css";
import { setCurrentPage, setPrevPage, setNextPage } from "../../redux/slices/productsData";
import { useDispatch } from "react-redux";

export default function Paginado({ cardsInPage, totalCards, currentPage }) {
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalCards / cardsInPage); i++) {
    pageNumbers.push(i + 1);
  }
  const handleButtonClick = (number) => {
    dispatch(setCurrentPage(number));
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      dispatch(setPrevPage());
  }else{
      alert("No hay mas paginas")
  }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      dispatch(setNextPage());
  }else{
      alert("No hay mas paginas")
  }
  };

  const handleFirstPageClick = () => {
    dispatch(setCurrentPage(1));
  };
  const handleLastPageClick = () => {
    dispatch(setCurrentPage(pageNumbers.length));
  };

  const visiblePageNumbers = [];
  const maxVisibleButtons = 5;

  if (pageNumbers.length <= maxVisibleButtons) {
    visiblePageNumbers.push(...pageNumbers);
  } else {
    const halfMaxVisibleButtons = Math.floor(maxVisibleButtons / 2);
    const start = Math.max(currentPage - halfMaxVisibleButtons, 1);
    const end = Math.min(start + maxVisibleButtons - 1, pageNumbers.length);

    for (let i = start; i <= end; i++) {
      visiblePageNumbers.push(i);
    }
  }

  return (
    <div>
      <nav>
        {totalCards <= cardsInPage ? null : (
          <ul className={styles.pagination}>
            <li className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ""}`}>
              <button
                className={styles.paginationButton}
                onClick={handleFirstPageClick}
              >
                Primera
              </button>
            </li>
            <li className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ""}`}>
              <button
                className={styles.paginationButton}
                onClick={handlePreviousClick}
              >
                🡸
              </button>
            </li>
            {visiblePageNumbers.map((number) => (
              <li className={styles.paginationItem} key={number}>
                <button
                  className={`${styles.paginationButton} ${
                    currentPage === number ? styles.activeButton : ""
                  }`}
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li className={`${styles.paginationItem} ${currentPage === pageNumbers.length ? styles.disabled : ""}`}>
              <button
                className={styles.paginationButton}
                onClick={handleNextClick}
              >
                🡺
              </button>
            </li>
            <li className={`${styles.paginationItem} ${currentPage === pageNumbers.length ? styles.disabled : ""}`}>
              <button
                className={styles.paginationButton}
                onClick={handleLastPageClick}
              >
                Última
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}