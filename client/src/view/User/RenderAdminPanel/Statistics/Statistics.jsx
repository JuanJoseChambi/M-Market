import {useState} from 'react'
import { Bar, Pie, Line } from 'react-chartjs-2'
import TotalSales from './TotalSales'
import BestSellingProducts from './BestSellingProducts'
import AmountSales from './AmountSales'
import {Chart as ChartJS} from 'chart.js/auto'
import { useEffect } from 'react'
import axios from 'axios'
import styles from './Statistics.module.css'



function Statistics() {

 // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/stadistics');
  //       const data = response.data;
  //       setData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);


  

  const dataBar={
    labels:TotalSales.map((item)=>item.month),
    datasets:[
      {
        label:'Ventas Año 2023',
        backgroundColor:'green',
        borderColor:'rgba(255, 99, 132, 1)',
        borderWidth:1,
        hoverBackgroundColor:'rgba(255, 99, 132, 0.8)',
        hoverBorderColor:'rgba(255, 99, 132, 1)',
        data:TotalSales.map((item)=>item.sales)
  }
    ]
  }

  // const dataPie={
  //   labels:data.map((item)=>item.name),
  //   datasets:[
  //     {
  //       label:'Productos mas vendidos del año 2023',
  //       backgroundColor:['red','blue','green','yellow','orange','purple','pink','brown','grey','black'],
  //       borderColor:'rgba(255, 99, 132, 1)',
  //       borderWidth:1,
  //       hoverBackgroundColor:'rgba(255, 99, 132, 0.8)',
  //       hoverBorderColor:'rgba(255, 99, 132, 1)',
  //       data:data.map((item)=>item.count)
  // }
  //   ]
  // }
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
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <h4>Total Ventas por Mes 2023</h4>
        <Bar data={dataBar} />
      </div>
      <div className={styles.chart}>
        <h4>Productos mas vendidos 2023</h4>
        <Pie data={dataPie} />
      </div>
      <div className={styles.chart}>
        <h4>Cantidad de Compras por Mes 2023</h4>
        <Line data={dataLine} />
      </div>
    </div>
  );
}

export default Statistics;