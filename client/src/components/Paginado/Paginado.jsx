import React from "react";

export default function Paginado(props) {
  console.log(props)
  let isFirstPage = props.currentPage === 1 ? "disabled" : "";
  let isLastPage =
    props.currentPage === Math.ceil(props.totalCards / props.cardsInPage)
      ? "disabled"
      : "";

  let { currentPage, setPagina } = props;

  return (
    <nav>
      <ul>
        <li >
          <a
            href="#"
            
            onClick={() => setPagina(currentPage - 1)}
            tabIndex="-1"
          >
            Anterior
          </a>
        </li>

        <li>
          <a
            href="#"
            
            onClick={() => setPagina(currentPage + 1)}
          >
            Siguiente
          </a>
        </li>
      </ul>
      <div>
        <p>
          {currentPage} de {Math.ceil(props.totalCards / props.cardsInPage)}
        </p>
      </div>
    </nav>
  );
}
