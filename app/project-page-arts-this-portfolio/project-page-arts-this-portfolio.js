import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";

const ProjectPageArtsThisPortfolio = () => {
  return (
    <>
      <div className="w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-14 px-0 pb-[85px] box-border gap-[47px] text-left text-[45px] text-[#fff]">
      <div className="self-stretch h-[382px] flex flex-col items-start py-0 pl-[74px] pr-[174px] box-border gap-[33px] z-[0] md:pr-[74px] md:box-border" id="header">
        <div className="self-stretch border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end">
          <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px]">
            TOM EFFERNELLI
          </b>
        </div>
        <div className="self-stretch h-[295px] flex flex-col items-start gap-2.5 text-[29px]">
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]"
              id="pageButton"
              href="/"
            >
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                HOME
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
              <div className="self-stretch relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Hello there!</p>
                <p className="m-0">Welcome on my personnal website.</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Open to new opportunities,</p>
                <p className="m-0">feel free to reach out!</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]"
              id="pageButton"
              href="/about"
            >
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                ABOUT
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">
                  <a href="https://www.sciencefocus.com/planet-earth/how-much-does-a-cloud-weigh" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                    Did you know
                  </a>{" "}
                  clouds weight ~1Mt?
                </p>
                <p className="m-0">Anyways, take a tour on my website!</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Honnestly, I don’t know what to put</p>
                <p className="m-0">here. It just needed to be filled.</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex items-end">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
              id="pageButton"
              href="/dev"
            >
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                DEV
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[22px]">
                  {(() => {
                    const timestamp = Date.now().toString();
                    return timestamp.length > 16 ? timestamp.slice(-16) : timestamp.padStart(16, '0');
                  })()}
                </div>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
              id="pageButton"
              href="/arts"
            >
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                ▪ ARTS
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
              id="pageButton"
              href="/contact"
            >
              <b className="self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px]">
                CONTACT
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
          </div>
        </div>
      </div>
      <Image
        className="self-stretch h-5 max-w-full overflow-hidden shrink-0 z-[1]"
        width={1524}
        height={20}
        sizes="100vw"
        alt=""
        src="/Separator.svg"
      />
      <div className="self-stretch flex flex-col items-start py-0 pl-[74px] pr-[174px] gap-[47px] z-[2] text-[200px] md:pr-[74px] md:box-border">
        <div className="self-stretch relative leading-[100%] font-space-grotesk font-medium lg:text-[160px] md:text-[120px] sm:text-[80px]">
          <p className="m-0">PROJECT:</p>
          <p className="m-0">THIS</p>
          <p className="m-0">PORTFOLIO</p>
        </div>
        <div className="self-stretch relative text-[35px] leading-[200%] font-medium lg:text-[25px] md:text-xl sm:text-[15px]">
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
            {`This project turned out to be a long one, as design was only a small part of the whole work. I’ll share more about it on the `}
            <span className="[text-decoration:underline]">
              dev side of this project
            </span>
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
            — more specifically fluted glass — for its nice contrasts, repeating
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
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3]" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsThisPortfolio;
