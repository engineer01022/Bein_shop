import React from 'react';
import './App.css'
import { FaShoppingCart } from 'react-icons/fa';
const Cad = ({ image, description, price ,ref}) => {
  return (
    <div className="card"  >
      {/* Product Image */}
      <img src={process.env.PUBLIC_URL +'/'+ image} className="card-img-top" alt="Product" />
      
      <div className="card-body">
        {/* Product Description */}
        <h5 className="card-title">{description}</h5>
        
        {/* Product Price */}
        <p className="card-text">{price}  <img style={{height:'20px', width:'20px'}} src={process.env.PUBLIC_URL +'/Saudi_Riyal_Symbol-1.png'} className="card-img-top" alt="Product" />
        </p>
        {/* Shop Icon (Add to cart) */}
      
       <a  href={ref}> <FaShoppingCart size={24}/></a>
        
      </div>
    </div>
  );
};

export default Cad;
