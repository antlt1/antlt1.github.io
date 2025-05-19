import React from 'react';

// import { Container } from './styles';

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">Page 1 of 10</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Previous
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;