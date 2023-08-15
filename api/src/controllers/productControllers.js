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

    if (!created) {
        // Si el producto ya existe, se devuelve el producto
        return newProduct;
    }

    // Si no existe se le agrega la categoria
    const categoryDB = await Category.findAll({
        where: { name: category }
    });

    await newProduct.addCategory(categoryDB);

    return newProduct;
}


const ApdateProd = async (id, unit) => {
    const aux = await productById(id)
    aux.unit = unit
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
