import { ContactInfo, Product, ProductCategory } from './types';
import { ShoppingBag, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  mobile: '8789574430',
  whatsapp: '8229068903',
  email: 'singhrr2019@gmail.com',
  address: 'Punasiya, near Durga Mandir, District Deoghar, State Jharkhand, Pin Code 814112',
  facebook: 'https://www.facebook.com/share/17iViowcJc/',
  youtube: 'https://youtube.com/@saiappolomaxx-re2wo?si=5KF3na8xb8WSYMEq'
};

// Updated to use the custom uploaded images with .png extension. 
// Please ensure these images are saved in your public/assets folder with the corresponding names.
export const PRODUCTS: Product[] = [
  {
    id: '3',
    name: 'High-Performance Brake Shoes',
    category: ProductCategory.BRAKES,
    description: 'High performance, durable, and precision engineered for safety. Triple tested for instant braking response.',
    imageUrl: '/assets/sai appolo max.jpg',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Premium Brake Cables',
    category: ProductCategory.BRAKES,
    description: 'Engineered for performance and precise braking control. Includes flexible casing, protective boot, and durable spring mechanism.',
    imageUrl: '/assets/brake-cable.png',
  },
  {
    id: '1',
    name: 'Tyre Sealant',
    category: ProductCategory.FILTERS,
    description: 'Advanced sealant technology to protect against punctures and maintain tyre pressure. Instant sealing for tubeless tyres.',
    imageUrl: '/assets/tyre-sealant.jpg',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Heavy Duty Clutch Plates',
    category: ProductCategory.ENGINE,
    description: 'Unleash performance with enhanced power transfer and optimal grip. Durable construction with race-ready quality.',
    imageUrl: '/assets/clutch-plate.png',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Ceramic Disc Pads',
    category: ProductCategory.BRAKES,
    description: 'Superior stopping power engineered for safety. High performance friction technology for all weather conditions.',
    imageUrl: '/assets/Disc pad.png',
  },
  {
    id: '6',
    name: '4T Plus Engine Oil',
    category: ProductCategory.ENGINE,
    description: 'Ultimate protection and performance. Advanced synthetic technology for smoother engine operation and longer life.',
    imageUrl: '/assets/engine-oil.png',
  },
  {
    id: '7',
    name: 'Front Fork Oil',
    category: ProductCategory.FILTERS,
    description: 'Heavy duty oil for motorcycles ensuring improved performance, durability, and a smoother ride.',
    imageUrl: '/assets/fork-oil.png',
  },
  {
    id: '8',
    name: 'LED Indicator Lights',
    category: ProductCategory.ELECTRICAL,
    description: 'Ultra-bright LED design with sleek modern aesthetics. Provides all-weather visibility to illuminate your ride.',
    imageUrl: '/assets/indicator-light.png',
  },
  {
    id: '9',
    name: 'Precision Spark Plugs',
    category: ProductCategory.ELECTRICAL,
    description: 'Precision ignition technology for maximum power and efficiency. Enhanced performance and durability.',
    imageUrl: '/assets/spark-plug.png',
  },
  {
    id: '10',
    name: 'Advanced Air Filters',
    category: ProductCategory.FILTERS,
    description: 'Advanced filtration technology designed to keep your engine running clean. Features maximum airflow with superior dust retention.',
    imageUrl: '/assets/air-filter.png',
    isFeatured: true,
  }
];

export const FEATURES = [
  {
    title: 'Wide Variety',
    description: 'From engine oils to electricals, we have it all.',
    icon: ShoppingBag,
  },
  {
    title: 'Precision Engineering',
    description: 'Parts designed for durability and performance.',
    icon: Wrench,
  },
  {
    title: 'Quality Assured',
    description: 'Triple tested products for your safety.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Service',
    description: 'Quick inquiry response and availability.',
    icon: Zap,
  },
];