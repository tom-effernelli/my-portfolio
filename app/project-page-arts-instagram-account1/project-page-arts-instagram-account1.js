"use client";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import { useState } from "react";

const ProjectPageArtsInstagramAccount1 = () => {
  // État pour le media slider
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const mediaItems = [
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342362/6_ga9hko.png',
      alt: 'Post Instagram 1 - Compte Instagram'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342361/5_o6qils.png',
      alt: 'Post Instagram 2 - Compte Instagram'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342361/4_abmo2u.png',
      alt: 'Post Instagram 3 - Compte Instagram'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342360/3_ph8zei.png',
      alt: 'Post Instagram 4 - Compte Instagram'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342360/2_qbdzhg.png',
      alt: 'Post Instagram 5 - Compte Instagram'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761342363/7_z1magy.png',
      alt: 'Post Instagram 6 - Compte Instagram'
    },
  ];

  const goToPrevious = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentMediaIndex((prev) => 
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <>
      <StickyNavigation currentPage="arts" />
      <div className="arts-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-8 px-0 pb-[85px] xs:pb-[37px] box-border gap-[47px] text-left text-[45px] text-[#fff]">
        <PageHeader currentPage="arts" borderColor="#fff" isProjectPage={true} />
      <Image
        className="self-stretch h-5 max-w-full overflow-hidden shrink-0 z-[1] xs:hidden"
        width={1524}
        height={20}
        sizes="100vw"
        alt=""
        src="/Separator.svg"
      />
      <div className="self-stretch flex flex-col items-start py-0 pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] gap-[47px] z-[2] text-[200px] md:box-border">
        <div className="self-stretch relative leading-[100%] font-space-grotesk font-medium lg:text-[160px] md:text-[120px] sm:text-[80px] xs:text-[60px]">
          <p className="m-0">PROJECT:</p>
          <p className="m-0">INSTAGRAM</p>
          <p className="m-0">ACCOUNT - 1</p>
        </div>
        
        {/* Media Slider */}
        <div className="self-stretch w-full relative flex items-center justify-center my-8">
          {/* Bouton flèche gauche */}
          <button 
            className="absolute left-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 bg-[#090909] border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#090909] transition-colors duration-200"
            onClick={goToPrevious}
            aria-label="Média précédent"
          >
            <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          {/* Container des médias */}
          <div className="w-full max-w-[1000px] mx-auto px-20 lg:px-20 md:px-16 sm:px-12 xs:px-10">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              {currentMedia.type === 'image' ? (
                <Image
                  className="w-full h-auto object-contain"
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  width={1000}
                  height={400}
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
              ) : (
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={currentMedia.src}
                    title={currentMedia.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Bouton flèche droite */}
          <button 
            className="absolute right-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 bg-[#090909] border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#090909] transition-colors duration-200"
            onClick={goToNext}
            aria-label="Média suivant"
          >
            <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
        
        <div className="self-stretch relative text-[35px] leading-[200%] font-medium lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            This Instagram account was one I designed with some friends for the
            student board campaign during my first year at Télécom Paris. We
            needed to create a strong visual identity so people would remember
            our team - and ultimately win the elections!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            The theme was Indiana Jones, we even bought adventurer's hats for
            the occasion^^.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Nothing special on the software for graphic desinging, although I
            used a bit of Photoshop we mainly used Canvas for collaboration,
            which I don’t really like because you become very limited as soon as
            you want to be a bit creative.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We put a lot of effort into community management, and it paid off:
            we won the campaign.
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3] xs:hidden" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsInstagramAccount1;
