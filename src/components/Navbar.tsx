import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onReservationClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onReservationClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-800">Sabor & Arte</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Início</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#menu" className="text-gray-600 hover:text-gray-900">Cardápio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contato</a>
            <button 
              onClick={onReservationClick}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Reservar Mesa
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Início</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#menu" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Cardápio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contato</a>
            <button 
              onClick={onReservationClick}
              className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Reservar Mesa
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;