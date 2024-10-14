import React, { useState } from 'react'
import CodeBlock from '../components/CodeBlock'


const Popup = ({ title, content, onClose }) => {
    const [isVisible, setIsVisible] = useState(true)
  
    const handleClose = () => {
      setIsVisible(false)
      onClose()
    }
  
    if (!isVisible) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              {content}
            </p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b">
            <button
              onClick={handleClose}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
  

  


function DesignPopup() {
    const [showPopup, setShowPopup] = useState(false)


  return (

    <div>

<div className="py-4">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
      >
        Show Popup
      </button>
      {showPopup && (
        <Popup
          title="Welcome!"
          content="This is a sample popup message. You can customize this content as needed."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>



      <CodeBlock >
        {`import React, { useState } from 'react'

const Popup = ({ title, content, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
            rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 
              0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 
              11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 
              10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500">
            {content}
          </p>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b">
          <button
            onClick={handleClose}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup

// Example usage
const App = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="p-4">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Popup
      </button>
      {showPopup && (
        <Popup
          title="Welcome!"
          content="This is a sample popup message. You can customize this content as needed."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}

export default App


      `}
      </CodeBlock>



    </div>
  )
}

export default DesignPopup