import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const DropdownMenuContactSelected = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-full bg-[#fff3d9] border-[#000] border-solid border-b-[2px] box-border max-w-full h-[380px] flex flex-col items-start pt-5 pl-[45px] xs:pl-[23px] pr-[45px] xs:pr-[23px] pb-10 gap-2.5 text-left lg:text-[29px] md:text-[26px] sm:text-[22px] text-[#000] ${className}`}
    >
      {/* Icône de fermeture en haut à droite */}
      <div className="self-stretch flex-1 overflow-hidden flex items-center justify-end pt-0 px-0 pb-0">
        <Image
          className="w-[39px] lg:w-[36px] md:w-[32px] sm:w-[24px] h-[34px] lg:h-[30px] md:h-[28px] sm:h-[20px] cursor-pointer select-none"
          width={39}
          height={34}
          sizes="100vw"
          alt="Fermer le menu"
          src="/Dropdown-menu.svg"
          onClick={onClose}
        />
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/home"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          HOME
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/about"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          ABOUT
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/dev"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          DEV
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/arts"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          ARTS
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/contact"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer">
          ▪ CONTACT
        </b>
      </Link>
    </div>
  );
};

DropdownMenuContactSelected.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DropdownMenuContactSelected;
