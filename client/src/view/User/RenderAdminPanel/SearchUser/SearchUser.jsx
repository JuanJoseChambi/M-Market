import React, { useEffect, useState } from "react";
import style from "./SearchUser.module.css";
import axios from "axios";
import { setUsers, search } from "../../../../redux/slices/dashBoard";
import { useSelector, useDispatch } from "react-redux"
import empty from "../../../../assets/empty.svg"
import userEmpty from "../../../../assets/userEmpty.svg"

function SearchUser() { 
  const [purchaseId, setPurchseId] = useState("");
  const [infoUserPurchase, setInfoUserPurchase] = useState([]);

  useEffect(() => {
    if (purchaseId) {
      handlerPurchase();
    }
  }, [purchaseId]);

  async function handlerPurchase () {
    const {data} = await axios.get(`/purchase/${purchaseId}`);
    const purchseFiltered = data.map(obj => {
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
      setInfoUserPurchase(purchseFiltered)
  }
  const { WantedUser } = useSelector(state => state.search);
  const dispatch = useDispatch();
  
  async function handlerUser() {
    const { data } = await axios.get("/user");
    dispatch(setUsers(data));
  }

  function searchUser(event) {
    const searchValue = event.target.value;
      dispatch(search(searchValue))
      setPurchseId("")
  }

  useEffect(() => {
    handlerUser();
  }, []);

  return (
    <div className={style.viewSearch}>
      <div className={style.searchInput}>
        <input className={style.input} onChange={searchUser} type="text" placeholder="Buscar Usuario"/>
        <button className={style.btnSearch}>
          <i className="bx bx-search-alt"></i>
        </button>
      </div>
      <div className={style.viewCards}>
        {!purchaseId 
          ?(WantedUser.length !== 0 
            ?  WantedUser.map((user, i) => (
              <div key={i} onClick={() => setPurchseId(user.id)} className={style.cardUser}>
                <p className={style.id}>{user.id}</p>
                <p className={style.name}>{user.name}</p>
                <p className={style.lastname}>{user.lastname}</p>
                <p className={style.email}>{user.email}</p>
              </div>
            ))
            : <div className={style.containerImageEmptyUser}>
                <img className={style.imageEmptyUser} src={userEmpty} alt="Empty User" />
                <i className={style.noUserText}>El Usuario No Existe</i>
            </div>)
          :<div className={style.viewPurchse}> 
          <button className={style.btnExitUserPurchase} onClick={() => setPurchseId("")}><i className='bx bx-x-circle' ></i></button>
          {infoUserPurchase.length !== 0 
          ? infoUserPurchase.map((purchase, i) => (
            purchase.monto === 0 || purchase.name === null? null :
          (<div key={i} className={style.containerPurchase}>
            <div className={style.containerFecha}>{purchase.fecha.map((fecha, i) => <p key={i} className={style.fecha}>{fecha}</p>)}</div>
            <div className={style.viewPurchase}>
              <div className={style.containerNames}>{purchase.products.map((prod, i) => (<p key={i} className={style.nameProds}>{prod.name}</p>))}</div>
              <b className={style.totalPrice}>Total: {purchase.monto}</b>
            </div>
          </div>)
          )) 
          : <div className={style.containerImageEmpty}>
              <img className={style.imageEmpty} src={empty} alt="empty" />
              <i className={style.noPurchaseText}>El Usuario No Realizo una Compra</i>
          </div> }
        </div>
        }
      </div>
    </div>
  );
}

export default SearchUser;