import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Fale Conosco</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Endereço</h4>
                  <p className="text-gray-600">Rua Gourmet, 123, Bairro Gastronômico</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-orange-500 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Horário</h4>
                  <p className="text-gray-600">
                    Terça a Domingo: 17h às 23h<br />
                    Segunda: Fechado
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-500 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Telefone</h4>
                  <p className="text-gray-600">(11) 5555-1234</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-500 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">E-mail</h4>
                  <p className="text-gray-600">contato@saborarte.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;