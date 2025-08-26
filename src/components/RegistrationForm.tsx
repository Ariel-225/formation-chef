import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // Insert registration into Supabase
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation (duplicate email)
          toast({
            title: "Email déjà utilisé",
            description: "Cette adresse email est déjà inscrite à la formation.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscription réussie !",
          description: "Nous vous contacterons bientôt pour confirmer votre place.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Inscription en cours..." : "Je réserve ma place"}
        </Button>
      </form>
    </Card>
  );
};

export default RegistrationForm;