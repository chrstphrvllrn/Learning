import React from 'react'
import CodeBlock from '../components/CodeBlock'

function TailwindCustomizingColors() {
  return (
    <div>
        <p>Source: https://tailwindcss.com/docs/customizing-colors</p>
        <p>index.css</p>
        <CodeBlock language='css'>
        {`
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* For rgb(255 115 179 / 1) */
    --color-primary: 255 115 179;

    /* For hsl(333deg 100% 73% / 1) */
    --color-primary: 333deg 100% 73%;

    /* For rgba(255, 115, 179, 1) */
    --color-primary: 255, 115, 179;

       /* For rgba(255 115 179 1) */
    --color-brand-primary: 255 115 179 1;
  }
}
        
        `}
        </CodeBlock>


        <p>tailwind.config.js</p>
        <CodeBlock language='js'>{`
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // Using modern 'rgb'
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',

      // Using modern 'hsl'
      primary: 'hsl(var(--color-primary))',
      secondary: 'hsl(var(--color-secondary))',

      // Using legacy 'rgba'
      brand:{
            primary: 'rgba(var(--color-primary), 1)',
            secondary: 'rgba(var(--color-secondary), 1)',
     }
    }
  }
}
        `}
        </CodeBlock>
        

    </div>
  )
}

export default TailwindCustomizingColors