const { Prod } = require('../db')
const { createProduct } = require('../controllers/productControllers')

const info = [
  {

    "brand": "NATURA",
    "name": "Aceite De Girasol Natura 1.5 L",
    "price": 573.81,
    "unit": 40,
    "description": "Aceite de girasol",
    "image": "https://jumboargentina.vtexassets.com/arquivos/ids/427751-800-auto?v=636495154762100000&width=800&height=auto&aspect=true",
    "score": 25,
    "category": ["Almacen"]
  },
  {
    //   "id": "2",
    "brand": "Classic",
    "name": "Pure de tomate",
    "price": 0,
    "priceRegular": 184.00,
    "unit": 100,
    "description": "Puré de tomate  520 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/336186-800-auto?v=638219104736470000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Almacen"]

  },
  {
    //   "id": "3",
    "brand": "Classic",
    "name": "Lomitos de atun",
    "price": 0,
    "priceRegular": 25,
    "unit": 50,
    "description": "Lomitos de atún en aceite 170 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/364387-800-auto?v=638264094443630000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "4",
    "brand": "Pureza",
    "name": "Harina especial para pizza",
    "price": 0,
    "priceRegular": 354.40,
    "unit": 200,
    "description": "Harina Pureza especial para pizzas 1 kg",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/196960-800-auto?v=637523690704230000&width=800&height=auto&aspect=true",
    "score": 2,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "5",
    "brand": "LUCCHETTI",
    "name": "Spaghetti  lucchetti",
    "price": 0,
    "priceRegular": 292.00,
    "unit": 500,
    "description": "Fideos spaghetti Lucchetti 500 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/318017-800-auto?v=638180310980430000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "6",
    "brand": "Carrefour",
    "name": "Aceite de oliva",
    "price": 500,
    "priceRegular": 25,
    "unit": 40,
    "description": "Aceite de oliva Carrefour virgen 500 cc",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/196960-800-auto?v=637523690704230000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "7",
    "brand": "Knorr",
    "name": "Caldo sabor gallina",
    "price": 0,
    "priceRegular": 230,
    "unit": 60,
    "description": "Caldo de gallina Knorr en cubos 12 uni",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/274802-800-auto?v=638119092227400000&width=800&height=auto&aspect=true",
    "score": 5,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "8",
    "brand": "Classic",
    "name": "Duraznos amarillos",
    "price": 0,
    "priceRegular": 688.20,
    "unit": 50,
    "description": "Duraznos amarillos en mitades 820 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/337246-800-auto?v=638221205021270000&width=800&height=auto&aspect=true",
    "score": 5,
    "discount": 0,
    "category": ["Almacen"]
  },
  {
    //   "id": "9",
    "brand": "Dove",
    "name": "Dove barra",
    "price": 250,
    "priceRegular": 302.00,
    "unit": 400,
    "description": "Jabón tocador Dove blanco 90 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/309385-800-auto?v=638150911811870000&width=800&height=auto&aspect=true",
    "score": 5,
    "discount": 0,
    "category": ["Almacen"]

  },
  {
    "id": "10",
    "brand": "KOLYNOS",
    "name": "Pasta dental",
    "price": 0,
    "priceRegular": 25,
    "unit": 300,
    "description": "Pasta Dental Kolynos Frescura 90 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/307902-800-auto?v=638139682295730000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "11",
    "brand": "Life Quality",
    "name": "Jabon liquido",
    "price": 236,
    "priceRegular": 236,
    "unit": 70,
    "description": "Jabón líquido Life Quality coco y vainilla 250 cc.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/308121-800-auto?v=638140724956800000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "12",
    "brand": "Elegante",
    "name": "Pañuelos Elegante",
    "price": 388,
    "priceRegular": 388,
    "unit": 40,
    "description": "Pañuelos descartables Elegante 150 u.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/308133-800-auto?v=638140724994170000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Perfumeria"]
  },
  {
    "id": "13",
    "brand": "Colgate",
    "name": "Cepillo dental",
    "price": 390,
    "priceRegular": 310,
    "unit": 30,
    "description": "Cepillo Dental Colgate Triple Acción 2 uni",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/324013-800-auto?v=638194970577270000&width=800&height=auto&aspect=true",
    "score": 3,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "14",
    "brand": "Gillete",
    "name": "Maquina de afeitar",
    "price": 561,
    "priceRegular": 561,
    "unit": 40,
    "description": "Máquina de afeitar Gillette ultragrip fija prestobarba x 5 uni",
    "image": "https://www.uomax.com.ar/7186-large_default/gillette-s%C3%BAper-thin-hojas-x-5-unid.jpg",
    "score": 25,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "15",
    "brand": "LADYSOFT",
    "name": "Toalla femenina",
    "price": 173,
    "priceRegular": 173,
    "unit": 56,
    "description": "Toalla femenina normal comfort Ladysoft x 8 uni",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/309946-800-auto?v=638151749050400000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "16",
    "brand": "Danette",
    "name": "Postre de chocolate",
    "price": 177.9,
    "priceRegular": 177.9,
    "unit": 40,
    "description": "Postre Danette chocolate en pote 95 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/314117-800-auto?v=638174183488030000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["higiene personal"]
  },
  {
    "id": "17",
    "brand": "LA SALTEÑA",
    "name": "Tapas para tarta",
    "price": 330,
    "priceRegular": 330,
    "unit": 40,
    "description": "Tapas para pascualinas La Salteña hojaldre 2 u. de 400 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/312462-800-auto?v=638163243501300000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Lacteos y productos frescos"]
  },
  {
    "id": "18",
    "brand": "VIENÍSSIMA",
    "name": "Salchichas",
    "price": 681,
    "priceRegular": 681,
    "unit": 100,
    "description": "Salchichas Vieníssima 12 u.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/311851-800-auto?v=638162064500000000&width=800&height=auto&aspect=true",
    "score": 2,
    "discount": 0,
    "category": ["Lacteos y productos frescos"]


  },
  {
    "id": "19",
    "brand": "TONADITA",
    "name": "Crema de leche",
    "price": 233,
    "priceRegular": 233,
    "unit": 56,
    "description": "Crema de leche Tonadita baja en lactosa 200 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/236716-800-auto?v=637814302844600000&width=800&height=auto&aspect=true",
    "score": 2,
    "discount": 0,
    "category": ["Lacteos y productos frescos"]
  },
  {
    "id": "20",
    "brand": "Generico",
    "name": "Jamon cocido",
    "price": 665,
    "priceRegular": 665,
    "unit": 40,
    "description": "Jamón cocido 200 g. BAJO PRECIO GARANTIZADO",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/308133-800-auto?v=638140724994170000&width=800&height=auto&aspect=true",
    "score": 25,
    "discount": 0,
    "category": ["Lacteos y productos frescos"]
  },
  {
    "brand": "Panes Saludables",
    "name": "Pan integral",
    "description": "Pan integral reciÃ©n horneado",
    "price": 225,
    "image": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/03/panintegralfibra.jpg",
    "unit": 20,
    "score": 0,
    "category": ["Panaderia"],
  },
  {
    "name": "Detergente en polvo",
    "category": ["Limpieza"],
    "description": "Detergente en polvo para lavadora",
    "price": 450,
    "image": "https://www.fab.com.co/images/h0nadbhvm6m4/f852927c65ad8ac13790ed25058b5f01/09a3ca9474a61046d6c3b115783c488e/MTIuX2lTdG9jay01MDI2NjM3NjQuanBn/1280w-847h/detergente-en-polvo.jpg",
    "brand": "Limpieza Total",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Papas fritas",
    "category": ["Aperitivos"],
    "description": "Papas fritas crujientes y saladas",
    "price": 600,
    "image": "https://mayoristasoto.com/167-medium_default/papas-fritas-pehuamar-520g-clasica.jpg",
    "brand": "Snacks Deliciosos",
    "unit": 20,
    "score": 0
  },
  {
    "brand": "KOLYNOS",
    "name": "Pasta dental",
    "price": 0,
    "unit": 300,
    "description": "Pasta Dental Kolynos Frescura 90 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/307902-800-auto?v=638139682295730000&width=800&height=auto&aspect=true",
    "category": ["Perfumeria"],
    "score": 0
  },
  {
    "brand": "Life Quality",
    "name": "Jabon liquido",
    "price": 236.00,
    "unit": 70,
    "description": "Jabón líquido Life Quality coco y vainilla 250 cc.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/308121-800-auto?v=638140724956800000&width=800&height=auto&aspect=true",
    "category": ["Perfumeria"],
    "score": 0
  },
  {
    "brand": "Elegante",
    "name": "Pañuelos Elegante",
    "price": 388.00,
    "unit": 90,
    "description": "Pañuelos descartables Elegante 150 u.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/308133-800-auto?v=638140724994170000&width=800&height=auto&aspect=true",
    "category": ["Perfumeria"],
    "score": 0
  },
  {
    "brand": "Colgate",
    "name": "Cepillo dental",
    "price": 310.00,
    "unit": 30,
    "description": "Cepillo Dental Colgate Triple Acción 2 uni",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/324013-800-auto?v=638194970577270000&width=800&height=auto&aspect=true",
    "category": ["Perfumeria"],
    "score": 0
  },
  {
    "brand": "Gillete",
    "name": "Maquina de afeitar",
    "price": 561.00,
    "unit": 40,
    "description": "Máquina de afeitar Gillette ultragrip fija prestobarba x 5 uni",
    "image": "",
    "category": ["higiene personal"],
    "score": 0
  },
  {
    "brand": "LADYSOFT",
    "name": "Toalla femenina",
    "price": 173.3,
    "unit": 56,
    "description": "Toalla femenina normal comfort Ladysoft x 8 uni",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/309946-800-auto?v=638151749050400000&width=800&height=auto&aspect=true",
    "category": ["higiene personal"],
    "score": 0
  },
  {
    "brand": "Danette",
    "name": "Postre de chocolate",
    "price": 177.9,
    "unit": 100,
    "description": "Postre Danette chocolate en pote 95 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/314117-800-auto?v=638174183488030000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0
  },
  {
    "brand": "LA SALTEÑA",
    "name": "Tapas para tarta",
    "price": 330,
    "unit": 10,
    "description": "Tapas para pascualinas La Salteña hojaldre 2 u. de 400 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/312462-800-auto?v=638163243501300000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0
  },
  {
    "brand": "VIENÍSSIMA",
    "name": "Salchichas",
    "price": 681.0,
    "unit": 100,
    "description": "Salchichas Vieníssima 12 u.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/311851-800-auto?v=638162064500000000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0
  },
  {
    "brand": "TONADITA",
    "name": "Crema de leche",
    "price": 233,
    "unit": 56,
    "description": "Crema de leche Tonadita baja en lactosa 200 g.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/236716-800-auto?v=637814302844600000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0

  },
  {
    "brand": "Generico",
    "name": "Jamon cocido",
    "price": 665.8,
    "unit": 20,
    "description": "Jamón cocido 200 g. BAJO PRECIO GARANTIZADO",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/250646-800-auto?v=637931422623700000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0

  },
  {
    "brand": "LA SERENISIMA",
    "name": "Leche larga vida",
    "price": 459.9,
    "unit": 40,
    "description": "Leche entera La Serenísima UAT fort con vitam 1 l.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/269602-800-auto?v=638076636636600000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0

  },
  {
    "brand": "La Paulina",
    "name": "Queso cremoso tradicional",
    "price": 2130.9,
    "unit": 56,
    "description": "Queso cremoso La Paulina x kg.",
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/364370-800-auto?v=638264048747430000&width=800&height=auto&aspect=true",
    "category": ["Lacteos y productos frescos"],
    "score": 0
  },
  {
    "name": "Carne de res",
    "category": ["Carnes"],
    "description": "Carne de res fresca y de alta calidad",
    "price": 1500,
    "image": "https://www.gob.mx/cms/uploads/article/main_image/37481/carne1.jpg",
    "brand": "Carnes Deliciosas",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Pollo entero",
    "category": ["Carnes"],
    "description": "Pollo entero fresco y de granja",
    "price": 3000,
    "image": "https://masonlineprod.vtexassets.com/arquivos/ids/166609-800-auto?v=637835138770400000&width=800&height=auto&aspect=true",
    "brand": "Granja Feliz",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Pescado fresco",
    "category": ["Carnes"],
    "description": "Pescado fresco del mar",
    "price": 1250,
    "image": "https://static.eldiario.es/clip/9756161a-bdcb-40c9-a078-2b4115f6ce5d_16-9-aspect-ratio_default_0.jpg",
    "brand": "Pescados Marinos",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Refresco de cola",
    "category": ["Bebidas"],
    "description": "Refresco de cola sin azÃºcar",
    "price": 250,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuAxKVEkIt6QkFEx42Js4FmP2oA5Yoxlosw&usqp=CAU",
    "brand": "Refrescos Sabrosos",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Agua mineral",
    "category": ["Bebidas"],
    "description": "Agua mineral natural embotellada",
    "price": 150,
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/171888/7790315000446_02.jpg?v=637468542321600000",
    "brand": "Agua Pura",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Limpiador multiusos",
    "category": ["Limpieza"],
    "description": "Limpiador multiusos para superficies",
    "price": 375,
    "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/834/758/products/limpiador-multiuso-gatillo-1lt1-13f6c38cd290385ca116326803208396-640-0.jpg",
    "brand": "Limpieza Efectiva",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Toallitas desinfectantes",
    "category": "Limpieza",
    "description": "Toallitas desinfectantes para manos y superficies",
    "price": 300,
    "image": "https://farmacityar.vteximg.com.br/arquivos/ids/221764-1000-1000/227613_toallitas-ayudin-desinfectantes-x-24-un_image-1.jpg?v=637867500108730000",
    "brand": "Higiene Segura",
    "unit": 20,
    "score": 0
  }, {
    "name": "Toallitas desinfectantes",
    "category": ["Limpieza"],
    "description": "Toallitas desinfectantes para manos y superficies",
    "price": 300,
    "image": "https://farmacityar.vteximg.com.br/arquivos/ids/221764-1000-1000/227613_toallitas-ayudin-desinfectantes-x-24-un_image-1.jpg?v=637867500108730000",
    "brand": "Higiene Segura",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Queso cheddar",
    "category": ["Lacteos"],
    "description": "Queso cheddar en lonchas",
    "price": 500,
    "image": "https://alysermarket.com/cdn/shop/products/chedarfeteado_800x.jpg?v=1593527958",
    "brand": "Quesos Finos",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Filete de salmon",
    "category": ["Carnes"],
    "description": "Filete de salmÃ³n fresco y jugoso",
    "price": 2500,
    "image": "https://www.sanantonioonline.com.ar/wp-content/uploads/2020/11/Filet-de-Salmon-Rosado.jpg",
    "brand": "Pescados Marinos",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Coca-Cola",
    "category": ["Bebidas"],
    "description": "Refresco Coca-Cola clÃ¡sico",
    "price": 500,
    "image": "https://cdn.milenio.com/uploads/media/2020/09/29/te-gusta-este-refresco-shutterstock.jpg",
    "brand": "Coca-Cola Company",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Papas fritas",
    "category": ["Aperitivos"],
    "description": "Papas fritas crujientes y saladas",
    "price": 600,
    "image": "https://mayoristasoto.com/167-medium_default/papas-fritas-pehuamar-520g-clasica.jpg",
    "brand": "Snacks Deliciosos",
    "unit": 20,
    "score": 0
  },
  {
    "name": "Detergente en polvo",
    "category": ["Limpiezaaa"],
    "description": "Detergente en polvo para lavadora",
    "price": 450,
    "image": "https://www.fab.com.co/images/h0nadbhvm6m4/f852927c65ad8ac13790ed25058b5f01/09a3ca9474a61046d6c3b115783c488e/MTIuX2lTdG9jay01MDI2NjM3NjQuanBn/1280w-847h/detergente-en-polvo.jpg",
    "brand": "Limpieza Total",
    "unit": 20,
    "score": 0
  },
]






const ChargedDB = async () => {

  info.forEach(item => {
    createProduct(
      item.brand,
      item.name,
      item.price,
      item.unit,
      item.description,
      item.image,
      item.score,
      item.category
    )
  });

}


module.exports = ChargedDB
