import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Form.module.css";
import Validation from "./Validations";
import axios from "axios"
const category = [{id: 1,name:"Almacen"},{id: 2,name: "Perfumeria"},{id: 3,name:"Lacteos y productos frescos"},{id: 4,name:"Comida"},{id: 5,name:"Comida"},{id: 6,name:"embutidos"},{id: 7,name: "Carnes"},{id: 8,name: "Bebidas"},{id: 9,name: "Limpieza"},{id: 10,name: "Lacteos"},{id: 11,  name: "Verduras"},{id: 12,name:"Aperitivos"},{id: 13,name: "Panaderia"},{id: 14,name: "higiene personal"}
]
export default function Form({/*FuncionCreate - FuncionSync*/}) {
  async function CreateProduct (newProduct) {
    const {name, category, price, description, image, score, brand, unit} = newProduct;
    if (name && category && price && description && image && score && brand && unit) {
      await axios.post('/product',newProduct)
      alert("Prdoucto Creado")
    }else{
      alert("Datos Incorrectos/ Faltantes")
    }
  }

    const [newProduct, setNewProduct] = useState({
        name: "",
        brand: "",
        image: "",
        unit: 0,
        price: 0,
        description: "",
        category: [],
        score: 0,
    })

    const [errors, setErrors] = useState({
        name: "",
        brand: "",
        image: "",
        unit: undefined,
        price: undefined,
        description: "",
        category: [],
        score: undefined,
      })

// ------------------------------Renderizado de Categorias------------------------------------------------------------------------------
      let productCategory = [];
      for (let i = 0; i < newProduct.category.length; i++) {
    const selecteCategory = category.find(category => category.id.toString() === newProduct.category[i]);
    if (selecteCategory) {
      productCategory.push(selecteCategory);
    }
  }
  let unicas = [...new Set(productCategory)]
// -------------------------------------------------------------------------------------------------------------
    function handlerChange (event){
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value,
        })
        setErrors(
            Validation({
                ...newProduct,
                [event.target.name]: event.target.value,
            })
        )
    }

    function handlerSelectChange (event) {
        const value = event.target.value;
          if (!newProduct.category.includes(value)) {
              setNewProduct({
                  ...newProduct,
                  category:[...newProduct.category, value]
              })
              setErrors(
                  Validation({
                    ...newProduct,
                    category
                  })
              )
        }
    }

    function handlerSubmit (event) {
        event.preventDefault();
        setNewProduct({
            name: "",
            brand: "",
            image: "",
            unit: "",
            price: 0,
            description: "",
            category: [],
            score: 0,
        })
        CreateProduct(newProduct)
        /*ActualizacionDeHome*/
    }

  return (
    <div className={style.formView}>
      <NavLink to="/home">
        <button className={style.returnBack}>Home</button>
      </NavLink>
      <form className={style.form} >
        <h2 className={style.titleCreate}>Create Product</h2>
        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <label>Name</label>
            <input className={style.inputs} type="text"
            value={newProduct.name}
            name="name"
            onChange={handlerChange}
            placeholder="Nombre"
            autoComplete="off"/>
            <p className={style.error}>{errors.name}</p>
          </div>
          <div className={style.inputRight}>
            <label>Brand</label>
            <input className={style.inputs} type="text"
            value={newProduct.brand}
            name="brand"
            onChange={handlerChange}
            placeholder="Marca"
            autoComplete="off"/>
            <p className={style.error}>{errors.brand}</p>
          </div>
        </div>

        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <label> Image</label>
            <input className={style.inputs} type="text"
            value={newProduct.image}
            name="image"
            onChange={handlerChange}
            placeholder="Imagen"
            autoComplete="off"/>
            <p className={style.error}>{errors.image}</p>
          </div>
          <div className={style.inputRight}>
            <label>Unit</label>
            <input className={style.inputs} type="number"
            value={newProduct.unit}
            name="unit"
            min="0"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.unit}</p>
          </div>
        </div>

        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <label>Price</label>
            <input className={style.inputs} type="number"
            value={newProduct.price}
            name="price"
            min="0"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.price}</p>
          </div>
          <div className={style.inputRight}>
            
          </div>
        </div>
    
        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
          <label>Score</label>
            <input className={style.inputs} type="number"
            value={newProduct.score}
            name="score"
            min="0"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.score}</p>
          </div>
          <div className={style.inputRightSelect}>
          <select value={newProduct.category} name="category" onChange={handlerSelectChange} aria-multiselectable className={style.select}>
                <option value="" className={style.options}>Categoria</option>
                <option value="1" className={style.options}>Almacen</option>
                <option value="2" className={style.options}>Perfumeria</option>
                <option value="3" className={style.options}>Lacteos y productos frescos</option>
                <option value="4" className={style.options}>Comida</option>
                <option value="5" className={style.options}>pastas</option>
                <option value="6" className={style.options}>embutidos</option>
                <option value="7" className={style.options}>Carnes</option>
                <option value="8" className={style.options}>Bebidas</option>
                <option value="9" className={style.options}>Limpieza</option>
                <option value="10" className={style.options}>Lacteos</option>
                <option value="11" className={style.options}>Verduras</option>
                <option value="12" className={style.options}>Aperitivos</option>
                <option value="13" className={style.options}>Panaderia</option>
                <option value="14" className={style.options}>higiene personal</option>

                
            </select>
            <p className={style.error}>{errors.category}</p>
            <div className={style.viewOptions}>
                {unicas?.map((ele, i) => <p key={i} className={style.categoryInBlock}>
                  {ele.name}
                </p>)}
            </div>

          </div>
        </div>

        <div className={style.blocksInputs}>
          <div className={style.inputRight}>
          <label>Description</label>
            <textarea className={style.textArea} type="text"
            value={newProduct.description}
            name="description"
            onChange={handlerChange}
            placeholder="Description"
            autoComplete="off"/>
            <p className={style.error}>{errors.description}</p>
          </div>
        </div>

        <button className={
            !errors.name &&
            !errors.image &&
            !errors.brand && 
            !errors.price &&
            !errors.description && 
            !errors.category  &&
            !errors.unit && 
            !errors.score
            ?style.btnActive
            :style.btnDesactive} type="submit" onClick={handlerSubmit}>Enviar</button>

      </form>
    </div>
  );
}