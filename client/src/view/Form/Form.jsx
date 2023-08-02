import React, { useState } from "react";
import style from "./Form.module.css";
import Validation from "./Validations";

export default function Form({/* Funcion */ /*ActualizacionDeHome*/}) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        brand: "",
        image: "",
        unit: "",
        price: 0,
        priceRegular: 0,
        description: "",
        sku: 0,
        category: [],
        subcategory: [],
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
        sku: undefined,
        category: [],
        subcategory: [],
        discount: undefined
    })

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
        const name = event.target.name;
        if (name === "category") {
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
        if (name === "subcategory") {
            if (!newProduct.subcategory.includes(value)) {
                setNewProduct({
                    ...newProduct,
                    subcategory:[...newProduct.subcategory, value]
                })
                setErrors(
                    Validation({
                      ...newProduct,
                      subcategory
                    })
                )
            }
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
            sku: 0,
            category: [],
            subcategory: [],
            score: 0,
            discount: 0
        })
        /* Funcion */
        /*ActualizacionDeHome*/
    }

  return (
    <div className={style.formView}>
      <form className={style.form} onSubmit={handlerSubmit}>

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
            <label>Sku</label>
            <input className={style.inputs} type="number"
            value={newProduct.sku}
            name="sku"
            min="0"
            onChange={handlerChange}
            autoComplete="off"/>
            <p className={style.error}>{errors.sku}</p>
          </div>
        </div>

            
        <div className={style.blocksInputs}>
          <div className={style.inputLeft}>
            <select value={newProduct.category} name="category" onChange={handlerSelectChange} aria-multiselectable className={style.select}>
                <option value="" className={style.options}>Categoria</option>
                <option value="1" className={style.options}>Almacen</option>
                <option value="2" className={style.options}>Almacen</option>
            </select>
            <p className={style.error}>{errors.category}</p>
            <div className={style.viewOptions}>
                
            </div>
          </div>
          <div className={style.inputRight}>
            <select value={newProduct.subcategory} name="subcategory" onChange={handlerSelectChange} aria-multiselectable className={style.select}>
                <option value="" className={style.options}>SubCategorias</option>
                <option value="1" className={style.options}>Aceites</option>
                <option value="2" className={style.options}>Vinagres</option>
            </select>
            <p className={style.error}>{errors.subcategory}</p>
            <div className={style.viewOptions}>
                
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
            !errors.subcategory && 
            !errors.unit &&
            !errors.discount
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
