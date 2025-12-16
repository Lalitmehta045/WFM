import React, { useState } from 'react';

// Import local work images
import work1 from "@/assets/work-1.jpeg";
import work2 from "@/assets/work-2.jpeg";
import work3 from "@/assets/work-3.jpeg";
import work4 from "@/assets/work-4.jpeg";
import work5 from "@/assets/work-5.jpeg";
import work6 from "@/assets/work-6.jpeg";
import work7 from "@/assets/work-7.jpeg";
import work8 from "@/assets/work-8.jpeg";

const GallerySection = () => {
  // Local work images array
  const localImages = [work1, work2, work3, work4, work5, work6, work7, work8];
  
  // For infinite scroll effect
  const duplicatedImages = [...localImages, ...localImages];
  
  // State for lightbox
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Witness excellence in every project we deliver
          </p>
        </div>
        
        {/* Scrolling images container */}
        <div className="relative">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-4 md:gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedImage(index % localImages.length)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % localImages.length) + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .image-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .image-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
