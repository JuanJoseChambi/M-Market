import React from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allProducts } from "../../redux/slices/productsData";
import Paginado from "../../components/Paginado/Paginado";
import ProductContainer from "../../components/ProductContainer/ProductContainer"
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  //PAGINATION VARS
  let [currentPage, setCurrentPage] = useState(1);
  let cardsInPage = 20;


const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = (function () {
    if (products.length === 0)
      return products; //Si no hay productos para mostrar
    else return products?.slice(firstIndex, lastIndex); //Dividimos el array original con los proveedores a mostrar
  })();

  const setPagina = (num) => {
    setCurrentPage(num);
  };
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Nav />
        <Paginado
        currentPage={currentPage}
        cardsInPage={cardsInPage}
        totalCards={products?.length}
        setPagina={setPagina}
      />
         </div>
      <h1>Mini Market</h1>
      <Ordenamiento/>
      <ProductContainer/>
   

    
    </div>
  );
}
