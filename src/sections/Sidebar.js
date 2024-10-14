import React, { useState } from 'react';
import CreatingComponent from '../content/CreatingComponent'
import Condition from '../content/Condition';
import CreatingMultipleElement from '../content/CreatingMultipleElement'
import FilterandSearch from '../content/FilterandSearch'
import AddNewItemToArray from '../content/AddNewItemToArray'
import RemoveItemToArray from '../content/RemoveItemToArray'
import Toggle from '../content/Toggle'
import TailwindCustomizingColors from '../content/TailwindCustomizingColors'
import FindingIDFromJSONData from '../content/FindingIDFromJSONData'
import AddToCart from '../content/AddToCart'
import AddToCart2 from '../content/AddToCart2'
import AddToCart3 from '../content/AddToCart3'
import DesignTable from '../content/DesignTable'
import DesignDropdown from '../content/DesignDropdown'
import DesignDrawer from '../content/DesignDrawer'
import DesignPopup from '../content/DesignPopup'
import Bookmarks from '../content/Bookmarks'
import Bookmarks2 from '../content/Bookmarks2'
import Flexbox from '../content/Flexbox'
import ObjectFit from '../content/ObjectFit'
import DesignCard from '../content/DesignCard'
import DesignSearchTable from '../content/DesignSearchTable'
import CreatingReactJSandTailwindCSS from '../content/CreatingReactJSandTailwindCSS'
import Git from '../content/Git'

const pages = [
  { id:18, name:'Bookmarks', path:'/Bookmarks', content: <Bookmarks/>},
  { id:23, name:'Bookmarks 2', path:'/Bookmarks2', content: <Bookmarks2/>},
  { id:24, name:'Creating React JS and Tailwind CSS', path:'/CreatingReactJSandTailwindCSS', content: <CreatingReactJSandTailwindCSS/>},
  { id:25, name:'Git and Github', path:'/Git', content: <Git/>},
  { id: 1, name: 'JSX: Creating Component', path: '/CreatingComponent', content: <CreatingComponent/> },
  { id: 2, name: 'JSX: Condition', path: '/Condition', content: <Condition/> },
  { id: 3, name: 'JSX: Creating Multiple Element', path: '/CreatingMultipleElement', content: <CreatingMultipleElement/> },
  { id: 4, name: 'JSX: Filter and Search', path: '/FilterandSearch', content: <FilterandSearch/>},
  { id: 5, name: 'JSX: Add New Item To Array', path: '/AddNewItemToArray', content: <AddNewItemToArray/> },
  { id: 6, name: 'JSX: Remove Item To Array', path: '/RemoveItemToArray', content: <RemoveItemToArray/> },
  { id:7, name:'JSX: Toggle', path:'/Toggle', content: <Toggle/>},
  { id:9, name:'JSX: Finding id from Json Data', path:'/FindingIDFromJSONData', content: <FindingIDFromJSONData/>},
  { id:8, name:'Tailwind: Customizing Colors', path:'/TailwindCustomizingColors', content: <TailwindCustomizingColors/>},
  { id:21, name:'Component: Card', path:'/DesignCard', content: <DesignCard/>},
  { id:22, name:'Component: Search Table', path:'/DesignSearchTable', content: <DesignSearchTable/>},
  { id:14, name:'Component: Table', path:'/DesignTable', content: <DesignTable/>},
  { id:15, name:'Component: Dropdown', path:'/DesignDropdown', content: <DesignDropdown/>},
  { id:16, name:'Component: Drawer', path:'/DesignDrawer', content: <DesignDrawer/>},
  { id:17, name:'Component: Popup', path:'/DesignPopup', content: <DesignPopup/>},
  { id:11, name:'Component: Add to cart', path:'/AddToCart', content: <AddToCart/>},
  { id:12, name:'Component: Add to cart 2', path:'/AddToCart2', content: <AddToCart2/>},
  { id:13, name:'Component: Add to cart 3', path:'/AddToCart3', content: <AddToCart3/>},
  { id:19, name:'CSS: Flexbox', path:'/Flexbox', content: <Flexbox/>},
  { id:20, name:'CSS: Object Fit', path:'/ObjectFit', content: <ObjectFit/>},
  
]
;

function SidebarLayout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex max-h-screen bg-primary-100">
      {/* Sidebar */}
      <div className="w-64 bg-primary-50 text-primary-200 p-4 overflow-auto">
        <div className="mb-4">
          
          <div className="flex items-center  bg-secondary-500 rounded-3xl px-4 py-2 w-full max-w-md">
          <svg className='mr-3 size-5'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-grow bg-primary-100 text-primary-200 text-sm text-secondary-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
   
        <nav>
          <ul className="space-y-2">
            {filteredPages.map((page) => (
              <li key={page.id}  >
                <button
                  onClick={() => handlePageClick(page)}
                  className={`w-full text-sm text-left px-3 py-2 rounded-3xl hover:bg-primary-500 transition-colors duration-200 ${
                    selectedPage.id === page.id ? 'bg-secondary-400 text-secondary-300' : ''
                  }`}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-4 text-secondary-300">{selectedPage.name}</h1>
        <p className="text-primary-200">{selectedPage.content}</p>
      </div>
    </div>
  );
}

export default SidebarLayout;