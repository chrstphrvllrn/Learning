import React from 'react'
import CodeBlock from '../components/CodeBlock'
import Framework from '../components/icons/Framework'
import Tools from '../components/icons/Tools'
import Package from '../components/icons/Package'
import DesignIdeas from '../components/icons/DesignIdeas'


function Bookmarks2() {

    const packages = [
        { name: 'Prism JS', url: 'https://www.npmjs.com/package/prismjs' },
        { name: 'Swiper JS', url: 'https://swiperjs.com/' },
        { name: 'React Slick', url: 'https://react-slick.neostack.com/' },
        { name: 'Vaul', url: 'https://github.com/emilkowalski/vaul' },
        { name: 'Sonner', url: 'https://sonner.emilkowal.ski/' },
        { name: 'React Dropzone', url: 'https://react-dropzone.js.org/' },
        { name: 'React Whatsapp', url: 'https://www.npmjs.com/package/react-whatsapp' },
        { name: 'React Drag and Drop', url: 'https://react-dnd.github.io/react-dnd/examples/sortable/simple' },
        { name: 'DND Kit (Drag and Drop)', url: 'https://dndkit.com/' }
    ];


    const designIdeas = [
        { name: 'Fillo Agency', url: 'https://www.instagram.com/filllo_agency/' }
    ];

    const tools = [
        { name: 'Converting Colors', url: 'https://convertingcolors.com/rgb-color-248_250_252.html' },
        { name: 'Pesticide', url: 'https://chromewebstore.google.com/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi/reviews?pli=1' }
    ];

    const Section = ({ title, icon: Icon, items }) => (
        <ul className=''>
            <p className='p-2 text-xl font-bold flex gap-2 items-center'><Icon />{title}</p>
            {items.map((item, index) => (
               <a target="_blank" href={item.url}>
               <li key={index} className='p-2  hover:bg-primary-500 rounded-2xl cursor-pointer'>
               {item.name}
             </li>
             </a>
            ))}
        </ul>
    );


    return (

        <div>
            <div class="grid grid-col-4 grid-flow-col gap-4 ">

                <div className="grid grid-col-4 grid-flow-col gap-4">
                    <Section title="PACKAGE" icon={Package} items={packages} />
                    <Section title="DESIGN IDEAS" icon={DesignIdeas} items={designIdeas} />
                    <Section title="TOOLS" icon={Tools} items={tools} />
                    
                </div>

            </div>

        </div>
    )
}

export default Bookmarks2