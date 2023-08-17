import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, searchName } from "../../../../redux/slices/productsData";
import style from "./ProductControl.module.css";
import axios from "axios"

function ProductControl() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [])

   
  
  const [editUnit, setEditUnit] = useState({});
  const [upDate, setUpDate] = useState(undefined)
  function handlerInput (event) {
    const UpDateNumber = event.target.value;
    setUpDate(UpDateNumber)
  }
  async function handlerEdit(id) {
    setEditUnit((prevEditUnit) => ({
      ...prevEditUnit,
      [id]: !prevEditUnit[id]
    }));

    if (upDate) {
      const unit = Number(upDate)
      await axios.put(`/product/${id}`, {unit: unit})
    }
    setUpDate(undefined)
  }

  function searchProduct(event) {
    const searchValue = event.target.value;
    dispatch(searchName(searchValue));
  }

  const productsPerGroup = 10;
  const productGroups = [];
  for (let i = 0; i < products.length; i += productsPerGroup) {
    productGroups.push(products.slice(i, i + productsPerGroup));
  }

  return (
    <div className={style.viewProductControl}>
      <div className={style.searchInput}>
        <input
          className={style.input}
          onChange={searchProduct}
          type="text"
          placeholder="Buscar Producto"
        />
        <button className={style.btnSearch}>
          <i className="bx bx-search-alt"></i>
        </button>
      </div>
      <div className={style.containerProducts}>
        {productGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={style.productGroup}>
            {group.map((product, i) => (
              <div key={i} className={style.product}>
                <p className={style.name}>{product.name}</p>
                <p className={style.price}>$ {product.price}</p>
                <div className={style.ContanierUpdateUnit}>
                  <p className={style.pUnit}>U</p>
                  <input
                    type="text"
                    className={style.updateUnit}
                    disabled={!editUnit[product.id]}
                    placeholder={product.unit}
                    onChange={handlerInput}
                  />
                  <button className={style.btnUpD} onClick={() => handlerEdit(product.id)}>
                    <i className={`bx ${editUnit[product.id] ? 'bx bx-edit-alt' : 'bx bxs-edit-alt'}`}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductControl;