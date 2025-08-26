import { Users, Award, Phone, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const InfoSection = () => {
  const practicalInfos = [
    {
      icon: Users,
      title: "Places limitées",
      description: "Maximum 20 participants pour garantir un suivi personnalisé",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Public concerné",
      description: "Passionnés, étudiants, futurs chefs, amateurs et entrepreneurs culinaires",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "Certificat délivré",
      description: "Certificat de formation professionnelle reconnu à la fin du programme",
      color: "text-yellow-500"
    },
    {
      icon: Phone,
      title: "Assistance WhatsApp",
      description: "Support disponible au +225 07 17 07 48 50 pour toutes vos questions",
      color: "text-green-500"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Infos pratiques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir avant de vous inscrire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {practicalInfos.map((info, index) => (
            <Card 
              key={index} 
              className="card-warm fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4">
                <info.icon className={`w-8 h-8 ${info.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-16 text-center">
          <Card className="card-warm max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-bold mb-4 text-orange-700">
              Attention : Inscription limitée dans le temps !
            </h3>
            <p className="text-orange-600 font-medium">
              Les inscriptions se ferment le <strong>25 août 2025</strong> ou dès que les 20 places sont complètes.
              <br />
              <span className="text-sm">Ne ratez pas cette opportunité unique !</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;