import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock'


function AddToCart() {
    const [cart, setCart] = useState([]);

 
// Product component
const Product = ({ product, addToCart }) => (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-2">Price: ${product.price.toFixed(2)}</p>
      <button 
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {cart.find((item) => item.id === product.id) ? 'Added' : 'Add to Cart'} 
      </button>
    </div>
  );
  
  // Cart component
  const Cart = ({ cart, removeFromCart }) => (
    <div className="bg-white p-5 rounded-xl border">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{item.name} - ${item.price.toFixed(2)}</span>
          <button 
            onClick={() => removeFromCart(index)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <p className="mt-4 text-lg font-semibold">
        Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </p>
    </div>
  );
  
 
    // Sample product data
    const products = [
      { id: 1, name: "Product 1", price: 10.99 },
      { id: 2, name: "Product 2", price: 15.99 },
      { id: 3, name: "Product 3", price: 7.99 },
    ];
  
    const addToCart = (item) => {
     
      var isPresent = false;
      cart.forEach((product) => {
  
        if (product.id === item.id) {
          isPresent = true
        } else {
          
        }
      })
  
      if (isPresent) {
          alert('Item is already added to cart')
      }
      else {
        //   alert('Successfully added')
          setCart([...cart, item]);
      }
    };
  
    const removeFromCart = (index) => {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    };

  return (
    <div>
        <p>When the user add multiple items with same id, it will delete specific index in array, not all the same id</p>
        <div>
                    <div className="container mx-auto px-4 py-8">
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className='bg-white p-5 rounded-xl border'>
                            <h2 className="text-2xl font-semibold mb-4">Products</h2>
                            {products.map(product => (
                                <Product key={product.id} product={product} addToCart={addToCart} />
                            ))}
                            </div>
                            <Cart cart={cart} removeFromCart={removeFromCart} />
                        </div>
                        </div>
        </div>

         
         <CodeBlock>{` 
import React, { useState } from 'react';

// Product component
const Product = ({ product, addToCart }) => (
  <div className="border rounded-lg p-4 mb-4 shadow-sm">
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-600 mb-2">Price: {product.price.toFixed(2)}</p>
    <button 
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      {cart.find((item) => item.id === product.id) ? 'Added' : 'Add to Cart'} 
    </button>
  </div>
);

// Cart component
const Cart = ({ cart, removeFromCart }) => (
  <div className="border rounded-lg p-4 bg-gray-50">
    <h2 className="text-xl font-bold mb-4">Cart</h2>
    {cart.map((item, index) => (
      <div key={index} className="flex justify-between items-center mb-2">
        <span>{item.name} - {item.price.toFixed(2)}</span>
        <button 
          onClick={() => removeFromCart(index)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    ))}
    <p className="mt-4 text-lg font-semibold">
      Total: {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
    </p>
  </div>
);

// Main component
export default function SimpleAddToCart() {
  const [cart, setCart] = useState([]);

  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 15.99 },
    { id: 3, name: "Product 3", price: 7.99 },
  ];

    const addToCart = (item) => {
     
      var isPresent = false;
      cart.forEach((product) => {
  
        if (product.id === item.id) {
          isPresent = true
        } else {
          
        }
      })
  
      if (isPresent) {
          alert('Item is already added to cart')
      }
      else {
        //   alert('Successfully added')
          setCart([...cart, item]);
      }
    };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Simple Add to Cart</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
         `}</CodeBlock>


    </div>
  )
}

export default AddToCart