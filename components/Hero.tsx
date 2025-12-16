import React from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';
import { Button } from './ui/Button';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[80vh] flex items-end md:items-center overflow-hidden bg-stone-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Dra. Pamela Lima" 
          className="w-full h-full object-cover object-top md:object-center"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent md:bg-gradient-to-r md:from-stone-900/80 md:via-stone-900/40 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-100 backdrop-blur-sm border border-emerald-400/30 text-xs md:text-sm font-semibold tracking-wider mb-4 uppercase">
            CROSP {EXPERT_DATA.crosp}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Seu sorriso e sua estética facial em mãos <span className="text-emerald-400">profissionais</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg font-light leading-relaxed">
            Odontologia completa e harmonização orofacial com segurança e naturalidade. Realce sua melhor versão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={EXPERT_DATA.whatsappLink} 
              variant="primary" 
              className="w-full sm:w-auto text-lg"
              icon={<MessageCircle size={20} />}
            >
              Agendar consulta pelo WhatsApp
            </Button>
            <Button 
              href="#sobre" 
              variant="outline" 
              className="w-full sm:w-auto bg-white/5 border-white text-white hover:bg-white/10 hover:text-white"
            >
              Conhecer a Dra. Pamela
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};