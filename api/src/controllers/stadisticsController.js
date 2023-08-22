const {getAllPurchase} = require("./purchaseCtrl")
const {User} = require("../db")


const getInfo = async () => {
  const idRepetidos = await getIdRepetidos()
  const sumaMes = await sumMontosPorMes()
  const usersByMonth = await getUsers()
  return [idRepetidos, sumaMes, usersByMonth]
}

const getUsers = async () => {
  const allUser = await User.findAll()
  const userCountByMonth = {};

  allUser.forEach(user => {
    const createdAt = new Date(user.createdAt);
    const monthYear = `${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
    
    if (!userCountByMonth[monthYear]) {
      userCountByMonth[monthYear] = 1;
    } else {
      userCountByMonth[monthYear]++;
    }
  });
  
  return userCountByMonth
}


const getIdRepetidos = async () => {
    const allPurchase = await getAllPurchase()

    if(allPurchase) throw new Error('No tenemos compra registradas, no hay estadisticas de ventas')
    
    const allProduct = await allPurchase.map(item=> item.Prods)
    
    let aux =  allProduct.flat()
   
     const count = aux.reduce((acc, curr) => {
        if (curr.name in acc) {
          acc[curr.name]++;
        } else {
          acc[curr.name] = 1;
        }
        
        return acc;
      }, {});
      
      const repeated = [];
      
      for (let name in count) {
        if (count[name] >= 1) {
          repeated.push({ name, count: count[name] });
        }
      }

   return repeated


}



const sumMontosPorMes = async () => {
  const all = await getAllPurchase()
  
  const sumPorMes = {};

  all.forEach(obj => {
    const createdAt = new Date(obj.createdAt);
    const mes = createdAt.getMonth();
    const year = createdAt.getFullYear();
    const claveMesYear = `${mes}-${year}`;

    if (!sumPorMes[claveMesYear]) {
      sumPorMes[claveMesYear] = 0;
    }

    sumPorMes[claveMesYear] += obj.monto;
  });

  const resultado = [];

  for (const claveMesYear in sumPorMes) {
    const [mes, year] = claveMesYear.split('-');
    resultado.push({ mes: parseInt(mes) + 1, year: parseInt(year), monto: sumPorMes[claveMesYear] });
  }
  
  return resultado;
}




module.exports = {getInfo}