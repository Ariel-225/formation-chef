import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inscription reçue !",
      description: "Nous vous contacterons bientôt pour confirmer votre place.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="card-warm max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6 text-gradient">
        Réservez votre place
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nom & Prénom *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom complet"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre.email@exemple.com"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+225 XX XX XX XX XX"
            className="mt-1"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full btn-hero mt-6"
        >
          Je réserve ma place
        </Button>
      </form>
    </Card>
  );
};

export default RegistrationForm;