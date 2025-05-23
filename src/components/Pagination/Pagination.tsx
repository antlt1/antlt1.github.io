import React from 'react';

// import { Container } from './styles';
interface PaginationProps {
    totalPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({totalPage, currentPage, onPageChange}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page {currentPage} of {totalPage}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300
            ${currentPage === 1 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Previous
        </button>
        <button 
          onClick={handleNext}
          disabled={currentPage === totalPage}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300
            ${currentPage === totalPage 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;