const {Prod} = require('../db')

const info = [
    {
    //   "id": "1",
      "brand": "NATURA",
      "name": "Aceite De Girasol Natura 1.5 L",
      "price": 573.81,
      "priceRegular": 382.54,
      "unit": 40,
      "description": "Aceite de girasol",
      "image": "https://jumboargentina.vtexassets.com/arquivos/ids/427751-800-auto?v=636495154762100000&width=800&height=auto&aspect=true",
      "score": 25,
      "discount": 0,
      "Categories": [
        8
      ]
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
      "Categories": [
        4
    ]
  
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
      "Categories": [
        7
        
      ]
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
      "Categories": [
           5        
      ]
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
      "Categories": [
      1  
        
      ]
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
      "Categories": [
           7,3
       
      ]
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
      "Categories": [
        3,5
       
      ]
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
      "Categories": [ 3,4     
      ]
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
      "Categories": [
        1,2
    ]
        
    },
    // {
    //   "id": "10",
    //   "brand": "KOLYNOS",
    //   "name": "Pasta dental",
    //   "price": 0,
    //   "priceRegular": 25,
    //   "unit": 300,
    //   "description": "Pasta Dental Kolynos Frescura 90 g.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/307902-800-auto?v=638139682295730000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "higiene personal"
    //     },
  
    //   ]
    // },
    // {
    //   "id": "11",
    //   "brand": "Life Quality",
    //   "name": "Jabon liquido",
    //   "price": 236,
    //   "priceRegular": 236,
    //   "unit": 70,
    //   "description": "Jabón líquido Life Quality coco y vainilla 250 cc.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/308121-800-auto?v=638140724956800000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "higiene personal"
    //     },
  
    //   ]
    // },
    // {
    //   "id": "12",
    //   "brand": "Elegante",
    //   "name": "Pañuelos Elegante",
    //   "price": 388,
    //   "priceRegular": 388,
    //   "unit": 40,
    //   "description": "Pañuelos descartables Elegante 150 u.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/308133-800-auto?v=638140724994170000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Perfumeria"
    //     }
    //   ]
    // },
    // {
    //   "id": "13",
    //   "brand": "Colgate",
    //   "name": "Cepillo dental",
    //   "price": 390,
    //   "priceRegular": 310,
    //   "unit": 30,
    //   "description": "Cepillo Dental Colgate Triple Acción 2 uni",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/324013-800-auto?v=638194970577270000&width=800&height=auto&aspect=true",
    //   "score": 3,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "higiene personal"
    //     }
    //   ]
    // },
    // {
    //   "id": "14",
    //   "brand": "Gillete",
    //   "name": "Maquina de afeitar",
    //   "price": 561,
    //   "priceRegular": 561,
    //   "unit": 40,
    //   "description": "Máquina de afeitar Gillette ultragrip fija prestobarba x 5 uni",
    //   "image": "https://www.uomax.com.ar/7186-large_default/gillette-s%C3%BAper-thin-hojas-x-5-unid.jpg",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "higiene personal"
    //     }
    //   ]
    // },
    // {
    //   "id": "15",
    //   "brand": "LADYSOFT",
    //   "name": "Toalla femenina",
    //   "price": 173,
    //   "priceRegular": 173,
    //   "unit": 56,
    //   "description": "Toalla femenina normal comfort Ladysoft x 8 uni",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/309946-800-auto?v=638151749050400000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "higiene personal"
    //     }
    //   ]
    // },
    // {
    //   "id": "16",
    //   "brand": "Danette",
    //   "name": "Postre de chocolate",
    //   "price": 177.9,
    //   "priceRegular": 177.9,
    //   "unit": 40,
    //   "description": "Postre Danette chocolate en pote 95 g.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/314117-800-auto?v=638174183488030000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Lacteos y productos frescos"
    //     }
    //   ]
    // },
    // {
    //   "id": "17",
    //   "brand": "LA SALTEÑA",
    //   "name": "Tapas para tarta",
    //   "price": 330,
    //   "priceRegular": 330,
    //   "unit": 40,
    //   "description": "Tapas para pascualinas La Salteña hojaldre 2 u. de 400 g.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/312462-800-auto?v=638163243501300000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Lacteos y productos frescos"
    //     }
    //   ]
    // },
    // {
    //   "id": "18",
    //   "brand": "VIENÍSSIMA",
    //   "name": "Salchichas",
    //   "price": 681,
    //   "priceRegular": 681,
    //   "unit": 100,
    //   "description": "Salchichas Vieníssima 12 u.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/311851-800-auto?v=638162064500000000&width=800&height=auto&aspect=true",
    //   "score": 2,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Lacteos y productos frescos"
    //     }
    //   ]
    // },
    // {
    //   "id": "19",
    //   "brand": "TONADITA",
    //   "name": "Crema de leche",
    //   "price": 233,
    //   "priceRegular": 233,
    //   "unit": 56,
    //   "description": "Crema de leche Tonadita baja en lactosa 200 g.",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/236716-800-auto?v=637814302844600000&width=800&height=auto&aspect=true",
    //   "score": 2,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Lacteos y productos frescos"
    //     }
    //   ]
    // },
    // {
    //   "id": "20",
    //   "brand": "Generico",
    //   "name": "Jamon cocido",
    //   "price": 665,
    //   "priceRegular": 665,
    //   "unit": 40,
    //   "description": "Jamón cocido 200 g. BAJO PRECIO GARANTIZADO",
    //   "image": "https://carrefourar.vtexassets.com/arquivos/ids/308133-800-auto?v=638140724994170000&width=800&height=auto&aspect=true",
    //   "score": 25,
    //   "discount": 0,
    //   "Categories": [
    //     {
    //       "name": "Lacteos y productos frescos"
    //     }
    //   ]
    // },
  
  ]

  const ChargedDB = async() => {
    await Prod.bulkCreate(info)
    console.log("Charged DB")
  } 
  
  module.exports = ChargedDB
  