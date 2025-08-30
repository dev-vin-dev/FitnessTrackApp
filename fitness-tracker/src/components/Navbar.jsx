import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">Fitness Tracker</h1>
      <ul className="flex gap-6 font-medium">
        <li>
          <Link to="/" className="hover:text-green-600">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
