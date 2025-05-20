import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    // sử dụnng tailwin cấu hình đẹp
    <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-600">Go to Home</Link>
    </div>
  );
};

export default NotFound;


