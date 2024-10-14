import React from 'react'
import CodeBlock from '../components/CodeBlock'
import objectfit from '../images/object-fit.png'
function ObjectFit() {


  return (

    <div>

     <img src={objectfit} className='p-5'/>
     <p><pre>fill</pre> - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit<br></br>
     <pre>contain</pre> - The image keeps its aspect ratio, but is resized to fit within the given dimension<br></br>
     <pre>cover</pre> - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit<br></br>
     <pre>none</pre> - The image is not resized<br></br>
     <pre>scale-down</pre> - the image is scaled down to the smallest version of none or contain</p>
    </div>
  )
}

export default ObjectFit