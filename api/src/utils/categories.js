const {Category} = require('../db')

const data =[ "Almacen", "Perfumeria","Lacteos y productos frescos",  "Comida", "pastas", "embutidos","Carnes","Bebidas","Limpieza","Lacteos", "Verduras", "Aperitivos","Panaderia" ,"Higiene personal" 
]

const createCategory = async() => {

    data.forEach(item => {
        Category.findOrCreate({ where: { name: item } })
    });
     
}


module.exports = createCategory


