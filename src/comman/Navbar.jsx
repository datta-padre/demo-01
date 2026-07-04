import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-600 font-medium">
              Home 
            </a>

            <a href="#" className="hover:text-blue-600 font-medium">
              Products
            </a>

            <a href="#" className="hover:text-blue-600 font-medium">
              About Us
            </a>

            <a href="#" className="hover:text-blue-600 font-medium">
              Contact Us
            </a>

             <button className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
             </button>

             <button>
              <User size={24} />
             </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>

              <a href="#" className="hover:text-blue-600">
                Products
              </a>

              <a href="#" className="hover:text-blue-600">
                Cart
              </a>

              <a href="#" className="hover:text-blue-600">
                Profile
              </a>

              <a href="#" className="hover:text-blue-600">
                About Us
              </a>

              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;