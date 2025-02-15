import React from "react";
import { Moon, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <div>
      <nav className="bg-navy-900 text-gray-400 text-sm p-2 bg-[#021431]">
        <div className="container mx-auto flex justify-end space-x-4">
          <Link to="/login" className="hover:text-gray-300 hover:underline">
            Sign in / Guest
          </Link>
          <Link to="/register" className="hover:text-gray-300 hover:underline">
            Create Account
          </Link>
        </div>
      </nav>

      <header className="  p-2.5 bg-gray-50">
        <div className=" container mx-auto flex items-center justify-between ">
          <div className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-2xl">
            C
          </div>
          <div className="flex items-center space-x-8">
            <nav className="flex justify-center space-x-6 text-gray-600 ">
              <Link
                to="/"
                className={` ${location.pathname=='/'?"bg-[#021431] text-white hover:text-gray-600":''} text-gray-600 hover:bg-gray-200 text-g rounded-md px-3 py-1 pb-1.5`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={` ${location.pathname.includes('about')?"bg-[#021431] text-white hover:text-gray-600":''} text-gray-600 hover:bg-gray-200 text-g rounded-md px-3 py-1`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={` ${location.pathname.includes('products')?"bg-[#021431] text-white hover:text-gray-600":''} bg-navy-900 text-gray-600 px-3 py-1  hover:bg-gray-200 text-g rounded-md`}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className={` ${location.pathname.includes('cart')?"bg-[#021431] text-white hover:text-gray-600":''} text-gray-600 hover:bg-gray-200 text-g rounded-md px-3 py-1`}
              >
                Cart
              </Link>
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
    </div>
  );
}

export default Header;
