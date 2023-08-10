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

    const newProduct = await Prod.create(product);


    const categoryDB = await Category.findAll({
        where: {name: category}
    })
    newProduct.addCategory(categoryDB)
    return newProduct;



    
}
module.exports = {
    allProducts,
    createProduct,
    productById,
    product
}
