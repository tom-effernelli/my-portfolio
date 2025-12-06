"use client";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import { useState } from "react";

const ProjectPageArtsInstagramAccount2 = () => {
  // État pour le media slider
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Données des médias (à remplacer par les vrais médias)
  const mediaItems = [
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330604/Capture_d_%C3%A9cran_2025-09-06_115019_v0wct7.png',
      alt: 'Post Instagram 1 - Compte Instagram 2'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330606/Capture_d_%C3%A9cran_2025-09-06_115048_qjgviq.png',
      alt: 'Post Instagram 2 - Compte Instagram 2'
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
          <p className="m-0">ACCOUNT - 2</p>
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
            This Instagram account was one I designed for my engineering school
            (Télécom Paris) during my time on the student board. In France,
            students must pass competitive exams to enter top-tier engineering
            schools. After the exams, they choose which school to attend among
            those that accepted them. To help candidates make their decision,
            schools are allowed to run various communication campaigns such as
            campus visits, flyers, emails… This Instagram account was part of
            that effort.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            For this project, I used Adobe Photoshop to create, organize, and
            assemble the different elements of the design.
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3] xs:hidden" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsInstagramAccount2;
