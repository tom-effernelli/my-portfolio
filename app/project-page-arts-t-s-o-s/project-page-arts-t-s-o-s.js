import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const ProjectPageArtsTSOS = () => {
  // Données des médias
  const mediaItems = [
    {
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330480/Capture_d_%C3%A9cran_2025-09-05_213150_kkancf.png',
      alt: 'Capture d\'écran du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330483/Environment_toh54c.png',
      alt: 'Environnement du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330481/Character_h0l6xp.png',
      alt: 'Personnage principal du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330485/Monster1_ijz0k5.png',
      alt: 'Monstre 1 du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330486/Monster2_kc4iof.png',
      alt: 'Monstre 2 du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330487/Torch_ecjdi7.png',
      alt: 'Torche du jeu T-S-O-S'
    },
    { 
      type: 'image', 
      src: 'https://res.cloudinary.com/dixdfunwk/image/upload/v1761330483/Ecran_de_titre_fond_zhz36t.png',
      alt: 'Écran de titre du jeu T-S-O-S'
    },
  ];

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
          <p className="m-0">THE SOUND</p>
          <p className="m-0">OF SILENCE</p>
        </div>
        <div className="self-stretch relative text-[75px] leading-[100%] font-space-grotesk font-medium lg:text-[50px] md:text-[40px] sm:text-3xl xs:text-[20px]">{`2ND POSITION GAMEJAM PROJECT - PARIS SORBONNE UNIVERSITE GJ `}</div>
        
        {/* Media Carousel */}
        <MediaCarousel mediaItems={mediaItems} buttonBgColor="#090909" />
        
        <div className="self-stretch relative text-[35px] leading-[200%] font-medium lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            The Sound of Silence was a project we developed with two teammates
            during the Paris Sorbonne Université GameJam, which took place over
            an entire weekend. The theme was "micro" - as in "microphone" - but
            it could also be interpreted as “microscopic” or in any other
            creative way.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We created a game called The Sound of Silence, where the player
            explores an abandoned mansion. To keep the character from losing
            their mind, you must make sounds to reassure them. The character’s
            peripheral vision represents their mental health, so as they lose
            their mind, the field of vision shrinks. But beware - the mansion is
            haunted by ghosts. Some ghosts are afraid of sound and only approach
            when you are silent, while others can’t locate you unless you make
            noise!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            I learned a lot on the graphics side, especially about working with
            tile maps, which I had never used before this GameJam. For this
            project, I mainly worked with Adobe Photoshop.
          </p>
          <p className="m-0">We finished in second place at this GameJam!</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`You can explore the dev side of this project `}
            <Link href="/project-page-dev-t-s-o-s" className="[text-decoration:underline]">
              here
            </Link>!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`And check out The Sound of Silence `}
            <a href="https://gamejam-psu-the-sound-of-silence.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>!
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3] xs:hidden" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsTSOS;
