import React, { useState } from "react";
import bg from "~/assets/IMG/wallpaper-win11-default.jpg";
import { Link } from "react-router-dom";
import Logo from "~/assets/IMG/logo.png";
import { useSelector } from "react-redux";
import { HiMenu, HiX } from 'react-icons/hi';

// set inteface
interface HomeDefaultPops {
  children: React.ReactNode;
}

const HomeDefault: React.FC<HomeDefaultPops> = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <div className="flex min-h-screen bg-gray-50 justify-center items-center relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 
        bg-white/90 text-black flex flex-col w-full h-full md:w-[95%] md:h-[95%] 
        md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rounded-none md:rounded-md">
        
        {/* Header */}
        <div className="flex-[1] flex items-center justify-between px-4 md:px-6 py-4 border-b md:border-none">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-16 h-16 md:w-24 md:h-24 object-contain" src={Logo} alt="Logo" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Navigation Links */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex
            flex-col md:flex-row
            fixed md:relative
            top-[80px] md:top-auto
            left-0 md:left-auto
            right-0 md:right-auto
            bg-white md:bg-transparent
            border-b md:border-none
            py-4 md:py-0
            px-4 md:px-0
            space-y-4 md:space-y-0
            md:space-x-6
            md:items-center
            shadow-lg md:shadow-none
            z-50
            min-h-[200px] md:min-h-0
            w-full md:w-auto
            text-center md:text-left
          `}>
            <Link to={"/"} className="text-gray-700 hover:text-blue-500 text-lg">
              Home
            </Link>
            <Link to={"/about"} className="text-gray-700 hover:text-blue-500 text-lg">
              About
            </Link>
            <Link to={"/md"} className="text-gray-700 hover:text-blue-500 text-lg">
              Read MarkDown
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-lg">
              Contact
            </a>
            {!auth.username ? (
              <Link
                to={"/login"}
                className="inline-block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-lg"
              >
                Login
              </Link>
            ) : (
              <div className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-lg">
                {auth.role === "admin" ? (
                  <Link to={"/admin"} className="text-white">
                    Hello {auth.username}
                  </Link>
                ) : (
                  <div className="text-white">Hello {auth.username}</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-[8] flex items-center justify-center p-4 md:p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeDefault;
