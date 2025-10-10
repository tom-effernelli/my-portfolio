import Link from "next/link";
import Image from "next/image";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";

const Arts = () => {
  return (
    <>
      <StickyNavigation currentPage="arts" />
      <div className="arts-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-[74px] box-border gap-[123px] text-left text-[45px] text-[#fff] md:box-border">
        <div className="self-stretch flex flex-col items-start gap-[33px]" id="header">
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
                <div className="self-stretch relative leading-[121.1%] font-light lg:text-[15px]">
                  <p className="m-0">Hello there!</p>
                  <p className="m-0">Welcome on my personnal website.</p>
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
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
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                  DEV
                </b>
              </Link>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
                <div className="relative leading-[121.1%] font-light lg:text-[22px]">
                  {(() => {
                    const timestamp = Date.now().toString();
                    return timestamp.length > 16 ? timestamp.slice(-16) : timestamp.padStart(16, '0');
                  })()}
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                <b className="self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px]">
                  ▪ ARTS
                </b>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end sm:hidden md:hidden" />
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
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end sm:hidden md:hidden" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-start gap-14 min-h-[700px] text-[150px] lg:min-h-[500px] md:min-h-[300px] sm:flex-col">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover lg:h-[500px] lg:max-h-[500px] md:self-stretch md:h-auto md:max-h-[350px] sm:flex-[unset] sm:self-stretch"
            width={794}
            height={700}
            sizes="100vw"
            alt=""
            src="/First-decoration-image@2x.png"
          />
          <div className="self-stretch w-[426px] relative leading-[92%] inline-block shrink-0 max-w-[426px] lg:text-[120px] lg:h-auto lg:max-w-[350px] md:text-[100px] sm:text-[100px] sm:w-full">
            <span className="font-space-grotesk font-medium">{`LET THE ARTS `}</span>
            <b>IN</b>
            <span className="font-space-grotesk font-medium">.</span>
          </div>
        </div>
        <div className="self-stretch flex items-end justify-center min-h-[800px] text-right text-3xl lg:min-h-[500px] sm:flex-col">
          <div className="w-[686px] flex flex-col items-end justify-end py-0 pl-0 pr-[30px] box-border gap-5 max-w-[730px] z-[1] lg:max-w-[500px] md:w-[400px] md:max-w-[400px] sm:w-[300px] sm:max-w-[300px]">
            <div className="self-stretch relative leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px]">
              IN HERE YOU WILL FIND MY
            </div>
            <div className="self-stretch relative text-[300px] leading-[80%] font-space-grotesk font-medium text-left lg:text-[230px] lg:h-auto md:text-[150px] sm:text-[110px]">
              ART
            </div>
            <div className="self-stretch relative text-[120px] leading-[121.1%] lg:text-[90px] md:text-[70px] sm:text-[50px] font-space-grotesk">
              CREATIONS
            </div>
          </div>
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0] sm:max-h-[720px] sm:flex-[unset] sm:self-stretch"
            width={590}
            height={800}
            sizes="100vw"
            alt=""
            src="/Decorative-image-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end gap-[61px] text-[100px] md:gap-5" id="projects">
          <div className="self-stretch relative text-[130px] leading-[121.1%] font-space-grotesk font-medium text-right lg:text-[100px] md:text-[80px] md:h-auto">
            PROJECTS:
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[698px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[#000] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-this-portfolio"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl">
                THIS PORTFOLIO
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] whitespace-pre-wrap lg:text-3xl md:hidden">
                I spent all my summer on this project, which aims to better
                highlight my work. LinkedIn is just messy when it comes to
                showcase dev work, and not made at all to shocase design work.
                Super fun and creative to do!
              </div>
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-vibematch"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium">
                VIBEMATCH
              </div>
              <div className="self-stretch relative text-[50px] leading-[121%] font-space-grotesk font-medium">
                TOP5 WINNING HACKATHON PROJECT
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:hidden">
                VibeMatch is a plateform designed to improve connection between
                content creators and sponsors. Check out the promotion video I
                created for this occasion!
              </div>
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-t-s-o-s"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl">
                THE SOUND OF SILENCE
              </div>
              <div className="self-stretch relative text-[50px] leading-[121%] font-space-grotesk font-medium">
                2ND POSITION GAMEJAM PROJECT
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:hidden">
                The Sound of Silence is a game where you explore a mansion, trying
                not to go insane. Creating the design was pretty fun and taught me
                a lot of things about tilemapping.
              </div>
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[#000] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-instagram-account2"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl">
                INSTAGRAM ACCOUNT - 2
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:hidden">
                This Instagram account I designed was for my engineering school,
                in order to help new students make their decision upon which
                school to choose, presenting all the benefits of mine...
              </div>
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-caresync"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl">
                CARESYNC
              </div>
              <div className="self-stretch relative text-[50px] leading-[121%] font-space-grotesk font-medium">
                TOP5 WINNING HACKATHON PROJECT
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:hidden">
                A hackathon project to make medical healthcare systems such as
                hospitals more efficient, working on the patient priority sorting
                process. Check out the demo video!
              </div>
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] box-border bg-[url('/Project-fill-img.png')] bg-cover bg-no-repeat bg-[top] text-[#000] md:h-[400px]"
            id="pojectPageButton"
            href="/project-page-arts-instagram-account1"
          >
            <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
              <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl">
                INSTAGRAM ACCOUNT - 1
              </div>
              <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:hidden">
                This Instagram account I designed with some other teammates too
                was created during the student board election campaign I took part
                in. I was in charge of all the communication processes.
              </div>
            </div>
          </Link>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[39px] text-[90px]" id="design-stack">
          <div className="relative leading-[121.1%] font-space-grotesk font-medium lg:text-[80px] md:text-6xl sm:text-[45px]">
            DESIGN STACK:
          </div>
          <div className="self-stretch relative text-[35px] leading-[121%] lg:text-3xl md:text-[22px] sm:text-[17px]">
            <p className="m-0">
              Here are the softwares I’m the most familiar with for graphic
              creations:
            </p>
            <ul className="m-0 font-[inherit] text-[length:inherit] pl-[47px]">
              <li className="mb-0">Adobe Photoshop</li>
              <li className="mb-0">Adobe Premiere Pro</li>
              <li className="mb-0">Adobe After Effects</li>
              <li className="mb-0">Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default Arts;
