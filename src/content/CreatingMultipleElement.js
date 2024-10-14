import React from 'react'
import CodeBlock from '../components/CodeBlock'

function CreatingMultipleElement() {


  return (

    <div>
    
      <CodeBlock >
        {` export const Playlist = [
    { id:'1', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
    { id:'2', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
    { id:'3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
];
      `}
      </CodeBlock>

      <p>Usage</p>

      <CodeBlock>
      {"import Playlist from './Playlist'"} 
      </CodeBlock>

      <CodeBlock>
      {"Playlist.map((item, index) => ( <span>{Playlist.title}</span> ) )}"}
      </CodeBlock>


    </div>
  )
}

export default CreatingMultipleElement