import React from 'react'
import CodeBlock from '../components/CodeBlock'

function CreatingReactJSandTailwindCSS() {
    return (
        <div>

            <h1 className='text-xl'>Create your project</h1>
            <p>Start by creating a new React project with Create React App v5.0+ if you don't have one already set up.</p>
            <CodeBlock language='command-line'>{`npx create-react-app my-app
cd my-app`}</CodeBlock>

            <h1 className='text-xl'>Install Tailwind CSS</h1>
            <p>Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.</p>
            <CodeBlock language='command-line'>{`npm install -D tailwindcss
npx tailwindcss init`}</CodeBlock>

            <h1 className='text-xl'>Configure your template paths</h1>
            <p>Add the paths to all of your template files in your tailwind.config.js file.
            </p>
            <pre>tailwind.config.js</pre>
            <CodeBlock>{`/** @type {import('tailwindcss').Config} */

module.exports = {

 content: [

   "./src/**/*.{js,jsx,ts,tsx}",

 ],

 theme: {

   extend: {
   colors: {
        primary:{
          50:  "hsl(var(--color-primary-50))",
          100:  "hsl(var(--color-primary-100))",
          200:  "hsl(var(--color-primary-200))",
          300:  "hsl(var(--color-primary-300))",
          400:  "hsl(var(--color-primary-400))",
          500:  "hsl(var(--color-primary-500))",
      
        },
        secondary:{
         
          300:  "hsl(var(--color-secondary-300))",
          400:  "hsl(var(--color-secondary-400))",
          500:  "hsl(var(--color-secondary-500))",
          600:  "hsl(var(--color-secondary-600))",
          700:  "hsl(var(--color-secondary-700))",
          800:  "hsl(var(--color-secondary-800))",
      
        }
      }
   },

 },

 plugins: [],

}
`}</CodeBlock>



            <h1 className='text-xl'>Add the following Tailwind CSS code</h1>
            <p></p>
            <pre>index.css</pre>
            <CodeBlock language='css'>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBlock>

            <h1 className='text-xl'>Now, we will start to clean up.</h1>
            <p> Go to public/index.html and replace the following:
            </p>
            <pre>public/index.html </pre>
            <CodeBlock>{`<link rel="icon" href=""/>
<link rel="apple-touch-icon" href=""/>
<title>React App</title>`}</CodeBlock>

            <h1 className='text-xl'>Now, delete the following files</h1>

            <pre>public and src </pre>
            <CodeBlock>{`Remove the following: logo.svg, favicon.ico, logo192.png, logo512.png`}</CodeBlock>


            <h1 className='text-xl'>Now, go to App.js</h1>
            <p>and remove the: </p>
            <pre>App.js</pre>
            <CodeBlock>{`import logo from'./logo.svg
<header> </header>`}</CodeBlock>

            <h1 className='text-xl'>Now, go to App.css</h1>
            <p>and remove all content</p>
            <pre>App.css</pre>
            <CodeBlock>{``}</CodeBlock>


            <h1 className='text-xl'>in, index.css</h1>
            <p>add the color dynamic setup, change the hsl value</p>
            <pre>index.css</pre>
            <CodeBlock language='css'>{`@layer base {
  :root {
    --color-primary-50:  0deg 0% 100%; /*bg primary*/
    --color-primary-100: 228deg 100% 99%; /*bg secondary*/
    --color-primary-200: 213deg 20% 38%; /* Grey text */
    --color-primary-300:  250deg 14% 8%; /* black text */
    --color-primary-400:  0deg 0% 87%; /* lines */
    --color-primary-500:  228deg 12% 92%; /*lines 2 */
    --color-secondary-300: 252deg 96% 65%; /* violet text */
    --color-secondary-400: 254deg 100% 97%; /* bg violet */
    --color-secondary-500: 220deg 23% 97%;  /* search bg */
    --color-secondary-600: 222deg 14% 32%; /* search text */
    --color-secondary-700: 220deg 25% 98%; /* table header bg */
    --color-secondary-800: 150deg 100% 99%; /* table row bg */
  }
  .dark {
 
  }
}
            `}</CodeBlock>



        </div>
    )
}

export default CreatingReactJSandTailwindCSS