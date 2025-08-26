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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={chefHero} 
          alt="Chef professionnel en cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Devenez Chef en{' '}
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
              5 Jours
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
            Formation Pratique en Cuisine & Pâtisserie
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Rejoignez une formation certifiante du <strong>1er au 5 septembre 2025</strong> à Abidjan (Cocody Bonoumin). 
            <span className="text-orange-400 font-semibold"> Places limitées !</span>
          </p>

          <Button 
            onClick={scrollToForm}
            className="btn-hero text-lg px-8 py-4 mb-8"
          >
            Je m'inscris maintenant
          </Button>

          {/* Countdown Timer */}
          <div className="slide-up">
            <p className="text-orange-300 font-semibold mb-4">Formation dans :</p>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;