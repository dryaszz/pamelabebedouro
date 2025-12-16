import React from 'react';
import { BENEFITS } from '../constants';
import { Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-stone-800/50 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Diferenciais</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Por que escolher a <br/>
              <span className="text-emerald-500">Dra. Pamela Lima?</span>
            </h2>
            <p className="text-stone-300 text-lg mb-8">
              Acreditamos que um sorriso saudável e uma face harmônica são fundamentais para o bem-estar. Nossa abordagem une técnica, tecnologia e carinho.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <Check size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
              {/* Decorative Image/Box */}
              <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Protocolo de Atendimento</h3>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-4 p-4 bg-stone-700/50 rounded-lg">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold">1</span>
                          <span className="text-stone-200">Avaliação detalhada e escuta ativa</span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-stone-700/50 rounded-lg">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold">2</span>
                          <span className="text-stone-200">Planejamento personalizado do tratamento</span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-stone-700/50 rounded-lg">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold">3</span>
                          <span className="text-stone-200">Execução segura e confortável</span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-stone-700/50 rounded-lg">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold">4</span>
                          <span className="text-stone-200">Acompanhamento pós-procedimento</span>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};