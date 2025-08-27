import { Award, Users, Briefcase, Heart, TrendingUp, Sparkles, Zap, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Certification Officielle",
      description: "Diplôme reconnu par les professionnels du secteur culinaire",
      color: "text-yellow-500",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Users,
      title: "Formation 100% Pratique",
      description: "Cuisinez réellement avec des ingrédients premium et des équipements professionnels",
      color: "text-blue-500",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Crown,
      title: "Encadrement VIP",
      description: "Chefs étoilés et experts reconnus vous accompagnent personnellement",
      color: "text-purple-500",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Expérience Premium",
      description: "Atmosphère exclusive avec networking et événements privés",
      color: "text-pink-500",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: Zap,
      title: "Succès Garanti",
      description: "Lancez votre carrière ou business culinaire avec un accompagnement sur-mesure",
      color: "text-green-500",
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-bold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Avantages Exclusifs
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white">
            Pourquoi Cette Formation 
            <span className="block text-gradient text-5xl md:text-7xl lg:text-8xl">
              Change Tout ?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Une expérience <span className="font-bold text-orange-400">transformatrice</span> qui dépasse toutes vos attentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index} 
              className="group relative animate-fade-in hover:scale-110 transition-all duration-500 transform hover:-translate-y-4"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-base">
                  {benefit.description}
                </p>
                
                {/* Bottom accent */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in [animation-delay:1s]">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-3xl border border-orange-400/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎯 Objectif : Votre Réussite
            </h3>
            <p className="text-orange-300 text-lg max-w-2xl">
              Nous nous engageons à transformer votre passion en expertise profitable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;