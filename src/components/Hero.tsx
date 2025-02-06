import React from 'react';

interface HeroProps {
  onReservationClick: () => void;
  onMenuClick: () => void;
}

/**
 * Componente Hero
 * Seção principal do site com imagem de fundo e chamadas para ação
 * 
 * Props:
 * @param {function} onReservationClick - Handler para abrir o modal de reservas
 * @param {function} onMenuClick - Handler para abrir o modal do cardápio
 */
const Hero: React.FC<HeroProps> = ({ onReservationClick, onMenuClick }) => {
  return (
    <section id="home" className="relative h-screen">
      {/* Container da imagem de fundo com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Overlay escuro para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Conteúdo central */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Título e subtítulo */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sabor & Arte</h1>
          <p className="text-xl md:text-2xl mb-8">Experimente o melhor da culinária contemporânea</p>
          
          {/* Botões de ação */}
          <div className="space-x-4">
            <button 
              onClick={onReservationClick}
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600"
            >
              Reservar Mesa
            </button>
            <button 
              onClick={onMenuClick}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900"
            >
              Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;