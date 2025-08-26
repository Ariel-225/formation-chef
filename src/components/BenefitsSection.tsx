import { Award, Users, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Certification reconnue",
      description: "Obtenez un certificat officiel qui valorise vos compétences culinaires",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Formation 100% pratique",
      description: "Apprenez en cuisinant réellement, pas seulement en théorie",
      color: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "Encadrement professionnel",
      description: "Bénéficiez de l'expertise de chefs expérimentés et passionnés",
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Ambiance conviviale",
      description: "Rejoignez un réseau de passionnés dans une atmosphère chaleureuse",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      title: "Opportunités de carrière",
      description: "Lancez votre carrière culinaire ou créez votre propre business",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Pourquoi participer ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez tous les avantages de cette formation unique qui transformera votre passion en expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="card-warm text-center hover:scale-105 transition-transform duration-300 fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <benefit.icon className={`w-16 h-16 mx-auto mb-6 ${benefit.color}`} />
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;