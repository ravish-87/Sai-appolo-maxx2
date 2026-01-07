export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange?: string; // Optional as prices might vary
  imageUrl: string;
  isFeatured?: boolean;
}

export interface ContactInfo {
  mobile: string;
  whatsapp: string;
  email: string;
  address: string;
  facebook: string;
  youtube: string;
}

export enum ProductCategory {
  BRAKES = 'Braking System',
  ENGINE = 'Engine & Components',
  FILTERS = 'Filters & Fluids',
  ELECTRICAL = 'Electrical & Lights',
  BODY = 'Body & Suspension'
}