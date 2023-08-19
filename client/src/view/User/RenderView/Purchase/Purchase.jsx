import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Purchase.module.css"
import empty from "../../../../assets/empty.svg"

function Purchase() {

  const [infoPurchase, setInfoPurchase] = useState([])

  const idUser = localStorage.getItem('userId');

  useEffect(() => {
    purchaseUser()
  }, [])

  async function purchaseUser () {
    const {data} = await axios.get("/purchase");
    const infoFiltered = data.filter((purchase) => purchase.userPurchase === idUser).map(obj => {
      const fecha = new Date(obj.createdAt);
      const year = fecha.getFullYear();
      const month = fecha.getMonth() + 1;
      const day = fecha.getDate();
      return {
      id: obj.id,
      monto: obj.monto,
      products: obj.Prods,
      fecha : [year, month, day]
    }})
    setInfoPurchase(infoFiltered);
  }

  return (
    <div className={style.updateInfo}>
    <h2 className={style.titleSection}>Compras Realizadas</h2>
        {infoPurchase.length !== 0 ? infoPurchase.map((purchase, i) => (
          purchase.monto === 0 ? null : (<div key={i} className={style.containerPurchase}>
          <div className={style.containerFecha}>{purchase.fecha.map((fecha, i) => <p key={i} className={style.fecha}>{fecha}</p>)}</div>
          <div className={style.viewPurchase}>
            <div className={style.containerNames}>{purchase.products.map((prod, i) => (<h5 key={i} className={style.nameProds}>{prod.name}</h5>))}</div>
            <b className={style.totalPrice}>Total: {purchase.monto}</b>
          </div>
        </div>)
        ))
        : <div className={style.containerImageEmpty}>
            <img className={style.imageEmpty} src={empty} alt="empty" />
            <i className={style.noPurchaseText}>No se Realizo una Compra</i>
          </div>}
</div>
  )
}

export default Purchase