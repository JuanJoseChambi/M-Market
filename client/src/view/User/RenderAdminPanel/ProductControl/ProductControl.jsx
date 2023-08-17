import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, searchName, setProducts, setFiltred } from "../../../../redux/slices/productsData";
import style from "./ProductControl.module.css";
import axios from "axios"
import Paginado from "../../../../components/Paginado/Paginado";

function ProductControl() {
  const { products, currentPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [])

  const cardsInPage = 30;
  const totalCards = products.length;
  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = products.slice(firstIndex, lastIndex);
  
  const [editUnit, setEditUnit] = useState({});
  const [upDate, setUpDate] = useState(undefined)
  function handlerInput (event) {
    const UpDateNumber = event.target.value;
    setUpDate(UpDateNumber)
  }
  async function handlerEdit(id) {
    setEditUnit({
      ...editUnit,
      [id]: !editUnit[id]
    });

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
  
  const [nombreOrden, setNombreOrden] = useState('');
  const [precioOrden, setPrecioOrden] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState("")
  const [unidadesOrden, setUnidadesOrden] = useState('');

  const ordenaNombre = (e) => {
    const newOrden = e.target.value;
    setNombreOrden(newOrden);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return newOrden === 'asc' ? comparison : -comparison;
    });
    dispatch(setProducts(sortedProducts));
  };
  const ordenaPrecio = (e) => {
    const newOrden = e.target.value;
    setPrecioOrden(newOrden);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
        return newOrden === 'asc' ? a.price - b.price : b.price - a.price;
    });
    dispatch(setProducts(sortedProducts));
  };
  function filtraCategoria (e) {
    const category = e.target.value;
    setFiltroCategoria(category)
    dispatch(setFiltred(category))
  }
  function ordenaUnidades (e) {
    const newOrden = e.target.value;
    setUnidadesOrden(newOrden);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
        return newOrden === 'asc' ? a.unit - b.unit : b.unit - a.unit;
    });
    dispatch(setProducts(sortedProducts));
  }
  const reset = () => {
    setNombreOrden('');
    setPrecioOrden('');
    setFiltroCategoria('')
    setUnidadesOrden('')
    dispatch(allProducts())        
  };

  return (
    <div className={style.viewProductControl}>
      <div className={style.nav}>
        <select name="ordenaNombre" id="ordenaNombre" onChange={ordenaNombre} value={nombreOrden} className={style.select} >
            <option value="">Nombre</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>
        <select name="OrdenaPrecio" id="OrdenaPrecio" onChange={ordenaPrecio} value={precioOrden} className={style.select}>
            <option value="">Precio</option>
            <option value="asc">Min - Max</option>
            <option value="desc">Max - Min</option>
        </select>
        <button onClick={reset} className={style.buttonReset}>Restablecer</button>
        <div className={style.containerInput}>
          <input className={style.input} onChange={searchProduct} type="text" placeholder="Buscar Producto"/>
          <button className={style.btnSearch}><i className="bx bx-search-alt"></i></button>
        </div>
        <select name="FiltraCategoria" id="FiltraCategoria" onChange={filtraCategoria} value={filtroCategoria} className={style.select} >
          <option value="Todo">Categorias</option>
           {["Almacen","Bebidas","Lacteos y productos frescos","Carnes","Panaderia","Lacteos","Aperitivos","Higiene personal","Limpieza","Verduras","embutidos","Comida","pastas","Perfumeria"].map((category, i) => (
            <option key={i} value={category}>{category}</option>
            ))}
        </select>
        <select name="ordenaUnidades" id="ordenaUnidades" onChange={ordenaUnidades} value={unidadesOrden} className={style.select} >
            <option value="">Unidades</option>
            <option value="asc">Min - Max</option>
            <option value="desc">MAX - Min</option>
        </select>
      </div>
      <div className={style.containerProducts}>
        <Paginado cardsInPage={cardsInPage} totalCards={totalCards} currentPage={currentPage}/>
        {cardsShowed.map((product, i) => (
          <div key={i} className={style.product}>
            <p className={style.name}>{product.name}</p>
            <div className={style.containerUpdates}>
              <div className={style.containerUpDatePrice}>
                <p className={style.pUnit}>$</p>
              <input
                  type="text"
                  className={style.upDatePrice}
                  disabled={!editUnit[product.id]}
                  placeholder={product.price}
                  onChange={handlerInput}
                />
              </div>
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
                  <i className={`${editUnit[product.id] ? 'bx bx-edit-alt' : 'bx bxs-edit-alt'}`}></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default ProductControl;