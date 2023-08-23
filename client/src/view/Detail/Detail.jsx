import React, { useEffect, useState } from "react";
import style from "./Detail.module.css"
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/productsData";
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

export default function Detail() {
    const { id } = useParams()
    const [products, setProducts] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
      product()
    }, [])
    async function product () {
      const { data } = await axios.get(`/product/${id}`);
      const {brand, description, image, name, price, score, unit } = data;
      const infoProducts = {id, brand, description, image, name, price, score, unit};
      setProducts(infoProducts)
    }

    function handlerAddCart () {
      dispatch(addToCart(products))
    }


   return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={style.detailView}>
        {/* <NavLink to="/home">
          <button className={style.returnBack}>Home</button>
        </NavLink> */}
        <div className={style.cardProduct}>
          <div className={style.containerImg}>
              <img src={products.image} alt={products.name} className={style.image} />
          </div>
          <div className={style.containerInfoProduct}>
              <h2 className={style.nameProduct}>{products.name}</h2>
              <div className={style.brandUnitContainer}>
                  <b className={style.brandProduct}>{products.brand}</b>
                  <p className={style.unitProduct}>| U{products.unit}</p>
              </div>
              <div className={style.descriptionCard}>
              <label className={style.textDescription}>Descripcion</label>
                {products.description}
                </div>
              <p className={style.priceProduct}>$ {products.price}</p>
              <button className={style.btn} onClick={() => handlerAddCart()}>Añadir</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}











{/* <h6 className={style.descountProduct}>$<s>1.120,89</s><p className={style.descount}>30%</p></h6> */}
{/* <p className={style.priceRegularProduct}>Precio Regular: $2.711,64 x kg</p> */}
{/* <div className={style.otherInfo}>
        <div className={style.blockInfo}>
            <div className={style.containersTabs}>
                <button className={style.tabs}>Description</button>
                <button className={style.tabs}>Comentarios</button>
            </div>
            <div className={style.blockView}>
                {products.description}
            </div>
        </div>
      </div> */}