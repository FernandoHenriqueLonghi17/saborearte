import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Chef preparando comida"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Uma Paixão pela Excelência</h3>
            <p className="text-gray-600 mb-6">
              Fundado em 2010, o Sabor & Arte tem servido uma culinária contemporânea excepcional que 
              combina sabores tradicionais com técnicas modernas. Nosso compromisso em usar os melhores 
              ingredientes locais e criar experiências gastronômicas inesquecíveis nos tornou um destino 
              querido pelos amantes da boa comida.
            </p>
            <p className="text-gray-600 mb-8">
              Sob a orientação de nossa premiada Chef Maria Santos, nossa equipe de cozinha cria 
              pratos que celebram a rica herança culinária de nossa região enquanto abraça 
              métodos inovadores de preparo e apresentação.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Saiba Mais Sobre Nós
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;