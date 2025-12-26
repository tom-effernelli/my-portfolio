import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const ProjectPageArtsInstagramAccount2 = () => {
  // Données des médias
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
        
        {/* Media Carousel */}
        <MediaCarousel mediaItems={mediaItems} buttonBgColor="#090909" />
        
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
