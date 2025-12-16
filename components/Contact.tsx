import React from 'react';
import { EXPERT_DATA } from '../constants';
import { MapPin, Phone, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <footer id="contato" className="bg-white pt-20 pb-10 border-t border-stone-200">
      
      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">
          Cuide do seu sorriso e da sua estética com quem entende.
        </h2>
        <div className="flex justify-center">
            <Button 
                href={EXPERT_DATA.whatsappLink} 
                className="w-full md:w-auto text-lg px-8 py-5 shadow-emerald-200"
                icon={<ArrowRight />}
            >
                Falar com a Dra. Pamela no WhatsApp
            </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Endereço</h4>
                  <p className="text-stone-600">{EXPERT_DATA.address.full}</p>
                  <a 
                    href={EXPERT_DATA.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-emerald-600 font-medium hover:underline"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                  <Mail size={24} />
                </div>
                <div>
                    <h4 className="font-semibold text-stone-900">E-mail</h4>
                    <a href={`mailto:${EXPERT_DATA.email}`} className="text-stone-600 hover:text-emerald-600">{EXPERT_DATA.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                  <Instagram size={24} />
                </div>
                <div>
                    <h4 className="font-semibold text-stone-900">Instagram</h4>
                    <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-emerald-600">@drapamelalimaa</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-80 bg-stone-200 rounded-2xl overflow-hidden shadow-inner border border-stone-300 relative group">
            {/* Simple static placeholder map representation since we can't embed a real interactive google map without an API key effectively in this context, 
                so we use a clickable image or div that links to the map. The prompt asked for "Button Open in Google Maps", which we did above, 
                but a visual map box adds polish. */}
            <a 
                href={EXPERT_DATA.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
            >
                <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=-20.9496,-48.4795&zoom=15&size=600x300&maptype=roadmap&markers=color:green%7Clabel:P%7C-20.9496,-48.4795&key=YOUR_API_KEY" 
                    alt="Mapa do Consultório" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                    onError={(e) => {
                        // Fallback if static map fails (no API key)
                        (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png';
                        (e.target as HTMLImageElement).style.objectFit = 'contain';
                        (e.target as HTMLImageElement).style.padding = '40px';
                        (e.target as HTMLImageElement).style.backgroundColor = '#f5f5f4';
                    }}
                />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur text-stone-800 px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2 group-hover:scale-105 transition-transform">
                        <MapPin size={18} className="text-emerald-600"/> Ver no Mapa
                    </span>
                </div>
            </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-100 text-center">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} {EXPERT_DATA.name} - CROSP {EXPERT_DATA.crosp}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};