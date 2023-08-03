import ProductContainer from "../../components/ProductContainer/ProductContainer";
import React from 'react';
import Nav from '../../components/Nav/Nav';

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
         <h1>Mini Market</h1>
         <ProductContainer />
      
     </div>
  )
}
