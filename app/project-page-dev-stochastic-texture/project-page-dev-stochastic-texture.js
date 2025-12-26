"use client";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import Image from "next/image";
import { useState } from "react";

const ProjectPageDevStochasticTexture = () => {
  // État pour le carrousel d'images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Données des couples texture originale / image générée
  // À remplacer par les vraies URLs des images
  const texturePairs = [
    {
      original: 'URL_TEXTURE_ORIGINALE_1',
      generated: 'URL_IMAGE_GENERE_1',
      altOriginal: 'Original texture 1',
      altGenerated: 'Generated image 1'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_2',
      generated: 'URL_IMAGE_GENERE_2',
      altOriginal: 'Original texture 2',
      altGenerated: 'Generated image 2'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_3',
      generated: 'URL_IMAGE_GENERE_3',
      altOriginal: 'Original texture 3',
      altGenerated: 'Generated image 3'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_4',
      generated: 'URL_IMAGE_GENERE_4',
      altOriginal: 'Original texture 4',
      altGenerated: 'Generated image 4'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_5',
      generated: 'URL_IMAGE_GENERE_5',
      altOriginal: 'Original texture 5',
      altGenerated: 'Generated image 5'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_6',
      generated: 'URL_IMAGE_GENERE_6',
      altOriginal: 'Original texture 6',
      altGenerated: 'Generated image 6'
    },
    {
      original: 'URL_TEXTURE_ORIGINALE_7',
      generated: 'URL_IMAGE_GENERE_7',
      altOriginal: 'Original texture 7',
      altGenerated: 'Generated image 7'
    },
  ];

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
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[120px] xs:gap-[100px] bg-[url('/Dev@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[45px] text-[#fff] md:box-border">
        <PageHeader currentPage="dev" borderColor="#fff" isProjectPage={true} />
        <div className="self-stretch flex flex-col items-end gap-32 xs:gap-[60px] text-[25px] font-courier">
          <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[14px] sm:text-[9px] xs:text-[7px]">
            <p className="m-0 whitespace-pre-wrap">{`████████ ███████ ██   ██ ████████ ██    ██ ██████  ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██       ██ ██     ██    ██    ██ ██   ██ ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    █████     ███      ██    ██    ██ ██████  █████   `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██       ██ ██     ██    ██    ██ ██   ██ ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ███████ ██   ██    ██     ██████  ██   ██ ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{` ██████  ███████ ███    ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██       ██      ████   ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ███ █████   ██ ██  ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██    ██ ██      ██  ██ ██                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{` ██████  ███████ ██   ████                                 `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                           `}</p>
          </div>
          
          {/* Carrousel d'images texture originale / image générée */}
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
                  {/* Labels */}
                  <div className="flex flex-row xs:flex-col gap-4 justify-center items-center">
                    <div className="flex-1 text-center text-white text-sm font-courier xs:text-xs">
                      Original Texture
                    </div>
                    <div className="flex-1 text-center text-white text-sm font-courier xs:text-xs">
                      Generated Image
                    </div>
                  </div>
                  
                  {/* Images côte à côte sur desktop, empilées sur mobile */}
                  <div className="flex flex-row xs:flex-col gap-4 items-stretch">
                    <div className="flex-1 relative min-h-[300px] xs:min-h-[200px]">
                      <Image
                        className="w-full h-full object-contain"
                        src={currentPair.original}
                        alt={currentPair.altOriginal}
                        width={600}
                        height={400}
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                    <div className="flex-1 relative min-h-[300px] xs:min-h-[200px]">
                      <Image
                        className="w-full h-full object-contain"
                        src={currentPair.generated}
                        alt={currentPair.altGenerated}
                        width={600}
                        height={400}
                        sizes="(max-width: 600px) 100vw, 600px"
                      />
                    </div>
                  </div>
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
          
          <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
            <p className="m-0">
              This project implements a stochastic texture generator that can tile
              a given texture sample across arbitrarily large 3D surfaces without
              any visible repetition patterns. The implementation is based on the
              research paper &quot;Procedural Stochastic Textures by Tiling and
              Blending&quot; by Thomas Deliot and Eric Heitz, which introduces
              techniques for generating seamless, non-repetitive textures through
              histogram-preserving blending and stochastic tiling.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The core challenge addressed by this project is the problem of
              texture repetition artifacts that occur when tiling a small texture
              sample across large surfaces. Traditional tiling methods create
              visible seams and repeating patterns that break immersion in 3D
              environments. The stochastic texturing approach solves this by
              using histogram-preserving blending operations that maintain the
              statistical properties of the original texture while creating
              seamless transitions between tiles.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The implementation involves analyzing the input texture sample,
              generating multiple tile variations, and applying blending
              techniques that preserve the histogram distribution of pixel
              values. This ensures that the synthesized texture maintains the
              visual characteristics of the original sample while eliminating
              repetition artifacts. The algorithm can generate textures of
              arbitrary size, making it particularly useful for texturing large
              3D models and environments in computer graphics applications.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This implementation is written in Python, providing a clear and
              accessible codebase for understanding the algorithm. However, the
              original reference implementation by the authors is in C++, which
              offers approximately 70 times better performance. This performance
              advantage makes C++ implementations significantly more suitable
              for real-time texture generation in production graphics
              applications, where computational efficiency is critical.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              There are several areas where this implementation could be
              improved. Currently, each color channel (RGB) is processed
              independently during the histogram-preserving blending operations.
              While this approach simplifies the implementation, it breaks the
              correlations between color channels that exist in the original
              texture sample. This can result in subtle color artifacts in the
              final generated texture. A more sophisticated approach would
              process the color channels jointly, preserving these inter-channel
              correlations.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Additionally, working with compressed texture formats (such as
              DXT/BC formats commonly used in game engines) introduces
              additional challenges. These formats use block-based compression
              schemes that can interfere with the histogram-preserving blending
              operations, potentially introducing visual artifacts or requiring
              specialized handling to maintain quality. The original paper
              discusses modifications to the algorithm to accommodate these
              compressed formats, which would be a valuable extension to this
              implementation.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This project demonstrates my interest in advanced computer graphics
              techniques and my ability to implement research papers into
              practical applications. The work required understanding complex
              mathematical concepts related to texture synthesis, histogram
              preservation, and stochastic sampling methods.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {`→ Check the repo `}
              <a
                href="https://github.com/tom-effernelli/stochastic-texture-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                here
              </a>
              .
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Reference: Deliot, T., &amp; Heitz, E. Procedural Stochastic
              Textures by Tiling and Blending.{" "}
              <em>GPU Zen 2</em>.{" "}
              <a
                href="https://eheitzresearch.wordpress.com/738-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                Link to paper
              </a>
              .
            </p>
          </b>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageDevStochasticTexture;

