export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  lastLogin?: Date;
  createdAt?: Date;
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: {
    fullDescription: string;
    features: string[];
    benefits: string[];
  };
}

export interface PricingTier {
  tier: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}