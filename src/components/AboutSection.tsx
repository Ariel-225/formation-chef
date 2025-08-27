import { Calendar, MapPin, DollarSign, CheckCircle, ChefHat, Star, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const modules = [
    { name: "Introduction à la cuisine", icon: "🍳", level: "Débutant" },
    { name: "Hygiène alimentaire", icon: "🧼", level: "Essentiel" },
    { name: "Techniques de cuisson", icon: "🔥", level: "Intermédiaire" },
    { name: "Techniques de découpe", icon: "🔪", level: "Avancé" },
    { name: "Initiation à la pâtisserie", icon: "🧁", level: "Spécialisé" }
  ];

  const eventDetails = [
    {
      icon: Calendar,
      title: "Dates",
      description: "Du 1er au 5 septembre 2025",
      color: "text-orange-500"
    },
    {
      icon: MapPin,
      title: "Lieu", 
      description: "Atelier Ivoirien de Cuisine, Cocody Bonoumin – Abidjan",
      color: "text-blue-500"
    },
    {
      icon: DollarSign,
      title: "Prix",
      description: "70 000 FCFA seulement",
      color: "text-green-500"
    }
  ];

  return (
    <section className="section-spacing bg-[var(--gradient-warm)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            À propos de l'événement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une formation intensive et pratique pour maîtriser les bases de la cuisine et de la pâtisserie professionnelle
          </p>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventDetails.map((detail, index) => (
            <Card key={index} className="card-warm text-center fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <detail.icon className={`w-12 h-12 mx-auto mb-4 ${detail.color}`} />
              <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
              <p className="text-muted-foreground">{detail.description}</p>
            </Card>
          ))}
        </div>

        {/* Modules */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            Modules de formation inclus
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 card-warm slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium">{module.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;