import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MyAVT from '~/assets/IMG/myavt.jpg';
const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column - Profile Card */}
        <div className="w-full md:w-1/3 bg-cyan-500 rounded-lg p-8 text-center text-white">
          <div className="mb-6">
            <img
              src={MyAVT} // Replace with your image path
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">HELLO, I'M</h2>
          <h1 className="text-3xl font-bold mb-4">Nguyen Van An</h1>
          <p className="text-sm mb-6">
           I am a software engineer with a passion for building web applications.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Column - About Me Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <span className="block mb-4 text-lg font-medium">
                I am a technology enthusiast constantly seeking to expand my knowledge of new applications, with an endless passion for information technology.
              </span>

              <span className="block mb-4 text-base">
                A tech lover who's always learning new applications with boundless IT passion.
              </span>

              <span className="block italic">
                With an insatiable curiosity for technology, I thrive on learning new applications and my passion for IT knows no bounds.
              </span>
            </p>
            
            <button className="inline-block bg-white text-cyan-500 px-6 py-2 rounded-full 
              border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white 
              transition-colors duration-300 font-medium">
              CONTACT ME
            </button>
            
            <div className="mt-4 text-sm text-gray-500">
              Image from <a href="https://www.freepik.com" className="text-cyan-500 hover:underline">Freepik</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
