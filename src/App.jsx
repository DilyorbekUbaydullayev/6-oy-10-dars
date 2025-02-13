import React, { useState } from 'react';
import { Moon, ShoppingCart, Grid, List } from 'lucide-react';

const ProductSearch = () => {
  const [price, setPrice] = useState(1000);
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="min-h-screen bg-white">
      
      <nav className="bg-navy-900 text-white p-2 bg-[#021431]">  
        <div className="container mx-auto flex justify-end space-x-4">
          <a href="#" className="hover:text-gray-300">Sign in / Guest</a>
          <a href="#" className="hover:text-gray-300">Create Account</a>
        </div>
      </nav>

     
      <header className="  p-2 bg-gray-50">
  <div className=" container mx-auto flex items-center justify-between ">
  <div className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-2xl">
        C
      </div>
    <div className="flex items-center space-x-8">
      
      <nav className="flex justify-center space-x-6 text-gray-600">
        <a href='#' className="text-gray-600 hover:text-gray-900 px-3 py-1">Home</a>
        <a href='#' className="text-gray-600 hover:text-gray-900 px-3 py-1">About</a>
        <a href='#' className="bg-navy-900 text-white px-3 py-1.5  rounded-md bg-[#021431]">Products</a>
        <a href='#' className="text-gray-600 hover:text-gray-900 px-3 py-1">Cart</a>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <Moon className="w-5 h-5 text-gray-600" />
      <div className="relative">
        <ShoppingCart className="w-5 h-5 text-gray-600" />
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  </div>
</header>

    
      <section className="container mx-auto p-4 mt-5">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-2">Search Product</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Select Category</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">all</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Select Company</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">all</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Sort By</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="a-z">a-z</option>
              </select>
            </div>
          </div>

          <div className='flex items-center justify-between space-x-2 mb-6 '>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Select Price</label>
            <input
              type="range"
              min="0"
              max="100000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[200px] rounded-lg  cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>0</span>
              <span>Max: ${price}.00</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" className=" text-blue-500" />
            <span className="text-gray-600">Free Shipping</span>
          </div>

          <div className="flex space-x-4 h-8 mb-2">
            <button className="bg-blue-500 text-white text-sm px-16  rounded hover:bg-blue-600">
              SEARCH
            </button>
            <button className="bg-purple-500 text-white text-sm px-16 rounded hover:bg-purple-600">
              RESET
            </button>
          </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">22 products</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/400/300"
              alt="Product"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSearch;