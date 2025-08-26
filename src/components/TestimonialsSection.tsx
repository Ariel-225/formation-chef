import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fatou B.",
      role: "Ancienne participante",
      content: "J'ai appris en 5 jours ce que je n'aurais pas trouvé seul en plusieurs mois. Expérience incroyable !",
      rating: 5,
      avatar: "👩🏾‍🍳"
    },
    {
      name: "Jean K.",
      role: "Chef entrepreneur",
      content: "Formation pratique et conviviale, je recommande vivement ! J'ai maintenant ma propre entreprise de catering.",
      rating: 5,
      avatar: "👨🏿‍🍳"
    },
    {
      name: "Aïcha M.",
      role: "Étudiante",
      content: "Les formateurs sont exceptionnels et l'ambiance est parfaite pour apprendre. Je me sens maintenant prête à travailler en cuisine !",
      rating: 5,
      avatar: "👩🏽‍🍳"
    }
  ];

  return (
    <section className="section-spacing bg-[var(--gradient-warm)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Témoignages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que disent nos anciens participants de leur expérience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-warm fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;