import React, { useState } from 'react';
import Logo9 from './../images/i16.jpeg'
import Logo1 from './../images/i10.jpg'
import Logo2 from './../images/i9.jpg'
import Logo3 from './../images/i8.jpg'
import Logo4 from './../images/i8.jpg'
import Logo5 from './../images/i8.jpg'
import Logo6 from './../images/i11.JPG'
const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      name: 'Image1',
      cost: 2.99,
    },
    {
      category: HOME_GARDEN,
      name: 'image2',
      cost: 19.99,
     },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={Logo9} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
