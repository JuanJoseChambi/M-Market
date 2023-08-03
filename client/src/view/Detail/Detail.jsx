import React, { useState } from "react";
import style from "./Detail.module.css"
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams()
    const [button, setButton] = useState(false)

    function handlerButton(){
        setButton(!button)
    }

  return (
    <div className={style.detailView}>
      <NavLink to="/home">
        <button className={style.returnBack}>|Home</button>
      </NavLink>
      <div className={style.cardProduct}>
        <div className={style.containerImg}>
            <img src="https://jumboargentina.vtexassets.com/arquivos/ids/427751-800-auto?v=636495154762100000&width=800&height=auto&aspect=true%22," alt="" className={style.image} />
        </div>
        <div className={style.containerInfoProduct}>
            <h2 className={style.nameProduct}>Galletitas Dulces Rellenas Con Crema Oreo 354g</h2>
            <div className={style.brandUnitContainer}>
                <h5 className={style.brandProduct}>Oreo</h5>
                <h5 className={style.unitProduct}>| Unidad: 150</h5>
            </div>
            <b className={style.scoreProduct}>⭐⭐⭐⭐⭐</b>
            <p className={style.descountProduct}>$<s>1.120,89</s><p className={style.descount}>30%</p></p>
            <h3 className={style.priceProduct}>$959,92</h3>
            <p className={style.priceRegularProduct}>Precio Regular: $2.711,64 x kg</p>
            {button
            ?<button className={style.btn}>Comprar<button className={style.changerButton} onClick={handlerButton}><i class='bx bx-rotate-right'></i></button></button>
            :<button className={style.btn}>Agregar<button className={style.changerButton} onClick={handlerButton}><i class='bx bx-rotate-right'></i></button></button>}
        </div>
      </div>
      <div className={style.otherInfo}>
        <div className={style.blockInfo}>
            <div className={style.containersTabs}>
                <button className={style.tabs}>Description</button>
                <button className={style.tabs}>Comentarios</button>
            </div>
            <div className={style.blockView}>
                Description
            </div>
        </div>
      </div>
    </div>
  );
}
