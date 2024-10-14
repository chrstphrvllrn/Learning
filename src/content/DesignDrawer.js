import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock'

function DesignDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
  

  return (

    <div>

<div className="relative py-4">
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>

      {/* Overlay (when drawer is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
          <button
            onClick={toggleDrawer}
            className="mt-4 px-4 py-2 text-white bg-red-500 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>






      <CodeBlock >
        {`import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 text-white bg-blue-500 rounded"
      >
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>

      {/* Overlay (when drawer is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={\`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 {
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }\`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
          <button
            onClick={toggleDrawer}
            className="mt-4 px-4 py-2 text-white bg-red-500 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;



      `}
      </CodeBlock>



    </div>
  )
}

export default DesignDrawer