import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";

const ProjectPageArtsCaresync = () => {
  return (
    <>
      <StickyNavigation currentPage="arts" />
      <div className="arts-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-14 px-0 pb-[85px] box-border gap-[47px] text-left text-[45px] text-[#fff]">
      <div className="self-stretch h-[382px] flex flex-col items-start py-0 pl-[74px] pr-[74px] box-border gap-[33px] z-[0] md:box-border" id="header">
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
      <div className="self-stretch flex flex-col items-start py-0 pl-[74px] pr-[74px] gap-[47px] z-[2] text-[200px] md:box-border">
        <div className="self-stretch relative leading-[100%] font-space-grotesk font-medium lg:text-[160px] md:text-[120px] sm:text-[80px]">
          <p className="m-0">PROJECT:</p>
          <p className="m-0">CARESYNC</p>
        </div>
        <div className="self-stretch relative text-[75px] leading-[100%] font-space-grotesk font-medium lg:text-[50px] md:text-[40px] sm:text-3xl">{`TOP5 WINNING HACKATHON PROJECT - SHIPFAST HACKATHON @ ECOLE 42 `}</div>
        <div className="self-stretch relative text-[35px] leading-[200%] font-medium lg:text-[25px] md:text-xl sm:text-[15px]">
          <p className="m-0">
            CareSync was an app we created during the Shipfast hackathon at
            École 42. In just 8 hours, we coded a healthcare application
            designed to assist with patient priority ranking.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            A bit of context: patient priority is currently defined through
            country-specific processes, and each country has its own system. For
            example, the French system uses the “FRENCH” ranking method (yes,
            that’s the real name), which relies on a complex grid spanning over
            12 pages of medical criteria, measurements, and patient-reported
            symptoms. There are even nurses whose entire job is to evaluate
            patient priority for treatment - they are called triage nurses.
          </p>
          <p className="m-0">
            We reflected on this and realized that the process could be
            optimized through an app, offering a more efficient solution than
            relying solely on a grid.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            As part of the hackathon, we also had to create a promotional video
            for our app - and we took it seriously. Some teammates brought a
            microphone and a stabilizer to record themselves presenting. Thanks
            to AI (Google Veo) and some editing in Premiere Pro, we managed to
            produce a polished video.
          </p>
          <p className="m-0">
            We ended up in the top 5 among more than 30 teams!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`You can explore the dev side of this project `}
            <Link href="/project-page-dev-caresync" className="[text-decoration:underline]">
              here
            </Link>!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`Check out CareSync `}
            <a href="https://hackathon-shipfast-caresync.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>!
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3]" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsCaresync;
