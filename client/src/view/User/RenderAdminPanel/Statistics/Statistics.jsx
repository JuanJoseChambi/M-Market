//import {useState} from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2'
import TotalSales from './TotalSales'
import BestSellingProducts from './BestSellingProducts'
import AmountSales from './AmountSales'
import {Chart as ChartJS} from 'chart.js/auto'


function Statistics() {

  const dataBar={
    labels:TotalSales.map((item)=>item.month),
    datasets:[
      {
        label:'Ventas año 2023',
        backgroundColor:'green',
        borderColor:'rgba(255, 99, 132, 1)',
        borderWidth:1,
        hoverBackgroundColor:'rgba(255, 99, 132, 0.8)',
        hoverBorderColor:'rgba(255, 99, 132, 1)',
        data:TotalSales.map((item)=>item.sales)
  }
    ]
  }

  const dataPie={
    labels:BestSellingProducts.map((item)=>item.product),
    datasets:[
      {
        label:'Productos mas vendidos del año 2023',
        backgroundColor:['red','blue','green','yellow','orange','purple','pink','brown','grey','black'],
        borderColor:'rgba(255, 99, 132, 1)',
        borderWidth:1,
        hoverBackgroundColor:'rgba(255, 99, 132, 0.8)',
        hoverBorderColor:'rgba(255, 99, 132, 1)',
        data:BestSellingProducts.map((item)=>item.quantity)
  }
    ]
  }

  const dataLine={
    labels:AmountSales.map((item)=>item.month),
    datasets:[
      {
        label:'Cantidad Ventas año 2023',
        backgroundColor:'blue',
        borderColor:'rgba(255, 99, 132, 1)',
        borderWidth:1,
        hoverBackgroundColor:'rgba(255, 99, 132, 0.8)',
        hoverBorderColor:'rgba(255, 99, 132, 1)',
        data:AmountSales.map((item)=>item.quantity)
  }
    ]
  }






  return (
    <div>
      <Bar data={dataBar}/>
      <Pie data={dataPie}/>
      <Line data={dataLine}/>
    </div>
  )
}

export default Statistics;