import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Nav from '../../components/Nav/Nav';
import {  useDispatch,  } from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../../redux/reducer";



export default function Home() {

  const dispatch = useDispatch();

  async function allProducts () {
    const { data } = await axios.get("/product");
    console.log(data)
  if (data) {
    const info = await data.map((e) => {
      
      return {
        id: e.id,
        name: e.name,
        image: e.image,
        price: e.price,    
      };
    });
    dispatch(setProducts(info))
  }
  }

  useEffect(() => {
    async function info () {
      await allProducts()
    }
    info()
   }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>
         <h1>Mini Market</h1>
         <ProductContainer />
      
     </div>
  );

  }

 