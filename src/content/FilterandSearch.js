import React from 'react'
import CodeBlock from '../components/CodeBlock'

function FilterandSearch() {


  return (

    <div>



      <p>Usage</p>

      <CodeBlock>
    {`import React, { useState, } from 'react';


function Search() {

   const [searchTerm, setSearchTerm] = useState('');  // Add search state

   const Playlist = [
       { id: "1", title: 'Floating', tags: 'Drake Type Beat' },
       { id: "2", title: 'Love Keys', tags: 'Quavo Type Beat' },
       { id: "3", title: 'spi', tags: 'Lil Baby Type Beat' },
   ];

   // Filter songs based on search input
   const filteredSongs = Playlist.filter((item) =>
       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.tags.toLowerCase().includes(searchTerm.toLowerCase())
   );
   return (
       <div>
           <input
               type='textfield'
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)} // Update search term
               className=''
               placeholder='Search by title or tag'
           />
           {filteredSongs.length > 0 ? (
               filteredSongs.map((item) => (
                   <li>{item.title} {item.tags}</li>
               ))
           ) : (
               <div>
                   <p>No result found</p>
               </div>
           )}

       </div>
   )
}
export default Search
    `}
      </CodeBlock>


    </div>
  )
}

export default FilterandSearch