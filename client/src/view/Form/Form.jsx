import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Form.module.css";
import Validation from "./Validations";

export default function Form({/* Funcion */ /*ActualizacionDeHome*/}) {
  const category = [
    {
      id: 1,
      name:"almacen"
    },
    {
      id: 2,
      name: "almacenTodo"
    },
    {
      id: 3,
      name: "TodoElAlmacen"
    },
    {
      id: 4,
      name: "Categoria A"
    },
    {
      id: 5,
      name: "Categoria B"
    },
    {
      id: 6,
      name: "Categoria C"
    },
    {
      id: 7,
      name: "Categoria D"
    }
  ]


    const [newProduct, setNewProduct] = useState({
        name: "",
        brand: "",
        image: "",
        unit: "",
        price: 0,
        priceRegular: 0,
        description: "",
        category: [],
        score: 0,
        discount: 0
    })

    const [errors, setErrors] = useState({
        name: "",
        brand: "",
        image: "",
        unit: "",
        price: undefined,
        priceRegular: undefined,
        description: "",
        category: [],
        score: 0,
        discount: undefined
      })

// ------------------------------Renderizado de Categorias------------------------------------------------------------------------------
      // const [unicos, setUnicos] = useState(undefined)
      let productCategory = [];
      for (let i = 0; i < newProduct.category.length; i++) {
    const selecteCategory = category.find(category => category.id.toString() === newProduct.category[i]);
    if (selecteCategory) {
      productCategory.push(selecteCategory);
    }
  }
  let unicas = [...new Set(productCategory)]
  // setUnicos(unicas)
 
  // function handlerDeleteCategory(ele) {
  //   unicas = unicas.filter((category) => category.name !== ele.name);   //Falta
  //   setNewProduct({
  //     ...newProduct,
  //     category: newProduct.category.filter((category) => category.id !== ele.id),
  //   });
  // }

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
            priceRegular: 0,
            description: "",
            category: [],
            score: 0,
            discount: 0
        })
        /* Funcion */
        /*ActualizacionDeHome*/
    }

  return (
    <div className={style.formView}>
      <NavLink to="/home">
        <button className={style.returnBack}>Home</button>
      </NavLink>
      <form className={style.form} onSubmit={handlerSubmit}>
        <h2 className={style.titleCreate}></h2>
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
            <input className={style.inputs} type="text"
            value={newProduct.unit}
            name="unit"
            onChange={handlerChange}
            placeholder="Unit"
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
            <label>Price Regular</label>
            <input className={style.inputs} type="number"
            value={newProduct.priceRegular}
            name="priceRegular"
            min="0"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.priceRegular}</p>
          </div>
        </div>
    
        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
          <label>Discount</label>
            <input className={style.inputs} type="number"
            value={newProduct.discount}
            name="discount"
            min="0"
            max="100"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.discount}</p>
          </div>
          <div className={style.inputRight}>
          <select value={newProduct.category} name="category" onChange={handlerSelectChange} aria-multiselectable className={style.select}>
                <option value="" className={style.options}>Categoria</option>
                <option value="1" className={style.options}>Almacen</option>
                <option value="2" className={style.options}>AlmacenTodo</option>
                <option value="3" className={style.options}>TodoElAlmacen</option>
                <option value="4" className={style.options}>Categoria A</option>
                <option value="5" className={style.options}>Categoria B</option>
                <option value="6" className={style.options}>Categoria C</option>
                <option value="7" className={style.options}>Categoria D</option>
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
            !errors.priceRegular && 
            !errors.description && 
            !errors.category && 
            !errors.unit 
            ?style.btnActive
            :style.btnDesactive} type="submit">Enviar</button>

      </form>
    </div>
  );
}

//   "id": 6,
//   "brand": "", Marca
//   "name": "", Nombre
//   "sku": 0,  ?
//   "price": 0, Precio
//   "priceRegular": 0,  Precio Individual(?
//   "unit": "", Unidad
//   "description": "", Descripcion
//   "image": "", Imagen
//   "category": "", Categoria
//   "subcategory": "", SubCategoria
//   "score": 0, Puntuacion
//   "discount": 0 Descuento
