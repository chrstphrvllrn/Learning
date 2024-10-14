import React from 'react'
import CodeBlock from '../components/CodeBlock'


function RemoveItemToArray() {
  return (
    <div>
         <CodeBlock>{`const handleRemoveItem = (itemToRemove) => {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
}`}</CodeBlock>

 <CodeBlock>{`{cart && cart.map((item) => (
 <button onClick={() => handleRemoveItem(item)}>
))}
`}</CodeBlock>

    </div>
  )
}

export default RemoveItemToArray