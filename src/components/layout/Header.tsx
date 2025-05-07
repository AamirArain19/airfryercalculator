
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="section-container py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">Air<span className="text-gray-800">Fryer</span>Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium">
                Recipes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <Link to="/recipes/chicken" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Chicken</Link>
                <Link to="/recipes/vegetables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Vegetables</Link>
                <Link to="/recipes/fish" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Fish</Link>
                <Link to="/recipes/desserts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50">Desserts</Link>
              </div>
            </div>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Calculator Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Link to="/" className="text-white">Air Fryer Calculator</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-orange-600 py-2 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-orange-600 py-2 font-medium" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/recipes/chicken" className="text-gray-700 hover:text-orange-600 py-2 pl-4 text-sm" onClick={toggleMenu}>
                - Chicken Recipes
              </Link>
              <Link to="/recipes/vegetables" className="text-gray-700 hover:text-orange-600 py-2 pl-4 text-sm" onClick={toggleMenu}>
                - Vegetable Recipes
              </Link>
              <Link to="/recipes/fish" className="text-gray-700 hover:text-orange-600 py-2 pl-4 text-sm" onClick={toggleMenu}>
                - Fish Recipes
              </Link>
              <Link to="/recipes/desserts" className="text-gray-700 hover:text-orange-600 py-2 pl-4 text-sm" onClick={toggleMenu}>
                - Dessert Recipes
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 py-2 font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-600 py-2 font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-2" onClick={toggleMenu}>
                <Link to="/" className="text-white w-full text-center">Air Fryer Calculator</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
