import React from 'react';

interface GalleryProps {
  title: string;
  description: string;
  images: string[];
  id?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ title, description, images, id }) => {
  return (
    <div id={id} className="py-12 border-b border-stone-100 last:border-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-4">
        <div>
          <h3 className="text-2xl font-bold text-stone-800">{title}</h3>
          <p className="text-emerald-600 font-medium text-sm mt-1">{description}</p>
        </div>
        <div className="hidden md:block h-1 w-32 bg-emerald-100 rounded-full mt-4 md:mt-0"></div>
      </div>
      
      {/* Scrollable Container for Mobile, Grid for Desktop */}
      <div className="relative">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pb-4 md:pb-0 px-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-0 snap-center rounded-xl overflow-hidden shadow-lg border-4 border-white bg-stone-100 aspect-[4/5] md:aspect-square relative group"
            >
               <img 
                src={img} 
                alt={`${title} resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs text-center font-medium">Resultado do Paciente</p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center gap-1 mt-2">
            {images.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-stone-300 first:bg-emerald-500"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const VisualProofSection: React.FC = ({ data }: { data: any }) => {
    return (
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8">
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Resultados Reais</h2>
                    <p className="text-stone-500 mt-2">Transformações que devolvem a autoestima e confiança.</p>
                </div>
                
                <div className="space-y-8">
                     <Gallery 
                        title="Clareamento Dental" 
                        description="Sorrisos mais brancos e iluminados." 
                        images={data.whitening}
                     />
                     <Gallery 
                        title="Preenchimento Labial" 
                        description="Volume e contorno com naturalidade." 
                        images={data.fillers}
                     />
                     <Gallery 
                        title="Botox" 
                        description="Rejuvenescimento facial e suavização de linhas." 
                        images={data.botox}
                     />
                </div>
             </div>
        </section>
    )
}