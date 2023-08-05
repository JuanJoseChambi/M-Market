import React from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allProducts } from "../../redux/slices/productsData";
import Paginado from "../../components/Paginado/Paginado";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  // PAGINATION VARS
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsInPage, setCardsInPage] = useState(32);

  const totalCards = products.length;
  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = products.slice(firstIndex, lastIndex); // Dividimos el array original con los productos a mostrar
  console.log(cardsShowed);
  const setPagina = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div id="Home">
      <div>
        <Nav />
        <h1>Mini Market</h1>
        <Paginado
          currentPage={currentPage}
          cardsInPage={cardsInPage}
          totalCards={totalCards}
          setPagina={setPagina}
        />

        <Ordenamiento />

        <div className="container">
          <div className="row justify-content-center">
            {cardsShowed.map((item) => (
              <div className="col-md-3 mb-3" key={item.id}>
                <Product
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <ProductContainer/>  */}

        <Footer />
      </div>
    </div>
  );
}
