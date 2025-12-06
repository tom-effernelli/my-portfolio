"use client";
import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import { useState } from "react";

const ProjectPageArtsThisPortfolio = () => {
  // État pour le media slider
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Données des médias (à remplacer par les vrais médias)
  const mediaItems = [
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330405/Capture_d_%C3%A9cran_2025-08-19_142847_dohccl.png',
      alt: 'Capture d\'écran du portfolio - Page d\'accueil'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330403/Capture_d_%C3%A9cran_2025-08-19_142824_xwtzvp.png',
      alt: 'Capture d\'écran du portfolio - Page projets'
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
        className="self-stretch h-5 max-w-full overflow-hidden shrink-0 z-[1] xs:hidden sm:hidden md:hidden"
        width={1524}
        height={20}
        sizes="100vw"
        alt=""
        src="/Separator.svg"
      />
      <div className="self-stretch flex flex-col items-start py-0 pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] gap-[47px] z-[2] text-[200px] md:box-border">
        <div className="self-stretch relative leading-[100%] font-space-grotesk font-medium lg:text-[160px] md:text-[120px] sm:text-[80px] xs:text-[60px]">
          <p className="m-0">PROJECT:</p>
          <p className="m-0">THIS</p>
          <p className="m-0">PORTFOLIO</p>
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
            This project is certainly the one I’ve learned the most from. It all
            started at the beginning of the 2025 summer vacation, when I thought
            it would be great to have a better way to showcase my work than just
            LinkedIn. Posting about the hackathons I attend is nice, but it
            doesn’t really allow me to present the development work I do, nor to
            share my design projects. At that time, I was finishing my first
            year of engineering school and wanted to learn something beyond our
            classes. A friend of mine, who was a frontend web developer, already
            had a portfolio that he showed me during the PSU GameJam we attended
            together. That’s when I decided to create mine as well.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`This project turned out to be a long one, as design was only a small part of the whole work. I'll share more about it on the `}
            <Link href="/project-page-dev-this-portfolio" className="[text-decoration:underline]">
              dev side of this project
            </Link>
            , but over the summer I learned several languages. I already knew
            the basics of web development (HTML/CSS/JS), but I completely
            relearned JavaScript, then moved on to React, Tailwind CSS, and
            Next.js.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Now, about the design part. It took me more than two weeks to define
            the overall design of this website, starting from scratch to define
            the style, navigation, accessibility, and overall efficiency of the
            interface. I worked page by page, starting with the ‘Home’ page.
            While experimenting with Figma, I came up with the idea of inserting
            some assets to give the website a blueprint-like design, leaving
            visible construction lines, measurement rules, and markers as part
            of the look. I created graphical assets such as the red wrapped arch
            pattern with Adobe Illustrator. On the ‘About’ page, I remembered a
            few tricks to create a fairly realistic chrome-like effect in
            Illustrator, applied to complex shapes. That’s what I used, and it
            sparked another idea: “What if I associated one material with each
            page?” That’s what I did for the ‘Arts’ section, where I chose glass
            - more specifically fluted glass - for its nice contrasts, repeating
            patterns, and interesting light-bending effects. I placed it against
            a black background to evoke a photography studio atmosphere.
            Photography is something I love and often integrate into my art
            creations.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            By the time I’m writing this, I haven’t finished the design yet. I
            still need to complete the ‘Dev’ and ‘Contact’ sections. I already
            have some ideas in mind, but nothing set in stone for now. It will
            be as much a surprise for you as it is for me!
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3] xs:hidden" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsThisPortfolio;
