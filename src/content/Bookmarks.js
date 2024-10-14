import React from 'react';
import Icons from '../components/icons/Icons';
import Fonts from '../components/icons/Fonts';
import Component from '../components/icons/Component';
import Payment from '../components/icons/Payment';

const icons = [
  { name: 'Hero Icons', url: 'https://heroicons.com/' },
  { name: 'Material UI Icons', url: 'https://mui.com/material-ui/material-icons/' },
  { name: 'React Icons', url: 'https://react-icons.github.io/react-icons/icons/rx/' },
  { name: 'React SVG Icons', url: 'https://reactsvgicons.com/search?q=gmail#google_vignette' },
  { name: 'Phospor Icons', url: 'https://phosphoricons.com/' },
  { name: 'Lottie Files', url: 'https://lottiefiles.com/featured-free-animations' },
  { name: 'Ant Design Icons', url: 'https://4x.ant.design/components/icon/' },
  { name: 'Atlas Icons', url: 'https://atlasicons.vectopus.com/' },
  { name: 'Lordicon', url: 'https://lordicon.com/' },
  { name: 'Feather Icons', url: 'https://feathericons.dev/' },
  { name: 'Google Icons', url: 'https://fonts.google.com/icons' },
  { name: 'Iconsax', url: 'https://iconsax.io/' },
  { name: 'The stocks v3', url: 'https://v3.thestocks.im/icon-sets' }
];

const fonts = [
  { name: 'Aeonik', url: 'https://aeonik.co.uk/font/' },
  { name: 'Geist', url: 'https://vercel.com/font' },
  { name: 'Gilroy', url: 'https://www.tinkov.info/gilroy.html' },
  { name: 'Inter', url: 'https://fonts.google.com/specimen/Inter' },
  { name: 'FontSource', url: 'https://fontsource.org/docs/getting-started/install' }
];

const components = [
  { name: 'Shadcn', url: 'https://ui.shadcn.com/' },
  { name: 'Flowbite', url: 'https://flowbite.com/docs/components/card/' },
  { name: 'Penguin UI', url: 'https://www.penguinui.com/components/card' },
  { name: 'Preline', url: 'https://preline.co/docs/card.html' },
  { name: 'Tailwind UI', url: 'https://tailwindui.com/components/application-ui/layout/cards' },
  { name: 'Component Land', url: 'https://componentland.com/component/product-card-2' },
  { name: 'Tailwindcss V1', url: 'https://v1.tailwindcss.com/components/cards' },
  { name: 'Material Tailwind', url: 'https://www.material-tailwind.com/docs/html/card' },
  { name: 'TW Elements', url: 'https://tw-elements.com/docs/standard/components/cards/' },
  { name: 'Creative Tim', url: 'https://www.creative-tim.com/twcomponents/components/cards' },
  { name: 'Daisy UI', url: 'https://daisyui.com/components/countdown/' },
  { name: 'Keen Themes', url: 'https://keenthemes.com/metronic/tailwind/docs/components/collapse' },
  { name: 'Float UI', url: 'https://floatui.com/components/footers' },
  { name: 'Tailgrids', url: 'https://tailgrids.com/components/cards' },
  { name: 'Sailboat UI', url: 'https://sailboatui.com/docs/components/avatar/' },
  { name: 'Horizin UI', url: 'https://horizon-ui.com/docs-tailwind/docs/react/charts' },
  { name: 'Semantic UI', url: 'https://semantic-ui.com/views/card.html' }
];

const payments = [
  { name: 'Paypal Checkout', url: 'https://developer.paypal.com/docs/checkout/' },
  { name: 'Stripe Checkout', url: 'https://docs.stripe.com/payments/checkout' }
];

const Section = ({ title, icon: Icon, items }) => (
  <ul>
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

function Bookmarks() {
  return (
    <div className="grid grid-col-4 grid-flow-col gap-4">
      <Section title="ICONS" icon={Icons} items={icons} />
      <Section title="FONTS" icon={Fonts} items={fonts} />
      <Section title="COMPONENTS" icon={Component} items={components} />
      <Section title="PAYMENT" icon={Payment} items={payments} />
    </div>
  );
}

export default Bookmarks;
