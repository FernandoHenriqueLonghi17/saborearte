import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal de Reservas
 * Permite aos usuários fazerem reservas no restaurante
 * 
 * Props:
 * @param {boolean} isOpen - Controla a visibilidade do modal
 * @param {function} onClose - Função para fechar o modal
 * 
 * Estado:
 * - formData: Objeto contendo todos os campos do formulário
 */
const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  // Estado para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  /**
   * Manipula o envio do formulário
   * @param {React.FormEvent} e - Evento do formulário
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com backend para processar a reserva
    console.log('Dados da reserva:', formData);
    alert('Reserva realizada com sucesso! Entraremos em contato para confirmação.');
    onClose();
  };

  // Não renderiza nada se o modal estiver fechado
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho do modal */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Fazer Reserva</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Formulário de reserva */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo: Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Campo: Telefone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Campo: Data */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              id="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          {/* Campo: Horário */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Horário</label>
            <select
              id="time"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Selecione um horário</option>
              {/* Horários disponíveis para reserva */}
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
            </select>
          </div>

          {/* Campo: Número de Pessoas */}
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Número de Pessoas</label>
            <select
              id="guests"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            >
              {/* Opções de 1 a 8 pessoas */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>{num} pessoa{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          {/* Campo: Observações */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Observações</label>
            <textarea
              id="notes"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Ocasião especial, restrições alimentares, etc."
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;