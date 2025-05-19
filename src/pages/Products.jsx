// src/pages/Products.jsx
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import heroImage from '../images/product.png';
import cinnamonSticks from '../images/pack.png';
import cinnamonOffcuts from '../images/offcut.png';
import cinnamonQuillings from '../images/quil.png';
import cinnamonMachineCut from '../images/pack.png';
import cinnamonPowder from '../images/powder.png';
import blackPepper from '../images/papper.png';
import pepperPowder from '../images/pepper1.png';

const PRODUCTS = {
  cinnamon: [
    {
      name: 'Cinnamon Sticks',
      img: cinnamonSticks,
      desc: 'Whole hand-rolled sticks for premium aroma.',
      details:
        'Premium grade Ceylon cinnamon sticks, harvested and hand-rolled to preserve the essential oils and sweet aroma. Perfect for infusions, baking, and gourmet recipes.',
    },
    {
      name: 'Offcuts',
      img: cinnamonOffcuts,
      desc: 'Small bark pieces ideal for spicing teas.',
      details:
        'Collected offcuts from our finest sticks—ideal for loose-leaf teas, potpourri, and simmering spice blends. Enjoy full flavor at a budget-friendly price.',
    },
    {
      name: 'Quillings',
      img: cinnamonQuillings,
      desc: 'Rolled bark pieces for decorative use.',
      details:
        'Beautiful quillings made from inner bark, perfect for garnishes, décor, or steeping in your favorite drinks. Adds visual charm and authentic taste.',
    },
    {
      name: 'Machine Cut',
      img: cinnamonMachineCut,
      desc: 'Uniform cuts for consistent quality.',
      details:
        'Precisely machine-cut sticks ensure uniform size and thickness—great for commercial kitchens and large-batch cooking where consistency matters.',
    },
    {
      name: 'Cinnamon Powder',
      img: cinnamonPowder,
      desc: 'Fine-ground powder for baking & cooking.',
      details:
        'Ultra-fine Ceylon cinnamon powder with intense sweetness and low coumarin content. Perfect for cakes, cookies, curries, and all your culinary creations.',
    },
  ],
  pepper: [
    {
      name: 'Black Peppercorns',
      img: blackPepper,
      desc: 'Whole peppercorns with bold heat.',
      details:
        'Handpicked black peppercorns offering sharp heat and aromatic depth. Ideal for mills, grinders, and classic seasoning in every kitchen.',
    },
    {
      name: 'Pepper Powder',
      img: pepperPowder,
      desc: 'Fine-ground pepper for instant spice.',
      details:
        'Shop-quality black pepper powder for immediate use. Perfect for rubs, sauces, and finishing touches where uniform heat distribution is key.',
    },
  ],
};

export default function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 text-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            Our Products
          </h1>
          <p className="mt-2 text-white max-w-2xl mx-auto">
            Explore our premium Ceylon cinnamon and black pepper ranges, crafted for flavor and quality.
          </p>
        </div>
      </section>

      {/* Cinnamon Range */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-4">Cinnamon Range</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From whole sticks to fine powder, our Ceylon cinnamon products bring authentic Sri Lankan flavor to your kitchen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.cinnamon.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{prod.name}</h3>
                  <p className="text-gray-600 mb-4">{prod.desc}</p>
                  <button
                    onClick={() => setSelected(prod)}
                    className="mt-auto text-indigo-600 hover:underline"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pepper Range */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-4">Pepper Range</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Discover our selection of bold black peppercorns and fine pepper powder for every culinary need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.pepper.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{prod.name}</h3>
                  <p className="text-gray-600 mb-4">{prod.desc}</p>
                  <button
                    onClick={() => setSelected(prod)}
                    className="mt-auto text-indigo-600 hover:underline"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
     {selected && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
    <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden transform transition-transform duration-300">
      
      {/* Close Button */}
      <button
        onClick={() => setSelected(null)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
      >
        <FiX className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={selected.img}
            alt={selected.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {selected.name}
          </h2>
          
          {/* Small Description */}
          <p className="text-gray-600 italic">
            {selected.desc}
          </p>
          
          {/* Expanded Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Product Details
            </h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {selected.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
