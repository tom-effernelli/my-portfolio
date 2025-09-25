import Link from "next/link";
import Image from "next/image";
import FooterHomeAboutContact from "../../components/footer-home-about-contact";

const About = () => {
  return (
    <>
      <div className="w-full relative bg-[#fff] overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-[174px] box-border gap-[140px] text-left text-[110px] text-[#000] md:gap-[100px] md:pr-[74px] md:box-border">
        <div className="self-stretch flex flex-col items-start gap-[33px] text-[45px]">
          <div className="self-stretch border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end">
            <b className="self-stretch relative leading-[121.1%] lg:text-[40px] md:text-[35px] sm:text-[25px]">
              TOM EFFERNELLI
            </b>
          </div>
          <div className="self-stretch h-[295px] flex flex-col items-start gap-2.5 text-[29px]">
            <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center text-xl">
              <Link
                className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px] text-[inherit]"
                id="pageButton"
                href="/"
              >
                <b className="self-stretch relative leading-[121.1%] cursor-pointer lg:text-[26px] sm:text-[22px]">
                  HOME
                </b>
              </Link>
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
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[29px]">
                <b className="self-stretch relative leading-[121.1%] cursor-auto lg:text-[26px] sm:text-[22px]">
                  ▪ ABOUT
                </b>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
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
        <div className="self-stretch flex items-center text-right">
          <div className="flex-1 flex flex-col items-center sm:w-[200px]">
            <Image
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover sm:w-[200px] sm:h-[200px] sm:max-h-[350px]"
              width={638}
              height={517.7}
              sizes="100vw"
              alt=""
              src="/unblurred-Chrome-star@2x.png"
            />
            <Image
              className="w-48 relative max-h-full object-cover sm:w-[50px] sm:h-[100px] sm:max-h-[100px]"
              width={192}
              height={267}
              sizes="100vw"
              alt=""
              src="/unblurred-Chrome-little-star@2x.png"
            />
          </div>
          <div className="flex-[0.9687] border-[#000] border-dashed border-r-[2px] flex flex-col items-end py-0 pl-0 pr-[18px] gap-[33px]" id="who-am-i">
            <div className="w-full flex flex-col items-start max-w-[568px]">
              <div className="w-full relative leading-[121.1%] font-medium inline-block max-w-[568px] lg:text-[80px] md:text-[70px] sm:text-[70px] font-space-grotesk">
                WHO AM I?
              </div>
              <div className="self-stretch relative border-[#000] border-dashed border-t-[2px] box-border h-[11px] overflow-hidden shrink-0" />
            </div>
            <div className="self-stretch relative text-3xl lg:text-[25px] md:text-xl">
              <p className="m-0">
                <span className="leading-[180%]">
                  I’m both a computer science engineering student at Télécom Paris
                  (Polytechnic Institute of Paris) and a B.Sc. student in
                  mathematics at Sorbonne Université, pursuing both degrees in
                  parallel.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
                <span className="leading-[180%]">
                  I work mainly on frontend web development, with some backend and
                  DB experience as well.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
                <span className="leading-[180%]">
                  I’m passionate about creating visuals and designs, and I believe
                  that design and technique should always go hand in hand.
                </span>
              </p>
              <p className="m-0">
                <span className="leading-5">&nbsp;</span>
              </p>
              <p className="m-0">
                <span className="leading-[180%]">{`I am open to new opportunities, let’s start something awesome – `}</span>
                <span className="leading-[180%]">
                  <span className="[text-decoration:underline]">email me</span>!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex items-start justify-between gap-0" id="experience">
          <div className="flex-1 flex flex-col items-start gap-[27px]">
            <div className="self-stretch relative font-medium lg:text-[80px] md:text-[70px] sm:text-[50px] font-space-grotesk">
              EXPERIENCE
            </div>
            <div className="self-stretch flex flex-col items-start relative gap-14 text-3xl">
              <div className="self-stretch flex flex-col items-start gap-[19px] z-[0]">
                <div className="flex items-center gap-[19px]">
                  <div className="w-[27px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px]" />
                  <div className="relative font-semibold lg:text-3xl md:text-[25px] sm:text-xl">{`CTO & Co-Founder of VibeMatch`}</div>
                </div>
                <div className="self-stretch flex items-center py-0 pl-[50px] pr-0 text-[25px]">
                  <div className="flex-1 relative md:text-xl sm:text-[15px]">
                    <p className="m-0">
                      Developping a B2B SaaS platform to connect content creators
                      and sponsors.
                    </p>
                    <p className="m-0"> - Co-Founder</p>
                    <p className="m-0"> - Frontend development</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-2 z-[1]">
                <div className="self-stretch flex items-center gap-[19px]">
                  <div className="w-[27px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px]" />
                  <div className="relative font-semibold md:text-[25px] sm:text-xl">{`Hackathons & GameJams`}</div>
                </div>
                <div className="self-stretch h-[387px] flex flex-col items-start py-0 pl-[50px] pr-0 box-border" />
              </div>
              <div className="w-[3px] absolute !!m-[0 important] top-[-26.5px] left-[11.5px] bg-[#000] border-[#000] border-solid border-r-[3px] box-border h-[1824px] z-[2]" />
            </div>
          </div>
          <Image
            className="flex-1 relative max-w-[379px] overflow-hidden max-h-[331px] object-cover lg:h-[250px] lg:max-w-[286px]"
            width={379}
            height={331}
            sizes="100vw"
            alt=""
            src="/unblurred-Chrome-lunatic-star-1@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex items-center justify-between relative gap-0 text-right" id="education">
          <Image
            className="flex-1 relative max-w-[333px] overflow-hidden max-h-[325px] object-cover z-[0] shrink-0"
            width={333}
            height={325}
            sizes="100vw"
            alt=""
            src="/unblurred-three-chrome-stars-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start gap-[27px] z-[1] shrink-0">
            <div className="self-stretch relative font-medium lg:text-[80px] md:text-[70px] sm:text-[50px] font-space-grotesk">
              EDUCATION
            </div>
            <div className="self-stretch flex flex-col items-start gap-14 text-3xl">
              <div className="self-stretch flex flex-col items-end gap-[19px]">
                <div className="flex items-center justify-end gap-[19px] md:gap-[19px] md:items-center md:justify-end">
                  <div className="w-[501px] relative font-semibold flex items-center h-9 shrink-0 lg:text-3xl lg:w-auto lg:[align-self:unset] md:text-[25px] md:w-auto md:[align-self:unset] sm:text-xl">
                    Grande Ecole Engineering Diploma
                  </div>
                  <div className="w-[27px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px]" />
                </div>
                <div className="self-stretch flex items-center justify-end py-0 pl-0 pr-[50px] text-[25px]">
                  <div className="flex-1 relative lg:text-[25px] md:text-xl sm:text-[15px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Télécom Paris | Polytechnic Institute of Paris
                    </p>
                    <p className="m-0">
                      <i>2024 – 2027 – Palaiseau, France</i>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      One of France’s most prestigious general engineering schools
                      in the Grandes Ecoles system. Equivalent to a top-tier
                      university specialized in engineering studies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end gap-2 text-left">
                <div className="self-stretch flex items-center justify-end gap-[19px]">
                  <div className="relative font-semibold lg:text-3xl md:text-[25px] sm:text-xl">
                    B.Sc. in Mathematics
                  </div>
                  <div className="w-[27px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px]" />
                </div>
                <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[50px] text-right text-[25px]">
                  <div className="self-stretch relative lg:text-[25px] md:text-xl sm:text-[15px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">Sorbonne Université</p>
                    <p className="m-0">
                      <i>2025 – 2026 – Paris, France</i>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Prestigious French university degree covering core areas of
                      pure and applied mathematics, including analysis, algebra,
                      probability, and statistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end gap-2">
                <div className="self-stretch flex items-center justify-end gap-[19px]">
                  <div className="relative font-semibold lg:text-3xl lg:max-w-[800px] md:text-[25px] sm:text-xl">
                    <p className="m-0">Preparatory Classes in Mathematics,</p>
                    <p className="m-0">Physics and Computer Sciences</p>
                  </div>
                  <div className="w-[27px] relative rounded-[50%] bg-[#000] border-[#000] border-solid border-[1px] box-border h-[27px]" />
                </div>
                <div className="self-stretch flex flex-col items-start py-0 pl-0 pr-[50px] text-[25px]">
                  <div className="self-stretch relative lg:text-[25px] md:text-xl sm:text-[15px]">
                    <p className="m-0">
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>Lycée du Parc</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <i>2022 – 2024 – Lyon, France</i>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          Post-secondary top-tier preparation program for the
                          competitive entrance examinations to French Engineering
                          Schools in the Grandes Ecoles system.
                        </span>
                      </span>
                    </p>
                    <p className="m-0 text-xl">
                      <i>
                        <span className="leading-[10px]">&nbsp;</span>
                      </i>
                    </p>
                    <p className="m-0">
                      <i>
                        *If you’re not familiar with the French academic system,
                        you might not know what it is - but trust me, it’s among
                        the most challenging programs you can pursue in France.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[3px] absolute !!m-[0 important] top-[140.5px] right-[11.5px] bg-[#000] border-[#000] border-solid border-r-[3px] box-border h-[1917px] z-[2] shrink-0" />
        </div>
        <div className="self-stretch flex items-center p-2.5 text-3xl" id="resume">
          <div className="relative font-semibold md:text-xl">
            {`You can find my complete resume `}
            <span className="[text-decoration:underline]">here.</span>
          </div>
        </div>
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default About;
