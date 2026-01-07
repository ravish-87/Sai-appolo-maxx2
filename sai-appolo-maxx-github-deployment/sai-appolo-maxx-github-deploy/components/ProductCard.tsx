import React from 'react';
import { Product } from '../types';
import { CONTACT_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = `Hi, I am interested in ${product.name} (${product.category}). Please provide more details.`;
  const whatsappLink = `https://wa.me/91${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-50 group">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback if image is missing
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=No+Image';
          }}
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="block w-full">
            <Button variant="secondary" className="w-full gap-2">
              <MessageCircle size={18} />
              Inquire Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;