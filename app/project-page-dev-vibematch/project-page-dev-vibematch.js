import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";

const ProjectPageDevVibematch = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[120px] xs:gap-[100px] bg-[url('/Dev@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[45px] text-[#fff] md:box-border">
      <div className="self-stretch flex flex-col items-start gap-[33px] sm:gap-[20px]" id="header">
        <div className="self-stretch border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end">
          <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px] xs:text-[25px]">
            TOM EFFERNELLI
          </b>
        </div>
        <div className="self-stretch h-[295px] sm:h-[230px] xs:h-[210px] flex flex-col items-start gap-2.5 sm:gap-1 text-[29px]">
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]"
              id="pageButton"
              href="/"
            >
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px]">
                HOME
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
              <div className="self-stretch relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Hello there!</p>
                <p className="m-0">Welcome on my personal website.</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
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
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px]">
                ABOUT
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">
                  <a href="https://www.sciencefocus.com/planet-earth/how-much-does-a-cloud-weigh" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
                    Did you know
                  </a>{" "}
                  clouds weight ~1Mt?
                </p>
                <p className="m-0">Anyways take a look at my website!</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Honnestly I don't know what to put</p>
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
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px]">
                  <span className="text-[16px] lg:text-[14px] sm:text-[12px] xs:text-[12px] inline-block -translate-y-1">■</span> DEV
                </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
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
              <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px] xs:text-[22px]">
                ARTS
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
              id="pageButton"
              href="/contact"
            >
              <b className="self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px] xs:text-[22px]">
                CONTACT
              </b>
            </Link>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end gap-32 xs:gap-[60px] text-[25px] font-courier">
        <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[15px] sm:text-[10px] xs:text-[7px]">
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████               `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██                  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██            `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██                  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                        `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                        `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██████  ███████ ███    ███  █████  ████████  ██████ ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██   ██ ██      ████  ████ ██   ██    ██    ██      ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██ ██████  █████   ██ ████ ██ ███████    ██    ██      ███████ `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██  ██  ██ ██   ██ ██      ██  ██  ██ ██   ██    ██    ██      ██   ██ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`  ████   ██ ██████  ███████ ██      ██ ██   ██    ██     ██████ ██   ██ `}</p>
        </div>
        <div className="self-stretch w-full max-w-[1000px] mx-auto my-8">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/0nxLMw0ac0Y?vq=hd1080&autoplay=0&rel=0"
              title="VibeMatch Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            We started this project with a friend during the hackathon organized
            by Cline and Cerebras. Originally the idea was to enable better
            connection between content creators and sponsors. Indeed, majority
            of the connection is made through emails or business calls, with no
            centralization system, either for content creators or sponsors.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We used the usual web dev stack I use in most of my projects: React
            and Tailwind CSS. We also used Vite. What was the most challenging
            (and still is because it isn’t finished) is probably socials
            integrations. Social media like Instagram are incredibly restrictive
            when it comes to scrapping their data, and if you want to scarp more
            than one Instagram profile per hour you need a Meta authorization.
            This remains to do in our project, for the moment.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            It could have stayed as a hackathon project but we saw an
            opportunity of doing something really interesting, notably by its
            market area positioning (influence market, which is worth billions).
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ Check VibeMatch `}
            <a href="https://vibematch.tech/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the creative side of our project `}
            <Link href="/project-page-arts-vibematch" className="[text-decoration:underline]">
              here
            </Link>.
          </p>
        </b>
      </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageDevVibematch;
