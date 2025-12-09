import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyStore</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}