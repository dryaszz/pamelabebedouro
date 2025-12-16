import React from 'react';
import { EXPERT_DATA } from '../constants';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={EXPERT_DATA.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-white text-stone-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Agende agora
      </span>
    </a>
  );
};