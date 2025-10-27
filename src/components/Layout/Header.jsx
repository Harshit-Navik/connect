import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              HealthConnect
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-md"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;