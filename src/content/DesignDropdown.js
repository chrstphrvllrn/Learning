import React, { useState, useRef, useEffect } from 'react'
import CodeBlock from '../components/CodeBlock'

const options = [
    { id:1, name:'Creating Component 1'},
    { id:2, name:'Creating Component 2'},
]

function DesignDropdown({ onSelect, placeholder = 'Select an option' }) {



    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const dropdownRef = useRef(null)
 
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleToggle = () => setIsOpen(!isOpen)

    const handleSelect = (option) => {
        setSelectedOption(option)
        onSelect(option)
        setIsOpen(false)
    }


    return (

        <div>



            <div className="relative inline-block text-left py-4" ref={dropdownRef}>
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={handleToggle}
                    >
                        {selectedOption || placeholder}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.id}  
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={() => handleSelect(option)}
                            >
                                {option.name} 
                            </button>
                            ))}

                        </div>
                    </div>
                )}
            </div>


            <CodeBlock >
                {`
import React, { useState, useRef, useEffect } from 'react'

export default function Dropdown({ options, onSelect, placeholder = 'Select an option' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300
          shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={handleToggle}
        >
          {selectedOption || placeholder}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 
            01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md 
        shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
  <button
        key={option.id}  {/* Use option.id as the key */}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        onClick={() => handleSelect(option)}
    >
        {option.name}  {/* Render option.name instead of option */}
    </button>
    ))}

          </div>
        </div>
      )}
    </div>
  )
}

      `}
            </CodeBlock>



        </div>
    )
}

export default DesignDropdown