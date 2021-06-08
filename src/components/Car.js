import React, { useState } from 'react';
import './../style/App.css'
import Products from './Products';
import Cart from './Cart';
import Logo9 from './../images/i16.jpeg'
import Logo1 from './../images/i10.jpg'
import Logo2 from './../images/i9.jpg'
import Logo3 from './../images/i8.jpg'
import Logo4 from './../images/i8.jpg'
import Logo5 from './../images/i8.jpg'
import Logo6 from './../images/i11.JPG'
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Car() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <button id="bttn1" onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button>

        <a className="btn btn-large btn-dark" href="/shop">View Product</a>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Car;
