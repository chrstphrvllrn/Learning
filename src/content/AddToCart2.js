import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock'

const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 15.99 },
    { id: 3, name: "Product 3", price: 7.99 },
  ];

function AddToCart2() {
   
    const [cart, setCart] = useState([]);

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
        // alert('Successfully added')
        setCart([...cart, item]);
    }
    
  };

  const removeFromCart = (productToRemove, index) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>

    <p>When the user add multiple items with same id, it will delete all in array with the same id</p>
<div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-6 ">Simple Shopping Cart</h1>
      
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className='bg-white p-5 rounded-xl border'>
          <h2 className="text-xl font-semibold mb-4 ">Products</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center border-b pb-2">
                <span>{product.name} - ${product.price.toFixed(2)}</span>
                <button className='border border-zinc-100 bg-zinc-100 px-2 py-2 rounded-md' onClick={() => addToCart(product)}>
                {cart.find((item) => item.id === product.id) ? 'Added' : 'Add to Cart'} 
                    </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className='bg-white p-5 rounded-xl border'>
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-2 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{item.name} - ${item.price.toFixed(2)}</span>
                    <button className='text-red-400' onClick={() => removeFromCart(item, index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold">
                Total: ${calculateTotal()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>



         <CodeBlock>{` 
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.99 },
  { id: 3, name: "Product 3", price: 7.99 },
];

export default function SimpleShoppingCart() {
  const [cart, setCart] = useState([]);

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
        alert('Successfully added')
        setCart([...cart, item]);
    }
    
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Simple Shopping Cart</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center border-b pb-2">
                <span>{product.name} - {product.price.toFixed(2)}</span>
                <Button onClick={() => addToCart(product)}>
                 {cart.find((item) => item.id === product.id) ? 'Added' : 'Add to Cart'} 
                </Button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-2 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{item.name} - {item.price.toFixed(2)}</span>
                    <Button variant="outline" onClick={() => removeFromCart(item)}>Remove</Button>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold">
                Total: {calculateTotal()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
         `}</CodeBlock>


    </div>
  )
}

export default AddToCart2