import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FullMenu from './components/FullMenu';

/**
 * Componente principal da aplicação
 * Gerencia o estado global dos modais e organiza a estrutura principal do site
 * 
 * Estados:
 * - isReservationOpen: Controla a visibilidade do modal de reservas
 * - isMenuOpen: Controla a visibilidade do modal do cardápio completo
 */
function App() {
  // Estados para controle dos modais
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handlers para abrir os modais
  const handleReservation = () => {
    setIsReservationOpen(true);
  };

  const handleViewMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar fixa no topo */}
      <Navbar onReservationClick={handleReservation} />
      
      <main>
        {/* Seção principal com imagem de fundo e chamadas para ação */}
        <Hero onReservationClick={handleReservation} onMenuClick={handleViewMenu} />
        {/* Seção sobre o restaurante */}
        <About />
        {/* Preview do cardápio com botão para ver completo */}
        <MenuSection onViewFullMenu={handleViewMenu} />
        {/* Formulário de contato e informações */}
        <Contact />
      </main>

      {/* Rodapé com links e informações adicionais */}
      <Footer />
      
      {/* Modais */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
      <FullMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </div>
  );
}

export default App;