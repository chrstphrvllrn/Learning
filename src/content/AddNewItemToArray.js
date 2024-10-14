import React from 'react'
import CodeBlock from '../components/CodeBlock'

function AddNewItemToArray() {
  return (
    <div>
          <p className="text-xl font-bold">Let's say the cart initially looks like this:
          </p>
       
    <CodeBlock>{`const cart = [
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 }
];

setCart(prevCart => [...prevCart, { ...item, price: item.price || 30 }]);

`}</CodeBlock>
    <p>Now, if you call:</p>
          <CodeBlock>
    {` { name: 'Item 3' }
`}
    </CodeBlock>

    <p>Since <pre>Item 3</pre> doesn't have a price, the line <pre>price: item.price || 30</pre> will set the price to <pre>30</pre>, and the new cart state will be:
    </p>
          <CodeBlock>
    {`[
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 }
]
`}
    </CodeBlock>


    <p>If you call:</p>
          <CodeBlock>
    {` setCart(prevCart => [...prevCart, { name: 'Item 4', price: 50 }]);`}
    </CodeBlock>
       
    <p>Since <pre>Item 4</pre> has a price, it will keep that value, and the new cart will be:
    </p>
    <CodeBlock>{`[
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 },
  { name: 'Item 4', price: 50 }
]
`}</CodeBlock>

    </div>
  )
}

export default AddNewItemToArray