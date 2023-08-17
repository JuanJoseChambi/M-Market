const { Category, Prod } = require('../db');
const { Op } = require("sequelize");


const product = async (name) => {
    const detailProduct = await Prod.findAll({
        where: {
            name: {
                [Op.iLike]: "%" + name + "%"
            }
        },
        // include: [
        //     {
        //         model: Category,
        //         as: 'category',
        //         attributes: ["name"]
        //     }
        // ]
    });
    return detailProduct;
};

const allProducts = async () => { 
   
    const allProducts = await Prod.findAll(({
        include: [{
            model: Category,
            attributes: ['name'],
            // through: {
            //     attributes: [],
            // }
        }]
    }));

    return allProducts
};

const productById = async (id) => {
    const productId = await Prod.findByPk(id,
        //     {include:{
        //     model:Category, attributes: [id]
        // }}
    )
    return productId;
}

const createProduct = async (brand, name, price, unit, description, image, score, category) => {




    const product = {
        brand,
        name,
        price,
        unit,
        description,
        image,
        score,
    }

    //    console.log(product.image);

    const [newProduct, created] = await Prod.findOrCreate({
        where: { name: product.name }, // Busca si existe un producto con esa propiedad
        defaults: product // Y si no encuentra crea un producto con los valores de product
    });
    if (!created) {//si es false es que esta creado, si e true es que no esta creado
        return newProduct;// Si el producto ya existe, se devuelve el producto
    }

    // Si no existe se le agrega la categoria
    const categoryDB = await Category.findAll({
        where: { name: category }
    });

    await newProduct.addCategory(categoryDB);

    return newProduct;
}


const ApdateProd = async (id,brand,name,price,unit,description,image,score,category, state) => {
    const aux = await productById(id)
    if( !state || unit === 0){
        aux.state = false;
        await aux.save();
        return aux;
    }
    unit?aux.unit=unit:aux.unit;
    brand?aux.brand=brand:aux.brand;
    name?aux.name=name:aux.namet;
    price?aux.price=price:aux.price;
    description?aux.description=description:aux.description;
    image?aux.image=image:aux.image;
    score?aux.score=score:aux.score;
    category?aux.category=category:aux.category;
    state?aux.state=state:aux.state

    
    // aux.unit = unit
    await aux.save()
    return aux
}



module.exports = {
    allProducts,
    createProduct,
    productById,
    product,
    ApdateProd
}
