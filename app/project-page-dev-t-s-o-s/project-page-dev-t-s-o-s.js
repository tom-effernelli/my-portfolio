import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";

const ProjectPageDevTSOS = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-[74px] box-border gap-[120px] bg-[url('/Dev@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[45px] text-[#fff] md:box-border">
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
                <p className="m-0">Anyways take a tour on my website!</p>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] sm:hidden md:hidden" />
            <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] sm:hidden md:hidden">
              <div className="relative leading-[121.1%] font-light lg:text-[15px]">
                <p className="m-0">Honnestly I don’t know what to put</p>
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
                  ▪ DEV
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
      <div className="self-stretch flex flex-col items-end gap-32 text-[25px] font-[Consolas]">
        <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[15px] sm:text-[10px]">
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████   ██████       ██ ███████  ██████ ████████                 `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██              `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██████  ██████  ██    ██      ██ █████   ██         ██                    `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██ ██    ██ ██   ██ ██      ██         ██    ██              `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██      ██   ██  ██████   █████  ███████  ██████    ██                    `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`████████ ██   ██ ███████     ███████  ██████  ██    ██ ███    ██ ██████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██          ██      ██    ██ ██    ██ ████   ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ███████ █████       ███████ ██    ██ ██    ██ ██ ██  ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ██               ██ ██    ██ ██    ██ ██  ██ ██ ██   ██  `}</p>
          <p className="m-0 whitespace-pre-wrap">{`   ██    ██   ██ ███████     ███████  ██████   ██████  ██   ████ ██████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                                                                          `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████  ███████     ███████ ██ ██      ███████ ███    ██  ██████ ███████ `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██          ██      ██ ██      ██      ████   ██ ██      ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ █████       ███████ ██ ██      █████   ██ ██  ██ ██      █████   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`██    ██ ██               ██ ██ ██      ██      ██  ██ ██ ██      ██      `}</p>
          <p className="m-0 whitespace-pre-wrap">{` ██████  ██          ███████ ██ ███████ ███████ ██   ████  ██████ ███████ `}</p>
        </div>
        <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px]">
          <p className="m-0">
            We built this project during a GameJam, with the idea of creating a
            game where you interact not with your keyboard or mouse, but with
            your voice. Technically, I used Phaser 3 as the core game engine and
            wrapped it inside a Next.js app to benefit from a smoother front-end
            setup and better control of the UI. The game reacts to audio input,
            so part of the focus was also on integrating microphone access and
            building the logic that translates voice intensity into game
            actions. The project isn't fully finished, but it was a great
            opportunity to explore a hybrid stack and real-time audio
            interaction in the browser.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`→ Check The Sound of Silence `}
            <a href="https://gamejam-psu-the-sound-of-silence.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the repo `}
            <a href="https://github.com/tom-effernelli/gamejam-psu-the-sound-of-silence" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>.
          </p>
          <p className="m-0">
            {`→ Check the creative side of the game `}
            <Link href="/project-page-arts-t-s-o-s" className="[text-decoration:underline]">
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

export default ProjectPageDevTSOS;
