import React from "react";
import bg from "~/assets/IMG/wallpaper-win11-default.jpg";
import { Link } from "react-router-dom";
import Logo from "~/assets/IMG/logo.png";
import { useSelector } from "react-redux";

// set inteface
interface HomeDefaultPops {
  children: React.ReactNode;
}

const HomeDefault: React.FC<HomeDefaultPops> = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);
  console.log('Auth state:', auth);
 
  return (
    <div
      className="flex min-h-screen bg-cover backdrop-blur-sm justify-center items-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        backdrop-blur-sm bg-white/90 text-black flex flex-col w-[95%] h-[95%] rounded-md"
      >
        <div className="flex-[1] flex items-center justify-center">
          <div className="w-full px-6 py-4 flex items-center">
            <img className="w-24 h-24 object-contain" src={Logo} alt="" />

            <div className="flex-1 flex justify-end items-center space-x-6">
              <Link to={"/"} className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link to={"/about"} className="text-gray-700 hover:text-blue-500">
                About
              </Link>
              <Link to={"/md"} className="text-gray-700 hover:text-blue-500">
                Read MarkDown
              </Link>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
              {!auth.username ? (
                <Link
                  to={"/login"}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                >
                  Login
                </Link>
              ) : (
                <div className="ml-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
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
        </div>
        <div className="flex-[8] flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeDefault;
