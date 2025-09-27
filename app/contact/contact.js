"use client";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterHomeAboutContact from "../../components/footer-home-about-contact";
import StickyNavigation from "../../components/sticky-navigation";

const Contact = () => {
  const onMakeMyInboxClick = useCallback(() => {
    window.location.href =
      "mailto:tom.effernelli@gmail.com?subject=Hello there!";
  }, []);

  const onLinkedInLogoVBLACKClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/tom-effernelli/");
  }, []);

  const onGithubLogoVBLACKClick = useCallback(() => {
    window.open("https://github.com/tom-effernelli");
  }, []);

  return (
    <>
      <StickyNavigation currentPage="contact" />
      <div className="w-full relative bg-[#fff3d9] overflow-hidden flex flex-col items-start pt-14 pb-[85px] pl-[74px] pr-[74px] box-border gap-[140px] text-left text-[45px] text-[#000] md:gap-[100px] md:box-border">
        <div className="self-stretch flex flex-col items-start gap-[33px] z-[1]" id="header">
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
                <b className="self-stretch relative leading-[121.1%]">HOME</b>
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
              <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                <b className="self-stretch relative leading-[121.1%] lg:text-[26px] sm:text-[22px]">
                  ▪ CONTACT
                </b>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-[84px] z-[0] text-[125px] sm:flex-col sm:gap-[35px]">
          <Image
            className="w-[588px] relative h-[620px] object-cover lg:w-[400px] lg:h-[422px] md:w-[300px] md:h-[317px] sm:hidden sm:w-[300px] sm:h-[317px]"
            width={588}
            height={620}
            sizes="100vw"
            alt=""
            src="/writing-machine@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-0 lg:self-stretch lg:h-auto sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative leading-[130px] lg:text-[100px] lg:leading-[90px] md:text-[75px] md:leading-[75px] sm:text-3xl sm:leading-[100px] sm:text-left font-dm-serif-text font-bold">
              DROP ME A LINE.
            </div>
            <div className="self-stretch flex flex-col items-start pt-[50px] px-0 pb-0 gap-[9px] text-[28px] sm:pt-[50px] sm:box-border">
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-[28px] [text-decoration:underline] leading-[121.1%] text-[#000] text-left inline-block lg:text-xl md:text-[15px]"
                  id="socialsButton"
                  onClick={onMakeMyInboxClick}
                >
                  Make my inbox a happy place!
                </button>
              </div>
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <div className="self-stretch relative leading-[121.1%] lg:text-xl md:text-[15px]">
                  Also check my LinkedIn and Github:
                </div>
              </div>
              <div className="self-stretch border-[#000] border-solid border-b-[1px] flex flex-col items-start pt-0 px-0 pb-2.5">
                <div className="flex items-center py-0 pl-[5px] pr-0 gap-[25px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-[url('/LinkedInLogoVBLACK.png')] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-6 md:h-[23px] sm:w-[18px] sm:h-[17px]"
                    id="socialsButton"
                    onClick={onLinkedInLogoVBLACKClick}
                  />
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-[url('/GithubLogoVBLACK.png')] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-6 md:h-[23px] sm:w-[18px] sm:h-[17px]"
                    id="socialsButton"
                    onClick={onGithubLogoVBLACKClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHomeAboutContact />
    </>
  );
};

export default Contact;
