import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Facebook } from 'lucide-react';

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/2250717074850?text=Bonjour%2C+je+viens+du+site+et+je+veux+m%E2%80%99inscrire+%C3%A0+la+formation+Cuisine+et+P%C3%A2tisserie.";

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Contactez-nous rapidement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant ou posez vos questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Contact */}
          <Card className="card-warm text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h3 className="text-xl font-semibold mb-4">Inscription via WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous directement pour une inscription rapide et personnalisée
            </p>
            <Button 
              className="btn-whatsapp w-full"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              📲 Je m'inscris via WhatsApp
            </Button>
          </Card>

          {/* Facebook Contact */}
          <Card className="card-warm text-center">
            <Facebook className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h3 className="text-xl font-semibold mb-4">Suivez l'événement</h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez notre communauté Facebook pour les dernières actualités
            </p>
            <Button 
              variant="outline" 
              className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
              onClick={() => window.open('#', '_blank')}
            >
              Voir sur Facebook
            </Button>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <Card className="card-warm inline-block">
            <p className="text-lg font-semibold mb-2">Assistance téléphonique</p>
            <p className="text-2xl font-bold text-gradient">+225 07 17 07 48 50</p>
            <p className="text-sm text-muted-foreground mt-2">Disponible du lundi au vendredi, 8h-18h</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;