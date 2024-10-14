import React from 'react'
import CodeBlock from '../components/CodeBlock'

function CreatingComponent() {


  return (

    <div>

      <CodeBlock >
        {`import React from 'react'

function Song({title, artist}) {

 return (
   <div>
       <li>{title}</li>
       <li>{artist}</li>
   </div>
 )
}

export default Song
      `}
      </CodeBlock>

      <p>Usage</p>
      <CodeBlock>
      {"import Playlist from './Playlist'"} 
      </CodeBlock>
      <CodeBlock language="html">
        {` <Song title="When you're mad" artist="ne-yo"/>`}
      </CodeBlock>


    </div>
  )
}

export default CreatingComponent