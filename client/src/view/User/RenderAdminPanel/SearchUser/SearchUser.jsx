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
  async function handlerAdmin (info) {
    const {id, admin} = info;
    await axios.put(`/user/${id}`, admin)
    const {data} = await axios.get("/user");
    dispatch(setUsers(data))
  }

  useEffect(() => {
    handlerUser();
    if (purchaseId) {
      handlerPurchase();
    }
  }, [purchaseId]);

  return (
    <div className={style.viewSearch}>
      <div className={style.searchInput}>
        <input className={style.input} onChange={searchUser} type="text" placeholder="Buscar Usuario"/>
        <button className={style.btnSearch}>
          <i className="bx bx-search-alt"></i>
        </button>
      </div>
      <div className={style.propertyTable}>
          <p className={style.property}>Id</p>
          <p className={style.property}>Email</p>
          <p className={style.property}>Nombre</p>
          <p className={style.property}>Apellido</p>
          <p className={style.property}>Admin</p>
        </div>
      <div className={style.viewCards}>
        {!purchaseId 
          ?(WantedUser.length !== 0 
            ?  WantedUser.map((user, i) => (
              <div key={i}  className={style.cardUser}>
                <div className={style.contanierInfoUser}>
                  <p className={style.id}>{user.id}</p>
                </div>
                <div className={style.contanierInfoUser}>
                  <p className={style.email}>{user.email}</p>
                </div>
                <div className={style.contanierInfoUser}>
                  <p className={style.name}>{user.name}</p>
                </div>
                <div className={style.contanierInfoUser}>
                  <p className={style.lastname}>{user.lastname}</p>
                </div>
                <div className={style.contanierSwitch}>
                  {user.admin
                  ? <button onClick={() => handlerAdmin({id: user.id, admin: false})} className={style.btnState}><i className='bx bxs-shield-alt-2'></i></button>
                  : <button onClick={() => handlerAdmin({id: user.id, admin: true})} className={style.btnState}><i className='bx bx-shield-alt-2' ></i></button>}
                  {(user.Purchase).length !== 0 
                  ? <button onClick={() => setPurchseId(user.id)} className={style.btnState}><i className='bx bxs-archive'></i></button> 
                  : <button onClick={() => setPurchseId(user.id)} className={style.btnState}><i className='bx bx-archive' ></i></button>}
                </div>
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