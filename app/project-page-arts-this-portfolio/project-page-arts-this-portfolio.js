import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";
import MediaCarousel from "../../components/media-carousel";

const ProjectPageArtsThisPortfolio = () => {
  // Données des médias
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
        
        {/* Media Carousel */}
        <MediaCarousel mediaItems={mediaItems} buttonBgColor="#090909" />
        
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
