import { Card } from '@/components/ui/card';
import { Download, CheckCircle, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RegistrationTicketProps {
  registrationData: {
    name: string;
    email: string;
    phone: string;
    registrationNumber: string;
    registrationDate: string;
  };
  onDownload?: () => void;
}

const RegistrationTicket = ({ registrationData, onDownload }: RegistrationTicketProps) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Success Animation */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4 animate-bounce">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-green-600 mb-2">Inscription Confirmée !</h2>
        <p className="text-gray-600">Votre ticket de confirmation a été généré</p>
      </div>

      {/* Ticket Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 shadow-2xl">
        {/* Header with logo effect */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">🍳 TICKET DE FORMATION</h3>
            <p className="text-orange-100">Formation Intensive en Cuisine Professionnelle</p>
          </div>
        </div>

        {/* Ticket Body */}
        <div className="p-8">
          {/* Registration Number */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-lg">
              <p className="text-sm text-orange-600 font-medium">Numéro d'inscription</p>
              <p className="text-2xl font-bold text-orange-800">{registrationData.registrationNumber}</p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Participant</p>
                  <p className="font-semibold text-gray-800">{registrationData.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800">{registrationData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-semibold text-gray-800">{registrationData.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dates de formation</p>
                  <p className="font-semibold text-gray-800">26-30 Août 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lieu</p>
                  <p className="font-semibold text-gray-800">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date d'inscription</p>
                  <p className="font-semibold text-gray-800">{registrationData.registrationDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
            <h4 className="font-bold text-orange-800 mb-3">📋 Instructions importantes :</h4>
            <ul className="space-y-2 text-sm text-orange-700">
              <li>• Présentez-vous à 8h00 le premier jour avec ce ticket</li>
              <li>• Apportez un tablier et des chaussures de sécurité</li>
              <li>• Confirmation par email et WhatsApp dans les 24h</li>
              <li>• En cas de questions : contact@formation-cuisine.sn</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePrint}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              🖨️ Imprimer le ticket
            </Button>
            <Button
              onClick={onDownload}
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger PDF
            </Button>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-yellow-400"></div>
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-yellow-400"></div>
      </Card>

      {/* WhatsApp contact */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Rejoignez notre groupe WhatsApp pour les dernières informations</p>
        <Button
          onClick={() => window.open('https://wa.me/+221123456789', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          💬 Rejoindre le groupe WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default RegistrationTicket;