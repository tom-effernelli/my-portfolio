import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";

const Dev = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-[74px] box-border gap-[183px] bg-[url('/Dev@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[45px] text-[#fff] lg:gap-[140px] md:gap-[100px] sm:gap-[70px] md:box-border">
        <div className="self-stretch flex flex-col items-start gap-[33px] sm:gap-[20px]" id="header">
          <div className="self-stretch border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end">
            <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px]">
              TOM EFFERNELLI
            </b>
          </div>
          <div className="self-stretch h-[295px] sm:h-[230px] flex flex-col items-start gap-2.5 sm:gap-1 text-[29px]">
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
              <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                <b className="self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px]">
                  ▪ DEV
                </b>
              </div>
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
              <Link
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
                id="pageButton"
                href="/arts"
              >
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                  ARTS
                </b>
              </Link>
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
        <div className="self-stretch flex flex-col items-start gap-[88px] text-xl font-[Consolas]" id="tech-stack">
          <div className="self-stretch relative leading-[121.1%] lg:text-[15px] md:text-[10px] sm:text-[10px]">
            <p className="m-0 whitespace-pre-wrap">{`████████ ███████  ██████ ██   ██     ███████ ████████  █████   ██████ ██   ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██      ██      ██   ██     ██         ██    ██   ██ ██      ██  ██  `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    █████   ██      ███████     ███████    ██    ███████ ██      █████   `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ██      ██      ██   ██          ██    ██    ██   ██ ██      ██  ██  `}</p>
            <p className="m-0 whitespace-pre-wrap">{`   ██    ███████  ██████ ██   ██     ███████    ██    ██   ██  ██████ ██   ██ `}</p>
          </div>
          <div className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px]">
            <p className="m-0">
              I’m mainly a frontend web developer, although I also work on
              projects outside web development (such as video game development).
              My focus is on building modern, responsive web applications, while
              keeping an eye on performance and clean design.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <b>Tech Stack:</b>
            </p>
            <p className="m-0">
              - Programming Languages: C, C# (+ Unity), Python, JavaScript, HTML,
              CSS
            </p>
            <p className="m-0">
              - Frameworks and Libraries: Next.js, React, Tailwind CSS
            </p>
            <p className="m-0">- Methods and Tools: Git, Responsive Design</p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center py-0 pl-[171px] pr-0 gap-[63px] text-right text-[32px] md:pl-[130px] md:box-border sm:pl-[71px] sm:box-border font-[Consolas]" id="projects">
          <div className="self-stretch relative text-xl leading-[121.1%] lg:text-[15px] md:text-[10px] sm:text-[10px]">
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██    ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ `}</p>
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch relative leading-[121%] text-[inherit] lg:text-[25px] md:text-xl sm:text-[15px]"
            id="projectpageButton"
            href="/project-page-dev-this-portfolio"
          >
            <p className="m-0">
              <b>→ My Portfolio</b>
            </p>
            <p className="m-0">
              A web portfolio built to better highlight my work. This project
              marked a significant step forward in my comprehension of JavaScript,
              React, and Next.js.
            </p>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch relative leading-[121%] text-[inherit] lg:text-[25px] md:text-xl sm:text-[15px]"
            id="projectpageButton"
            href="/project-page-dev-vibematch"
          >
            <p className="m-0">
              <b className="font-[Consolas]">→ VibeMatch:</b>
              <span> Hackathon Winning Project</span>
            </p>
            <p className="m-0">
              VibeMatch is a platform designed to improve connection between
              content creators and sponsors. Built in 1 week using NLP, AI
              matching and social media API integration.
            </p>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch relative leading-[121%] text-[inherit] lg:text-[25px] md:text-xl sm:text-[15px]"
            id="projectpageButton"
            href="/project-page-dev-t-s-o-s"
          >
            <p className="m-0">
              <b className="font-[Consolas]">→ The Sound of Silence:</b>
              <span> 2nd Position GameJam Project</span>
            </p>
            <p className="m-0">
              A 2D video game where you explore a mansion and try not to go
              insane. Developed in one week using Phaser.js, a framework for
              browser-based game creation.
            </p>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch relative leading-[121%] text-[inherit] lg:text-[25px] md:text-xl sm:text-[15px]"
            id="projectpageButton"
            href="/project-page-dev-caresync"
          >
            <p className="m-0">
              <b className="font-[Consolas]">{`→ CareSync: `}</b>
              <span>Hackathon top5 Winning Project</span>
            </p>
            <p className="m-0">
              A project built to improve medical healthcare systems, making
              hospital patient sorting more efficient. Focused on priority
              handling and automation, coded with Claude API calls.
            </p>
          </Link>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default Dev;
