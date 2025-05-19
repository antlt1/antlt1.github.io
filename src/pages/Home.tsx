import React from 'react';
import bg from '~/assets/IMG/wallpaper-win11-default.jpg'
import { Link } from 'react-router-dom';
import Logo from '~/assets/IMG/logo.png'

const Home: React.FC = () => {
  return (
    <div
      className="flex min-h-screen bg-cover backdrop-blur-sm justify-center items-center relative"
      style={{ backgroundImage: `url(${bg})` }} >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      backdrop-blur-sm bg-white/90 text-black flex flex-col w-[95%] h-[95%] rounded-md" >
        <div className="box-header flex-[1] flex items-center justify-center">
          {/* header */}
          <div className="w-full px-6 py-4 flex items-center">
            {/* <!-- Logo --> */}
              <img className="w-24 h-24 object-contain" src={Logo} alt="" />
            {/* <div className="w-1/2">
            </div> */}

            {/* <!-- Navigation --> */}
            <div className="flex-1 flex justify-end items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
              <Link to={'/md'} className="text-gray-700 hover:text-blue-500">Read MarkDown</Link>
              <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>

              {/* <!-- Login button --> */}
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
                Login
              </button>
            </div>
          </div>

        </div>
        <div className="body flex-[8] flex items-center justify-center">
          <h1>this is content 2</h1>
        </div>
      </div>
    </div>

  );
};

export default Home;
