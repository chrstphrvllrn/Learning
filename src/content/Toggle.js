import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Toggle() {


  return (

    <div>

      <CodeBlock >
        {`import React, { useState } from 'react';

function Toggle() {
 const [isToggled, setIsToggled] = useState(false);


 const handleToggle = () => {
   setIsToggled(!isToggled);
 };

 return (
   <div>
     <button onClick={handleToggle}>
       {isToggled ? 'ON' : 'OFF'}
     </button>
     <p>The switch is {isToggled ? 'ON' : 'OFF'}</p>
   </div>
 );
}

export default Toggle;
      `}
      </CodeBlock>



    </div>
  )
}

export default Toggle