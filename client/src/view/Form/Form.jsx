import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Form.module.css";
import Validation from "./Validations";
import axios from "axios"

export default function Form() {
  async function CreateProduct (newProduct) {
    const {name, category, price, description, image, score, brand, unit} = newProduct;
    if (name && category && price && description && image && score && brand && unit) {
      await axios.post('/product',newProduct)
      alert("Producto Creado")
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

      const categoriesSet = [...new Set(newProduct.category)]
      
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
                    category:[newProduct.category]
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
        <h2 className={style.titleCreate}>Crear Producto</h2>
        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <label>Nombre</label>
            <input className={style.inputs} type="text"
            value={newProduct.name}
            name="name"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.name}</p>
          </div>
          <div className={style.inputRight}>
            <label>Marca</label>
            <input className={style.inputs} type="text"
            value={newProduct.brand}
            name="brand"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.brand}</p>
          </div>
        </div>

        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <label>Imagen</label>
            <input className={style.inputs} type="text"
            value={newProduct.image}
            name="image"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.image}</p>
          </div>
          <div className={style.inputRight}>
            <label>Unidades</label>
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
            <label>Precio</label>
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
          <label>Puntuacion</label>
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
                <option value="Almacen" className={style.options}>Almacen</option>
                <option value="Perfumeria" className={style.options}>Perfumeria</option>
                <option value="Lacteos y productos frescos" className={style.options}>Lacteos y productos frescos</option>
                <option value="Comida" className={style.options}>Comida</option>
                <option value="pastas" className={style.options}>pastas</option>
                <option value="embutidos" className={style.options}>embutidos</option>
                <option value="Carnes" className={style.options}>Carnes</option>
                <option value="Bebidas" className={style.options}>Bebidas</option>
                <option value="Limpieza" className={style.options}>Limpieza</option>
                <option value="Lacteos" className={style.options}>Lacteos</option>
                <option value="Verduras" className={style.options}>Verduras</option>
                <option value="Aperitivos" className={style.options}>Aperitivos</option>
                <option value="Panaderia" className={style.options}>Panaderia</option>
                <option value="higiene personal" className={style.options}>higiene personal</option>
            </select>
            <p className={style.error}>{errors.category}</p>
            <div className={style.viewOptions}>
                {categoriesSet?.map((ele, i) => <p key={i} className={style.categoryInBlock}>
                  {ele}
                </p>)}
            </div>

          </div>
        </div>

        <div className={style.blocksInputs}>
          <div className={style.inputRight}>
          <label>Descripcion</label>
            <textarea className={style.textArea} type="text"
            value={newProduct.description}
            name="description"
            onChange={handlerChange}
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
            :style.btnDesactive} type="submit" onClick={handlerSubmit}>Crear</button>

      </form>
    </div>
  );
}