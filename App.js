import React, { useState } from 'react';
import { AmazingCard } from './components/ui/amazing-card';
import GradientMenu from './components/ui/gradient-menu';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { MessageCircle, Instagram, Ruler, Clock, Heart } from 'lucide-react';

export default function App() {
  // Estado para facilitar a edição futura pelo "ADM"
  const [featuredImage, setFeaturedImage] = useState("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80");

  return (
    <div className="min-h-screen pb-24 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={featuredImage} 
          alt="Destaque da Semana" 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 drop-shadow-md">
            Me Veste Deda
          </h1>
          <p className="text-white text-lg md:text-xl italic bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
            “Costura sob medida feita com carinho 💜”
          </p>
        </div>
      </header>

      {/* --- CATÁLOGO --- */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="catalogo">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl font-bold">Catálogo</h2>
          <span className="text-sm uppercase tracking-widest text-fashion-accent">Exclusivo</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AmazingCard 
            image="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
            title="Vestido Verão Floral"
            description="Leveza e elegância em cada costura."
            price="Sob Encomenda"
            badge="Personalizável"
          />
          <AmazingCard 
            image="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
            title="Calça Alfaiataria"
            description="Ajuste perfeito para o dia a dia."
            price="A partir de R$ 120"
            badgeColor="exclusive"
            badge="Clássico"
          />
          <AmazingCard 
            image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
            title="Ajustes e Reformas"
            description="Dê vida nova às suas roupas favoritas."
            price="Consultar"
            badgeColor="new"
            badge="Serviço"
          />
        </div>
      </section>

      {/* --- STORYTELLING & PROCESSO --- */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="mx-auto text-fashion-accent mb-4" size={40} />
          <h2 className="font-serif text-3xl mb-6">Nossa História</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Minha mãe, a Deda, costura há anos. O nome veio de um jeito carinhoso como minha irmã Bruna a chamava quando era pequena. 
            Hoje, transformamos esse carinho em cada ponto e cada corte, levando o feito à mão para o mundo digital.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-fashion-beige rounded-2xl">
              <Ruler className="mx-auto mb-4 text-fashion-charcoal" />
              <h4 className="font-bold mb-2">Sob Medida</h4>
              <p className="text-sm text-gray-500">Tiramos suas medidas para um caimento impecável.</p>
            </div>
            <div className="p-6 border border-fashion-beige rounded-2xl">
              <Clock className="mx-auto mb-4 text-fashion-charcoal" />
              <h4 className="font-bold mb-2">Prazos</h4>
              <p className="text-sm text-gray-500">Produção artesanal em até 10 dias úteis.</p>
            </div>
            <div className="p-6 border border-fashion-beige rounded-2xl">
              <MessageCircle className="mx-auto mb-4 text-fashion-charcoal" />
              <h4 className="font-bold mb-2">WhatsApp</h4>
              <p className="text-sm text-gray-500">Atendimento direto para tirar dúvidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULÁRIO DE PEDIDO/FEEDBACK --- */}
      <section className="max-w-xl mx-auto py-16 px-6">
        <h3 className="font-serif text-2xl mb-6 text-center">Fazer um Pedido</h3>
        <div className="space-y-4">
          <div>
            <Label>Descreva sua ideia</Label>
            <Textarea placeholder="Ex: Preciso de um vestido para formatura nas cores azul..." />
          </div>
          <button className="w-full bg-fashion-charcoal text-white py-4 rounded-xl font-bold hover:bg-black transition">
            Enviar via WhatsApp
          </button>
        </div>
      </section>

      {/* --- FOOTER / MENU MOBILE --- */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-2xl overflow-hidden border border-white/20">
            <GradientMenu />
        </div>
      </div>
    </div>
  );
}
