import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed
import { Button } from "../../../components/ui/button.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white border-b sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-sm shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Lotus E-School
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/skills" className="hover:text-blue-600">Skills</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/pricing" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex gap-2">
          <Link to="/login">
            <Button size="sm" variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t">
          <Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/skills" className="block" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/courses" className="block" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/pricing" className="block" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="block" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/login">
              <Button size="sm" variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
