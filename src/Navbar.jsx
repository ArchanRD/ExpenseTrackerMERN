import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken();
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              ExpenseTracker
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {token && (
              <>
                <Link
                  to="/view-expense"
                  className="text-gray-600 hover:text-gray-900"
                >
                  View expenses
                </Link>
                <Link
                  to="/add-expense"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Add expense
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-6 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
            {!token && (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
