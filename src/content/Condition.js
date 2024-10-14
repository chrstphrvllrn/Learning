





import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Condition() {


    return (

        <div>

            <h2 className="text-xl font-bold">in className</h2>
            <CodeBlock  >
                {' className={`flex items-center justify-center w-full ${currentAudio?.id === item.id ? "bg-violet-50" : ""}`}'}
            </CodeBlock>
            <br></br>
            <h2 className="text-xl font-bold">in line - if else</h2>
            <CodeBlock language='html'>
                {`{ isTrue ? ( <div> </div> ) : ( <div> </div> ) } `}
            </CodeBlock>
            <br></br>
            <h2 className="text-xl font-bold">in line - if only</h2>
            <CodeBlock language='html'>
                {`{ isTrue && ( <div> </div> ) }`}
            </CodeBlock>

            <br></br>
            <h2 className="text-xl font-bold">Check if cart has value or false then proceed with .map</h2>
            <CodeBlock language='html'>
                {`{ cart && cart.map((item) => ( <div> </div> ))}`}
            </CodeBlock>

            <br></br>
            <h2 className="text-xl font-bold">Check if cart is truthy then proceed with checking if the value is 0 then statement</h2>
            <span> 
                <pre>cart:</pre> The first condition checks if the cart is truthy. If cart is null, undefined, or a falsy value (like an empty string or false), the expression will short-circuit and nothing will be rendered.<br></br>
                <pre>cart.length === 0:</pre> If cart is truthy, this part checks if the cart is an empty array by comparing its length to 0. If cart is empty ([]), cart.length will be 0, and this condition will be true.<br></br>
                <pre>&&</pre>: The logical AND operator is used to chain conditions. In React, the && operator is commonly used for conditional rendering. If the condition on the left <pre>(cart && cart.length === 0)</pre> evaluates to true, the code on the right (after &&) will be rendered.<br></br>
            </span>
            <CodeBlock language='html' >
                {`{ cart && cart.length === 0 && <div> </div> }`}
            </CodeBlock>


        </div>
    )
}

export default Condition