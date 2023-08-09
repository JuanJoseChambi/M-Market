import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, setCategory } from "../../redux/slices/productsData";
import Nav from "../../components/Nav/Nav";
import Paginado from "../../components/Paginado/Paginado";
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";
import Product from "../../components/Product/Product";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css"


export default function Home() {
  const dispatch = useDispatch();
  const { products, currentPage } = useSelector((state) => state.products);

  // PAGINATION VARS
  const cardsInPage = 30;
  const totalCards = products.length;
  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = products.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(allProducts());
    dispatch(setCategory())
  }, []);
  
  return (
    <div id="Home">
      <div>
        <Nav />
        
        <Carousel />
        

        <h1 className={styles.container}> 🛍️ Mini Market 🛍️  </h1>
        <br></br>

        <Paginado
          cardsInPage={cardsInPage}
          totalCards={totalCards}
          currentPage={currentPage}
        />

      
        <Ordenamiento/>

        <div className="container">
          <div className="row justify-content-center">
            {cardsShowed.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
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

        <Footer />
      </div>
    </div>
  );
}
