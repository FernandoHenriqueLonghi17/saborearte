import React from 'react';

interface MenuSectionProps {
  onViewFullMenu: () => void;
}

const menuItems = [
  {
    category: "Entradas",
    items: [
      {
        name: "Arancini de Trufa",
        description: "Bolinhos crocantes de risoto com cogumelos selvagens e azeite trufado",
        price: "R$ 78"
      },
      {
        name: "Tartare de Atum",
        description: "Atum fresco, abacate, gergelim e aioli de wasabi",
        price: "R$ 89"
      }
    ]
  },
  {
    category: "Pratos Principais",
    items: [
      {
        name: "Ribeye Wagyu",
        description: "Wagyu japonês A5, legumes da estação, molho de vinho tinto",
        price: "R$ 320"
      },
      {
        name: "Linguine com Lagosta",
        description: "Lagosta fresca, tomates cereja, pimenta e alho",
        price: "R$ 235"
      }
    ]
  }
];

const MenuSection: React.FC<MenuSectionProps> = ({ onViewFullMenu }) => {
  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{section.category}</h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-medium text-gray-900">{item.name}</h4>
                      <span className="text-orange-500 font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onViewFullMenu}
            className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600"
          >
            Ver Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;