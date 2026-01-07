import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide every 4 seconds (only if we have more products than items to show)
  useEffect(() => {
    if (products.length <= itemsToShow || isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, products.length, itemsToShow, isPaused]);

  const goToPrev = () => {
    if (products.length <= itemsToShow) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (products.length <= itemsToShow) return;
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Calculate which products to show
  const visibleProducts = [];
  const actualItemsToShow = Math.min(itemsToShow, products.length);

  for (let i = 0; i < actualItemsToShow; i++) {
    const index = (currentIndex + i) % products.length;
    visibleProducts.push(products[index]);
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      {products.length > itemsToShow && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Products Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {visibleProducts.map((product, index) => (
          <div
            key={product.id}
            className="transition-all duration-500 ease-in-out transform"
            style={{
              transitionProperty: 'transform, opacity',
              transitionDuration: '500ms'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {products.length > itemsToShow && (
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-orange-600' : 'bg-slate-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSlider;