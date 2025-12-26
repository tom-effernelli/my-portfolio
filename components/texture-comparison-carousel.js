"use client";
import Image from "next/image";
import { useState } from "react";

const TextureComparisonCarousel = ({ texturePairs }) => {
  // État pour le carrousel d'images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? texturePairs.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === texturePairs.length - 1 ? 0 : prev + 1
    );
  };

  const currentPair = texturePairs[currentImageIndex];

  return (
    <div className="self-stretch w-full relative flex items-center justify-center my-8">
      {/* Bouton flèche gauche */}
      <button 
        className="absolute left-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 bg-[#050505] border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#050505] transition-colors duration-200"
        onClick={goToPrevious}
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      
      {/* Container des images côte à côte */}
      <div className="w-full max-w-[1200px] mx-auto px-20 lg:px-20 md:px-16 sm:px-12 xs:px-10">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-[#050505] p-4">
          <div className="flex flex-col gap-4">
            {/* Container principal avec ratio 1:2 */}
            <div className="flex flex-row xs:flex-col gap-4 items-center w-full">
              {/* Colonne texture originale - 1/3 de l'espace */}
              <div className="flex flex-col gap-2 flex-[0_0_33.333%] xs:flex-[1_1_100%] items-center">
                {/* Label centré sur l'image */}
                <div className="text-center text-white text-sm font-courier xs:text-xs w-full">
                  Original Texture
                </div>
                {/* Texture originale - carrée, centrée */}
                <div className="flex justify-center items-center w-full">
                  <div className="relative w-full max-w-full aspect-square">
                    <Image
                      className="w-full h-full object-contain"
                      src={currentPair.original}
                      alt={currentPair.altOriginal}
                      width={400}
                      height={400}
                      sizes="(max-width: 400px) 33vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              
              {/* Colonne image générée - 2/3 de l'espace */}
              <div className="flex flex-col gap-2 flex-[0_0_66.666%] xs:flex-[1_1_100%] items-center">
                {/* Label centré sur l'image */}
                <div className="text-center text-white text-sm font-courier xs:text-xs w-full">
                  Generated Image
                </div>
                {/* Image générée - 2x plus grande */}
                <div className="relative w-full flex items-center justify-center min-h-[300px] xs:min-h-[200px]">
                  <Image
                    className="w-full h-auto max-w-full object-contain"
                    src={currentPair.generated}
                    alt={currentPair.altGenerated}
                    width={800}
                    height={800}
                    sizes="(max-width: 800px) 66vw, 66vw"
                  />
                </div>
              </div>
            </div>
            
            {/* Note pour les 3 derniers items (indices 4, 5, 6) */}
            {currentImageIndex >= 4 && (
              <div className="w-full mt-4 px-4">
                <p className="text-white text-xs font-courier text-center leading-relaxed opacity-80">
                  Note: This example demonstrates a limitation of the algorithm. The input texture contains strong geometric patterns (lines/grids), which the algorithm struggles to preserve. The method relies on global statistical properties rather than local spatial structure, and the hexagonal tiling with barycentric interpolation can introduce artifacts that break the geometric alignment of structured patterns.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Bouton flèche droite */}
      <button 
        className="absolute right-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 bg-[#050505] border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#050505] transition-colors duration-200"
        onClick={goToNext}
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>
    </div>
  );
};

export default TextureComparisonCarousel;

