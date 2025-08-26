import RegistrationForm from './RegistrationForm';

const RegistrationSection = () => {
  return (
    <section id="inscription" className="section-spacing bg-[var(--gradient-warm)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Inscription
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Réservez votre place dès maintenant ! Les places sont limitées et la demande est forte.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <RegistrationForm />
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-lg font-semibold text-orange-600">
            ⚠️ Places limitées - Inscriptions jusqu'au 25 août 2025
          </p>
          <p className="text-sm text-muted-foreground">
            Vous recevrez une confirmation par email et WhatsApp dans les 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;