import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import chefHero from '@/assets/chef-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('inscription');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={chefHero} 
          alt="Chef professionnel en action"
          className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-orange-900/30 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
        </div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium backdrop-blur-sm">
            ✨ Formation Elite • Places Limitées
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
          <span className="block mb-2 text-white drop-shadow-2xl animate-slide-up">Maîtrisez l'Art</span>
          <span className="block mb-2 text-white drop-shadow-2xl animate-slide-up [animation-delay:0.2s]">de la</span>
          <span className="text-gradient block text-6xl md:text-8xl lg:text-9xl animate-slide-up [animation-delay:0.4s] drop-shadow-2xl">
            Cuisine Pro
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto opacity-95 font-light leading-relaxed animate-fade-in [animation-delay:0.6s]">
          <span className="font-semibold text-orange-300">5 jours intensifs</span> qui transformeront votre passion 
          <br className="hidden md:block" />
          en <span className="font-semibold text-orange-300">expertise culinaire professionnelle</span>
        </p>

        {/* Enhanced info cards */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in [animation-delay:0.8s]">
          <div className="p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">📅</div>
            <p className="text-orange-300 text-sm font-medium uppercase tracking-wider">Dates</p>
            <p className="font-bold text-xl">26-30 Août 2025</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">📍</div>
            <p className="text-orange-300 text-sm font-medium uppercase tracking-wider">Lieu</p>
            <p className="font-bold text-xl">Dakar, Sénégal</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-orange-300 text-sm font-medium uppercase tracking-wider">Prix</p>
            <p className="font-bold text-xl">125 000 FCFA</p>
          </div>
        </div>

        <div className="animate-fade-in [animation-delay:1s]">
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 border-2 border-orange-400/20"
          >
            🚀 Je m'inscris maintenant
          </Button>
          <p className="mt-4 text-sm text-orange-300 animate-pulse">
            ⚡ Réservez votre place en 2 minutes
          </p>
        </div>

        <div className="mt-16 animate-fade-in [animation-delay:1.2s]">
          <CountdownTimer />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-8 h-12 border-2 border-orange-400 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs mt-2 text-orange-300">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;