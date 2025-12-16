import React from 'react';
import { EXPERT_DATA } from '../constants';
import { GraduationCap, Award, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
              {EXPERT_DATA.name}
            </h2>
            <p className="text-emerald-600 font-medium text-lg mb-6">
              {EXPERT_DATA.role} | CROSP {EXPERT_DATA.crosp}
            </p>
            
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Comprometida em transformar vidas através do sorriso. Com uma abordagem multidisciplinar e humanizada, ofereço tratamentos que unem saúde, funcionalidade e estética.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Formação Sólida</h3>
                  <p className="text-stone-500 text-sm">Atualização constante nas técnicas mais modernas da odontologia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Atuação Multidisciplinar</h3>
                  <p className="text-stone-500 text-sm">Da clínica geral à harmonização, cuidado completo em um só lugar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800">Atendimento Humanizado</h3>
                  <p className="text-stone-500 text-sm">Escuta ativa e acolhimento para que você se sinta seguro e confortável.</p>
                </div>
              </div>
            </div>
          </div>

           {/* Stylized background box instead of image since we used the main image in Hero */}
           <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-emerald-50 rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-emerald-100 shadow-inner">
               <div className="text-center space-y-4">
                 <div className="inline-block p-4 bg-white rounded-full shadow-md mb-2">
                   <img src="https://img.icons8.com/ios/100/4a90e2/tooth.png" alt="Icone Dente" className="w-16 h-16 opacity-50 grayscale" />
                 </div>
                 <h3 className="text-2xl font-serif text-emerald-900 italic">"Cuidar do sorriso é cuidar da autoestima e da saúde integral."</h3>
                 <p className="text-stone-500">- Dra. Pamela Lima</p>
               </div>
               {/* Decor Elements */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-stone-200 rounded-tr-full opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};