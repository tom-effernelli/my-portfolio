import Link from "next/link";
import Image from "next/image";
import FooterHomeAboutContact from "../components/footer-home-about-contact";
import StickyNavigation from "../components/sticky-navigation";

const Home = () => {
  return (
    <>
      <StickyNavigation currentPage="home" />
      <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-0 box-border gap-[60px] text-left text-[45px] text-[#000]">
        <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[74px] gap-[33px] sm:gap-[20px] z-[4] md:box-border" id="header">
          <div className="self-stretch border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end">
            <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px]">
              TOM EFFERNELLI
            </b>
          </div>
          <div className="self-stretch h-[295px] sm:h-[230px] flex flex-col items-start gap-2.5 sm:gap-1 text-[29px]">
            <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px]">
                <b className="self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px]">
                  ▪ HOME
                </b>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
                <div className="self-stretch relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Hello there!</p>
                  <p className="m-0">Welcome on my personnal website.</p>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Open to new opportunities,</p>
                  <p className="m-0">feel free to reach out!</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
              <Link
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]"
                id="pageButton"
                href="/about"
              >
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                  ABOUT
                </b>
              </Link>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
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
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Honnestly I don't know what to put</p>
                  <p className="m-0">here. It just needed to be filled.</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex items-end">
              <Link
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
                id="pageButton"
                href="/dev"
              >
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                  DEV
                </b>
              </Link>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] xs:hidden sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] xs:hidden sm:hidden md:hidden">
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
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
                id="pageButton"
                href="/arts"
              >
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
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
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
                id="pageButton"
                href="/contact"
              >
                <b className="self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px]">
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
        <div className="w-[1084px] absolute !!m-[0 important] top-[0px] left-[23px] h-[5000px] pointer-events-none">
          <div className="absolute top-[-1.5px] left-[32.5px] border-[#000] border-dashed border-r-[3px] box-border w-[3px] h-[5003px]" />
          <div className="absolute lg:top-[830.5px] md:top-[830.5px] sm:top-[630px] left-[32.5px] border-[#ed1c24] border-solid border-r-[3px] box-border w-[3px] h-[781px]" />
          <div className="absolute sm:top-[1000px] md:top-[1350px] lg:top-[1450px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute sm:top-[676px] md:top-[876px] lg:top-[976px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute sm:top-[885px] md:top-[1291.5px] lg:top-[1391.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[450px] md:w-[700px] lg:w-[949px] h-px lg:w-[700px]" />
          <div className="absolute sm:top-[850px] md:top-[1139.5px] lg:top-[1239.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[400px] md:w-[600px] lg:w-[758px] h-px lg:w-[550px]" />
          <div className="absolute sm:top-[1006.5px] md:top-[1261.5px] lg:top-[1361.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[500px] md:w-[700px] lg:w-[949px] h-px lg:w-[700px]" />
          <div className="absolute sm:top-[966.5px] md:top-[1109.5px] lg:top-[1209.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border sm:w-[500px] md:w-[550px] lg:w-[729px] h-px lg:w-[500px]" />
          <div className="absolute sm:top-[1004px] md:top-[1353.5px] lg:top-[1453.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border sm:w-[450px] md:w-[700px] lg:w-[989px] h-[3px]" />
          <div className="absolute sm:top-[680px] md:top-[879.5px] lg:top-[979.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border sm:w-[200px] md:w-[200px] lg:w-[336px] h-[3px]" />
          <div className="absolute sm:top-[1004px] md:top-[1353.5px] lg:top-[1453.5px] sm:left-[450px] md:left-[700px] lg:left-[984.5px] border-[#000] border-dashed border-t-[3px] box-border w-[101px] h-[3px]" />
          <div className="absolute sm:top-[680px] md:top-[879.5px] lg:top-[979.5px] sm:left-[200px] md:left-[200px] lg:left-[343.5px] border-[#000] border-dashed border-t-[3px] box-border sm:w-[100px] md:w-[376px] lg:w-[376px] h-[3px]" />
          <Image
            className="absolute lg:top-[820px] md:top-[820px] sm:top-[620px] left-[24px] w-[21.2px] h-[21.2px] object-contain"
            width={21.2}
            height={21.2}
            sizes="100vw"
            alt=""
            src="/Group-16@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex items-start justify-between gap-0 z-[2]">
          <div className="flex flex-col items-start sm:gap-[130px] md:gap-[190px] lg:gap-[165px] shrink-0 lg:w-auto lg:[align-self:unset] md:pt-[40px] lg:pt-[50px] sm:pt-[30px] lg:box-border">
            <div className="relative tracking-[-0.01em] leading-[103%] font-space-grotesk font-medium lg:text-[140px] lg:w-auto lg:[align-self:unset] md:text-[110px] sm:text-[75px]">
              <p className="m-0">DEVELOPER,</p>
              <p className="m-0">DESIGNER,</p>
              <p className="m-0">CS STUDENT.</p>
            </div>
            <div className="self-stretch flex items-center justify-center text-5xl lg:pt-5 lg:box-border">
              <div className="flex-1 relative font-light md:text-[30px] lg:text-3xl lg:leading-[45px] lg:self-stretch lg:h-auto md:leading-[48px] sm:leading-[30px] sm:text-[25px]">
                <p className="m-0">Hello, welcome to my website!</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Here you'll find info about me and</p>
                <p className="m-0">{`all the development & creative work I do.`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Feel free to take a look!</p>
              </div>
            </div>
          </div>
          <Image
            className="relative max-w-full overflow-hidden h-auto max-h-[2000px] object-cover min-w-[1122px] min-h-[950px] shrink-0 xs:hidden sm:hidden md:hidden"
            width={1122}
            height={950}
            sizes="100vw"
            alt=""
            src="/Arch-wrapped@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end py-0 pl-0 pr-[74px] lg:gap-[58px] md:gap-[80px] sm:gap-[40px] z-[1] text-[100px] text-[#fff] md:box-border">
          <div className="self-stretch relative text-[110px] leading-[121%] font-medium text-[#000] text-right lg:text-[90px] md:text-[70px] sm:text-[50px] font-space-grotesk">
            TOP PROJECTS:
          </div>
          <div className="self-stretch lg:h-[698px] overflow-hidden shrink-0 flex flex-col items-center justify-end p-5 box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] md:h-[500px] sm:h-[300px]">
            <div className="self-stretch flex items-end justify-between gap-0">
              <div className="flex-1 flex flex-col items-start justify-end py-0 pl-0 lg:pr-[75px] md:pr-[40px] sm:pr-[20px] gap-[23px]">
                <div className="self-stretch relative leading-[121%] sm:text-[50px] md:text-[75px] lg:text-[100px] font-medium font-space-grotesk">
                  VIBEMATCH
                </div>
                <div className="self-stretch relative leading-[121%] sm:text-[20px] md:text-[30px] lg:text-[50px] font-medium font-space-grotesk">
                  TOP5 WINNING HACKATHON PROJECT
                </div>
                <div className="self-stretch relative lg:text-[35px] md:text-[25px] leading-[121%] xs:hidden sm:hidden">
                  VibeMatch is a plateform designed to improve connection between
                  content creators and sponsors.
                </div>
              </div>
              <b className="relative leading-[113%] inline-block max-w-[300px] lg:text-[35px] md:text-[25px] sm:text-[15px]">
                <p className="m-0">
                  <Link href="/project-page-dev-vibematch" className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                    {`> View dev work`}
                  </Link>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <Link href="/project-page-arts-vibematch" className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                    {`> View creative work`}
                  </Link>
                </p>
              </b>
            </div>
          </div>
          <div className="self-stretch lg:h-[698px] overflow-hidden shrink-0 flex flex-col items-center justify-end p-5 box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] md:h-[500px] sm:h-[300px]">
            <div className="self-stretch flex items-end justify-between gap-0">
              <div className="flex-1 flex flex-col items-start justify-end py-0 pl-0 lg:pr-[75px] md:pr-[40px] sm:pr-[20px] gap-[23px]">
                <div className="self-stretch relative leading-[121%] sm:text-[50px] md:text-[75px] lg:text-[100px] font-medium font-space-grotesk">
                  VIBEMATCH
                </div>
                <div className="self-stretch relative leading-[121%] sm:text-[20px] md:text-[30px] lg:text-[50px] font-medium font-space-grotesk">
                  TOP5 WINNING HACKATHON PROJECT
                </div>
                <div className="self-stretch relative lg:text-[35px] md:text-[25px] leading-[121%] xs:hidden sm:hidden">
                  VibeMatch is a plateform designed to improve connection between
                  content creators and sponsors.
                </div>
              </div>
              <b className="relative leading-[113%] inline-block max-w-[300px] lg:text-[35px] md:text-[25px] sm:text-[15px]">
                <p className="m-0">
                  <Link href="/project-page-dev-vibematch" className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                    {`> View dev work`}
                  </Link>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <Link href="/project-page-arts-vibematch" className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                    {`> View creative work`}
                  </Link>
                </p>
              </b>
            </div>
          </div>
        </div>
        <Image
          className="lg:w-[357px] md:w-[357px] sm:w-[250px] absolute !!m-[0 important] lg:bottom-[470px] md:bottom-[270px] sm:bottom-[165px] left-[-50px] max-h-full object-cover z-[0]"
          width={357}
          height={680}
          sizes="100vw"
          alt=""
          src="/Triangle-wrapped-pattern@2x.png"
        />
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default Home;
