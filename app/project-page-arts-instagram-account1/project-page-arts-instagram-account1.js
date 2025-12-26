import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const ProjectPageArtsInstagramAccount1 = () => {
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
        
        {/* Media Carousel */}
        <MediaCarousel mediaItems={mediaItems} buttonBgColor="#090909" />
        
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
