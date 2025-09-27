import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import DropdownMenuAboutSelected from "./dropdown-menu-about-selected";

const NavigationBarAboutSelected = ({ className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {isDropdownOpen && (
        <>
          {/* Overlay sombre */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={closeDropdown} />
          <DropdownMenuAboutSelected 
            className="fixed top-0 left-0 z-50" 
            onClose={closeDropdown}
          />
        </>
      )}
      {!isDropdownOpen && (
        <div
          className={`w-[1524px] bg-[#fff] border-[#000] border-solid border-b-[1px] box-border max-w-full h-[101px] lg:h-[90px] md:h-[80px] sm:h-[60px] overflow-hidden flex items-center justify-between py-0 px-[45px] lg:px-[35px] md:px-[30px] sm:px-[20px] gap-0 text-left text-[29px] lg:text-[26px] md:text-[24px] sm:text-[18px] text-[#000] ${className}`}
        >
      <Link href="/" className="w-[50px] lg:w-[45px] md:w-[40px] sm:w-[30px] relative bg-[#000] box-border h-[50px] lg:h-[45px] md:h-[40px] sm:h-[30px] cursor-pointer" />
      <div className="flex items-center justify-center py-0 pl-[135px] lg:pl-[110px] md:pl-[90px] sm:pl-[60px] pr-[100px] md:pr-[0px] sm:pr-[0px] gap-16 lg:gap-14 md:gap-12 sm:gap-8 lg:flex md:flex md:w-auto md:[align-self:unset] md:items-center md:justify-center md:pl-0 md:pr-[20px] md:box-border sm:flex">
        <div className="flex items-center justify-center md:hidden">
          <Link
            className="cursor-pointer relative leading-[121.1%] font-medium text-[inherit] underline"
            id="pageButton"
            href="/about"
          >
            ABOUT
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit]"
            id="pageButton"
            href="/dev"
          >
            DEV
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit]"
            id="pageButton"
            href="/arts"
          >
            ARTS
          </Link>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[121.1%] font-medium text-[inherit] md:block"
            id="pageButton"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
        <Image
          className="w-[39px] lg:w-[36px] md:w-[32px] sm:w-[24px] relative h-[34px] lg:h-[30px] md:h-[28px] sm:h-[20px] hidden md:block md:cursor-pointer"
          width={39}
          height={34}
          sizes="100vw"
          alt=""
          src="/Dropdown-menu.svg"
          onClick={toggleDropdown}
        />
      </div>
    </div>
      )}
    </>
  );
};

NavigationBarAboutSelected.propTypes = {
  className: PropTypes.string,
};

export default NavigationBarAboutSelected;
