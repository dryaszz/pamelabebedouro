import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="tratamentos" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-4">Procedimentos Oferecidos</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Tecnologia e conhecimento técnico para oferecer o melhor tratamento para o seu caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};