import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">
          NGO Website
        </Link>

        {/* Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition duration-300">About Us</Link>
          <Link to="/volunteer" className="hover:text-green-400 transition duration-300">Volunteer</Link>
          <Link to="/donate" className="hover:text-green-400 transition duration-300">Donate</Link>
          <Link to="/contact" className="hover:text-green-400 transition duration-300">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-green-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-green-400">About Us</Link>
          <Link to="/volunteer" onClick={() => setIsOpen(false)} className="block hover:text-green-400">Volunteer</Link>
          <Link to="/donate" onClick={() => setIsOpen(false)} className="block hover:text-green-400">Donate</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-green-400">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;