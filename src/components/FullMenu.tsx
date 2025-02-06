import React from 'react';
import { X } from 'lucide-react';

interface FullMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Dados do cardápio completo
 * Organizado por categorias, cada item contém nome, descrição e preço
 */
const menuCategories = [
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
      },
      {
        name: "Burrata",
        description: "Burrata cremosa, tomates confitados, pesto de manjericão e pão rústico",
        price: "R$ 72"
      }
    ]
  },
  // ... outras categorias do menu
];

/**
 * Modal do Cardápio Completo
 * Exibe todas as categorias e itens do cardápio do restaurante
 * 
 * Props:
 * @param {boolean} isOpen - Controla a visibilidade do modal
 * @param {function} onClose - Função para fechar o modal
 */
const FullMenu: React.FC<FullMenuProps> = ({ isOpen, onClose }) => {
  // Não renderiza nada se o modal estiver fechado
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho do modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Cardápio Completo</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Lista de categorias e itens */}
        <div className="space-y-8">
          {menuCategories.map((category, index) => (
            <div key={index}>
              {/* Título da categoria */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-orange-500 pb-2">
                {category.category}
              </h3>
              {/* Grid de itens */}
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
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
      </div>
    </div>
  );
};

export default FullMenu;