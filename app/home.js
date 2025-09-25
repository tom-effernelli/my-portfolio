import Link from "next/link";
import Image from "next/image";
import FooterHomeAboutContact from "../components/footer-home-about-contact";

const Home = () => {
  return (
    <>
      <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-0 box-border gap-[60px] text-left text-[45px] text-[#000]">
        <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[174px] gap-[33px] z-[4] md:pr-[74px] md:box-border">
          <div className="self-stretch border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end">
            <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px]">
              TOM EFFERNELLI
            </b>
          </div>
          <div className="self-stretch h-[295px] flex flex-col items-start gap-2.5 text-[29px]">
            <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px]">
                <b className="self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px]">
                  ▪ HOME
                </b>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
                <div className="self-stretch relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Hello there!</p>
                  <p className="m-0">Welcome on my personnal website.</p>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">
                    <span className="[text-decoration:underline]">
                      Did you know
                    </span>{" "}
                    clouds weight ~1Mt?
                  </p>
                  <p className="m-0">Anyways, take a tour on my website!</p>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Honnestly, I don’t know what to put</p>
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[22px]">
                  1.96437295429E+16
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
            </div>
          </div>
        </div>
        <div className="w-[1084px] absolute !!m-[0 important] top-[0px] left-[23px] h-[5000px] pointer-events-none">
          <div className="absolute top-[-1.5px] left-[32.5px] border-[#000] border-dashed border-r-[3px] box-border w-[3px] h-[5003px]" />
          <div className="absolute top-[830.5px] left-[32.5px] border-[#ed1c24] border-solid border-r-[3px] box-border w-[3px] h-[781px]" />
          <div className="absolute top-[1450px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute top-[976px] left-[29px] bg-[#ed1c24] border-[#ed1c24] border-solid border-[1px] box-border w-[11px] h-[11px]" />
          <div className="absolute top-[1391.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border w-[949px] h-px lg:w-[700px]" />
          <div className="absolute top-[1239.5px] left-[31.5px] border-[#494949] border-solid border-t-[1px] box-border w-[758px] h-px lg:w-[550px]" />
          <div className="absolute top-[1361.5px] left-[37.5px] border-[#494949] border-solid border-t-[1px] box-border w-[949px] h-px lg:w-[700px]" />
          <div className="absolute top-[1209.5px] left-[31.5px] border-[#494949] border-solid border-t-[1px] box-border w-[729px] h-px lg:w-[500px]" />
          <div className="absolute top-[1453.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border w-[989px] h-[3px]" />
          <div className="absolute top-[979.5px] left-[-1.5px] border-[#ed1c24] border-solid border-t-[3px] box-border w-[336px] h-[3px]" />
          <div className="absolute top-[1453.5px] left-[984.5px] border-[#000] border-dashed border-t-[3px] box-border w-[101px] h-[3px]" />
          <div className="absolute top-[979.5px] left-[343.5px] border-[#000] border-dashed border-t-[3px] box-border w-[376px] h-[3px]" />
          <Image
            className="absolute top-[820px] left-[24px] w-[21.2px] h-[21.2px] object-contain"
            width={21.2}
            height={21.2}
            sizes="100vw"
            alt=""
            src="/Group-16@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex items-start justify-between gap-0 z-[2] text-[150px]">
          <div className="flex flex-col items-start gap-[180px] shrink-0 lg:w-auto lg:[align-self:unset] lg:pt-[130px] lg:box-border">
            <div className="relative tracking-[-0.01em] leading-[103%] font-space-grotesk font-medium lg:text-[110px] lg:w-auto lg:[align-self:unset] sm:text-[50px]">
              <p className="m-0">DEVELOPPER,</p>
              <p className="m-0">DESIGNER,</p>
              <p className="m-0">CS STUDENT.</p>
            </div>
            <div className="self-stretch flex items-center justify-center text-5xl lg:pt-5 lg:box-border">
              <div className="flex-1 relative leading-[51px] font-light lg:text-3xl lg:leading-[45px] lg:self-stretch lg:h-auto md:leading-[48px]">
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
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[1122px] min-h-[950px] shrink-0 md:hidden"
            width={1122}
            height={950}
            sizes="100vw"
            alt=""
            src="/Arch-wrapped@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end py-0 pl-0 pr-[174px] gap-[58px] z-[1] text-[100px] text-[#fff] md:pr-[74px] md:box-border">
          <div className="self-stretch relative text-[110px] leading-[121%] font-medium text-[#000] text-right lg:text-[90px] md:text-[70px] font-space-grotesk">
            TOP PROJECTS:
          </div>
          <div className="self-stretch h-[698px] overflow-hidden shrink-0 flex flex-col items-center justify-end p-5 box-border bg-cover bg-no-repeat bg-[top] md:h-[500px]">
            <div className="self-stretch flex items-end justify-between gap-0">
              <div className="flex-1 flex flex-col items-start justify-end py-0 pl-0 pr-[75px] gap-[23px]">
                <div className="self-stretch relative leading-[121%] font-medium font-space-grotesk">
                  VIBEMATCH
                </div>
                <div className="self-stretch relative text-[50px] leading-[121%] font-medium font-space-grotesk">
                  TOP5 WINNING HACKATHON PROJECT
                </div>
                <div className="self-stretch relative text-[35px] leading-[121%] lg:hidden">
                  VibeMatch is a plateform designed to improve connection between
                  content creators and sponsors.
                </div>
              </div>
              <b className="relative text-[35px] leading-[113%] inline-block max-w-[300px] lg:text-[25px] md:text-[25px]">
                <p className="m-0">{`> View dev work`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`> View creative work`}</p>
              </b>
            </div>
          </div>
          <div className="self-stretch h-[698px] overflow-hidden shrink-0 flex flex-col items-start justify-end p-5 box-border bg-cover bg-no-repeat bg-[top] md:h-[500px]">
            <div className="self-stretch flex items-center gap-[58px]">
              <div className="flex-[0.9146] flex flex-col items-start justify-end py-0 pl-0 pr-[75px] gap-[23px] lg:pr-[50px] lg:box-border">
                <div className="self-stretch relative leading-[121%] font-medium font-space-grotesk">
                  THE SOUND OF SILENCE
                </div>
                <div className="self-stretch relative text-[50px] leading-[121%] font-medium font-space-grotesk">
                  2ND POSITION GAMEJAM PROJECT
                </div>
                <div className="self-stretch relative text-[35px] leading-[121%] lg:hidden">
                  The Sound of Silence is a game where you explore a mansion,
                  trying not to go insane.
                </div>
              </div>
              <b className="self-stretch flex-1 relative text-[35px] leading-[113%] flex items-end max-w-[300px] lg:text-[25px] md:text-[25px]">
                <span>
                  <p className="m-0">{`> View dev work`}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`> View creative work`}</p>
                </span>
              </b>
            </div>
          </div>
        </div>
        <Image
          className="w-[357px] absolute !!m-[0 important] bottom-[446px] left-[-50px] max-h-full object-cover z-[0]"
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
