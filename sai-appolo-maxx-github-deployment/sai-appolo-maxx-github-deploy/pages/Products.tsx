import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import { Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse our extensive collection of high-quality motorcycle spare parts designed for superior performance.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Filter size={20} />
            <span>Filter by Category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;