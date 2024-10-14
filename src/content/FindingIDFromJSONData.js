import React from 'react'
import CodeBlock from '../components/CodeBlock'


function FindingIDFromJSONData() {
  return (
    <div>
<p>Playlist.js</p>
<CodeBlock >
        {`export const Playlist = [
    { id:'1', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
    { id:'2', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
    { id:'3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05',  bpm: '120 bpm', amount:'1' },
];
      `}
      </CodeBlock>

      <p>Beats.js</p>
<CodeBlock >
        {`  // Find the beat in the playlist by comparing the 'id' as a string
  const beat = Playlist.find(beat => beat.id == id); // Ensure id matches as string
      
      if(beat) { 
      console.log('beat is already added in the cart')
      }
      `}
      </CodeBlock>
    </div>
  )
}

export default FindingIDFromJSONData