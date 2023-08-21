import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, searchName, setProducts, setFiltred, setCurrentPage } from "../../../../redux/slices/productsData";
import style from "./ProductControl.module.css";
import axios from "axios"
import Paginado from "../../../../components/Paginado/Paginado";
import productEmpty from "../../../../assets/userEmpty.svg"

function ProductControl() {
  const { products, currentPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [])

  const [edit, setEditUnit] = useState({});
  const [upDate, setUpDate] = useState({
    brand:"",
    name:"",
    price: undefined,
    unit: undefined,
    description: "",
    image: "",
    score: undefined,
    state: true
  })

  async function handlerEdit(product) {
    setEditUnit({[product.id]: !edit[product.id]});

    if (upDate.brand || upDate.name || upDate.price || upDate.unit || upDate.description || upDate.image || upDate.score) {
      await axios.put(`/product/${product.id}`, upDate)
      setUpDate({
        brand:"",
        name:"",
        price: undefined,
        unit: undefined,
        description: "",
        image: "",
        score: undefined,
        state: product.state
      })
    }
    const {data} = await axios.get("/product")
    dispatch(setProducts(data))
  }
  async function handlerBlock (product) {
    let state = {state: !product.state}
    await axios.put(`/product/${product.id}`, state)
    const {data} = await axios.get("/product")
    dispatch(setProducts(data))
  }

  function searchProduct(event) {
    const searchValue = event.target.value;
    dispatch(setCurrentPage(1))
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

  const cardsInPage = 30;
  const totalCards = products.length;
  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = products.slice(firstIndex, lastIndex);  
  
  const preset_key = "szmwmrsq";
  const cloud_name = "dvu3hvpzu";
  const URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  function handlerUploadImage (event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios.post(URL, formData)
      .then((response) => { setUpDate({ ...upDate, image: response.data.secure_url });
    })
    .catch((err) => alert(err));
  }

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
        <div className={style.containerPagination}>
        <Paginado cardsInPage={cardsInPage} totalCards={totalCards} currentPage={currentPage}/>
        </div>
        <div className={style.propertyTable}>
          <p className={style.property}>Imagen</p>
          <p className={style.property}>Nombre</p>
          <p className={style.property}>Marca</p>
          <p className={style.property}>Descripcion</p>
          <p className={style.property}>Precio</p>
          <p className={style.property}>Unidades</p>
          <p className={style.property}>Puntajes</p>
          <p className={style.property}>Opciones</p>
        </div>
      <div className={style.containerProducts}>
        {cardsShowed.length !== 0 
          ? cardsShowed.map((product, i) => (
            <div key={i} className={style.product}>
              {/* ----------------------------------- */}
                <div className={style.contanierProductsInputsImage}>
                  <div className={style.conatinerImage}>
                    <img src={product.image} alt="imagen" className={style.image} />
                  </div>
                <input disabled={!edit[product.id]} className={style.btnCloudinary} name="image" autoComplete="off" type="file" placeholder={product.image} onChange={handlerUploadImage}/>
                </div>
                <div className={style.contanierProductsInputs}>
                  <input disabled={!edit[product.id]} className={style.upDateText} type="text" placeholder={product.name} onChange={(e) => setUpDate({...upDate, name : e.target.value})}/>
                </div>
                <div className={style.contanierProductsInputs}>
                  <input disabled={!edit[product.id]} className={style.upDateText} type="text" placeholder={product.brand} onChange={(e) => setUpDate({...upDate, brand : e.target.value})}/>
                </div>
                <div className={style.contanierProductsInputs}>
                  <input disabled={!edit[product.id]} className={style.upDateText} type="text" placeholder={product.description} onChange={(e) => setUpDate({...upDate, description : e.target.value})}/>
                </div>
              {/* ------------------------------------ */}
                  <div className={style.contanierProductsInputs}>
                    <p className={style.pInput}>$</p>
                    <input type="text" className={style.upDateInput} disabled={!edit[product.id]} placeholder={product.price} onChange={(e) => setUpDate({...upDate, price : e.target.value})}/>
                  </div>
                  <div className={style.contanierProductsInputs}>
                    <p className={style.pInput}>U</p>
                    <input type="text" className={style.upDateInput} disabled={!edit[product.id]} placeholder={product.unit} onChange={(e) => setUpDate({...upDate, unit : e.target.value})}/>
                  </div>
                  <div className={style.contanierProductsInputs}>
                    <p className={style.pInput}>⭐</p>
                    <input type="text" className={style.upDateInput} disabled={!edit[product.id]} placeholder={product.score} onChange={(e) => setUpDate({...upDate, score : e.target.value})}/>
                  </div>
              <div className={style.contanierSwitch}>
                  {product.unit === 0 
                  ? <button className={style.btnState}><i className='bx bxs-lock'></i></button>
                  : (product.state
                    ? <button className={style.btnState} onClick={() => {setUpDate({...upDate, state: false}), handlerBlock(product)}}><i className='bx bx-lock-open'></i></button> 
                    : <button className={style.btnState} onClick={() => {setUpDate({...upDate, state: true}) , handlerBlock(product)}}><i className='bx bxs-lock'></i></button>)}
                  <button className={style.btnState} onClick={() => handlerEdit(product)}>
                    <i className={`${edit[product.id] ? 'bx bx-check' : 'bx bxs-edit-alt'}`}></i>
                  </button>
              </div>
            </div>
            ))
          : <div className={style.containerImageEmptyUser}>
              <img className={style.imageEmptyUser} src={productEmpty} alt="El producto no existe" />
              <p className={style.noUserText}>El Producto No Existe</p>
            </div> 
          }
        </div>
    </div>
  );
}

export default ProductControl;