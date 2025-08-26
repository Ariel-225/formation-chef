import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RegistrationSection from '@/components/RegistrationSection';
import ContactSection from '@/components/ContactSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <RegistrationSection />
      <ContactSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
