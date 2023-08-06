import React, { useState, useEffect } from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ currentPage, cardsInPage, totalCards, setPagina }) {
  
  const [activeButton, setActiveButton] = useState(currentPage);

 

  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalCards / cardsInPage); i++) {
    pageNumbers.push(i + 1);
  }

  const handleButtonClick = (number) => {
    setActiveButton(number);
    setPagina(number);
  };

  const handlePreviousClick = () => {
    const previousPage = Math.max(currentPage - 1, 1);
    setActiveButton(previousPage);
    setPagina(previousPage);
  };

  const handleNextClick = () => {
    const nextPage = Math.min(currentPage + 1, pageNumbers.length);
    setActiveButton(nextPage);
    setPagina(nextPage);
  };

  const handleFirstPageClick = () => {
    setActiveButton(1);
    setPagina(1);
  };

  const handleLastPageClick = () => {
    setActiveButton(pageNumbers.length);
    setPagina(pageNumbers.length);
  };

  const visiblePageNumbers = [];
  const maxVisibleButtons = 5;

  if (pageNumbers.length <= maxVisibleButtons) {
    visiblePageNumbers.push(...pageNumbers);
  } else {
    const halfMaxVisibleButtons = Math.floor(maxVisibleButtons / 2);
    const start = Math.max(activeButton - halfMaxVisibleButtons, 1);
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
            <li className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}>
              <button
                className={styles.paginationButton}
                onClick={handleFirstPageClick}
                disabled={currentPage === 1}
              >
                Primera
              </button>
            </li>
            <li className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}>
              <button
                className={styles.paginationButton}
                onClick={handlePreviousClick}
                disabled={currentPage === 1}
              >
               🡸
              </button>
            </li>
            {visiblePageNumbers.map((number) => (
              <li className={styles.paginationItem} key={number}>
                <button
                  className={`${styles.paginationButton} ${
                    activeButton === number ? styles.activeButton : ""
                  }`}
                  onClick={() => handleButtonClick(number)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li className={`${styles.paginationItem} ${currentPage === pageNumbers.length ? styles.disabled : ''}`}>
              <button
                className={styles.paginationButton}
                onClick={handleNextClick}
                disabled={currentPage === pageNumbers.length}
              >
               🡺
              </button>
            </li>
            <li className={`${styles.paginationItem} ${currentPage === pageNumbers.length ? styles.disabled : ''}`}>
              <button
                className={styles.paginationButton}
                onClick={handleLastPageClick}
                disabled={currentPage === pageNumbers.length}
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
