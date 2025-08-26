import { MapPin, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--chef-dark)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
              CCTH Afrique
            </h3>
            <p className="text-gray-300 mb-4">
              Centre de Certification Technique et Technologique en Hôtellerie - Afrique
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>Cocody Bonoumin, Abidjan</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+225 07 17 07 48 50</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>contact@ccth-afrique.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Atelier Ivoirien de Cuisine</span>
              </div>
            </div>
          </div>

          {/* Social & Partners */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Suivez-nous</h4>
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Événement Facebook</span>
              </a>
            </div>
            
            <div className="mt-8">
              <h5 className="text-lg font-medium mb-4">Partenaires</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>IPM Afrique</p>
                <p>FENITOURCI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CCTH Afrique. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Cabinet Agréé par l'État de la Côte d'Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;