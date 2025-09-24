"use client";
import { useCallback } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const FooterDevArts = ({ className = "" }) => {
  const onLinkedInLogoClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/tom-effernelli/");
  }, []);

  const onGithubLogoClick = useCallback(() => {
    window.open("https://github.com/tom-effernelli");
  }, []);

  const onMakeMyInboxClick = useCallback(() => {
    window.location.href =
      "mailto:tom.effernelli@gmail.com?subject=Hello there!";
  }, []);

  return (
    <div
      className={`w-full bg-[#090909] border-[#FFF] border-solid border-t-[1px] h-[693px] overflow-hidden flex flex-col items-start pt-14 pb-20 pl-[74px] pr-[174px] box-border gap-[54px] text-left text-[35px] text-[#fff] font-[Inter] md:pr-[74px] md:box-border ${className}`}
    >
      <div className="relative leading-[121.1%] font-extrabold lg:text-3xl md:text-[25px]">
        <p className="m-0">TOM</p>
        <p className="m-0">EFFERNELLI</p>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start gap-2.5 text-[29px] md:gap-2.5">
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:items-start md:justify-end"
            id="pageButton"
            href="/"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              HOME
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:hidden"
            id="pageButton"
            href="/dev"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              DEV
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
            <div className="flex items-center py-0 pl-[7px] pr-0 gap-5">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                id="socialsButton"
                onClick={onLinkedInLogoClick}
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                id="socialsButton"
                onClick={onGithubLogoClick}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit]"
            id="pageButton"
            href="/about"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              ABOUT
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/dev"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Tech stack
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] md:hidden">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-xl [text-decoration:underline] leading-[121.1%] font-light font-[Inter] text-[#fff] text-left inline-block lg:text-[17px] md:text-sm"
              id="socialsButton"
              onClick={onMakeMyInboxClick}
            >
              Make my inbox a happy place
            </button>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/about"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Who am I?
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:flex md:flex-1 sm:flex-1"
            id="pageButton"
            href="/dev"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              DEV
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/dev"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Projects
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/about"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Experiences
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:flex md:flex-1 sm:flex-1"
            id="pageButton"
            href="/arts"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              ARTS
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:hidden"
            id="pageButton"
            href="/arts"
          >
            <b className="self-stretch relative leading-[121.1%] flex items-end h-[35px] shrink-0 lg:text-[26px] md:text-[23px]">
              ARTS
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/about"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Education
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch w-[284px] border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:flex md:flex-1 sm:flex-1"
            id="pageButton"
            href="/contact"
          >
            <b className="self-stretch relative leading-[121.1%] lg:text-[26px] md:text-[23px]">
              CONTACT
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/arts"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Projects
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/about"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Resume
            </div>
          </Link>
          <div className="self-stretch w-[284px] border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] cursor-pointer md:flex md:flex-1 md:cursor-auto sm:flex-1">
            <div className="flex items-center py-0 pl-[7px] pr-0 gap-5">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                id="socialsButton"
                onClick={onLinkedInLogoClick}
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[34px] relative h-[33px] bg-cover bg-no-repeat bg-[top] lg:w-7 lg:h-[27px] md:w-[23px] md:h-[22px]"
                id="socialsButton"
                onClick={onGithubLogoClick}
              />
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end text-[inherit] md:hidden"
            id="sectionButton"
            href="/arts"
          >
            <div className="self-stretch relative leading-[121.1%] font-light lg:text-[26px] md:text-[23px]">
              Design Stack
            </div>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex items-end justify-center">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
          <div className="self-stretch w-[284px] border-[#fff] border-solid border-b-[2px] box-border overflow-hidden hidden flex-col items-start justify-end pt-0 px-0 pb-[5px] cursor-pointer md:flex md:flex-1 md:cursor-auto sm:flex sm:flex-1">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-xl [text-decoration:underline] leading-[121.1%] font-light font-[Inter] text-[#fff] text-left inline-block lg:text-[17px] md:text-sm"
              id="socialsButton"
              onClick={onMakeMyInboxClick}
            >
              Make my inbox a happy place
            </button>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start max-w-[70px] md:hidden" />
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#fff] border-solid border-b-[2px] overflow-hidden flex flex-col items-start justify-end pt-0 px-0 pb-[5px] text-[inherit] md:hidden"
            id="pageButton"
            href="/contact"
          >
            <b className="self-stretch relative leading-[121.1%] md:text-[23px]">
              CONTACT
            </b>
          </Link>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between max-w-[70px] md:hidden" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end md:hidden" />
        </div>
      </div>
    </div>
  );
};

FooterDevArts.propTypes = {
  className: PropTypes.string,
};

export default FooterDevArts;
