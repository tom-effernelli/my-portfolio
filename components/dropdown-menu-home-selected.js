import Link from "next/link";
import PropTypes from "prop-types";

const DropdownMenuHomeSelected = ({ className = "" }) => {
  return (
    <div
      className={`w-[960px] bg-[#fff] border-[#000] border-solid border-b-[2px] box-border max-w-full h-[351px] flex flex-col items-start pt-5 px-5 pb-10 gap-2.5 text-left text-[29px] text-[#000] font-[Inter] ${className}`}
    >
      <div className="self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px]">
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-auto">
          ▪ HOME
        </b>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/about"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer lg:text-[26px] sm:text-[22px]">
          ABOUT
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/dev"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer lg:text-[26px] sm:text-[22px]">
          DEV
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/arts"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer lg:text-[26px] sm:text-[22px]">
          ARTS
        </b>
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 border-[#000] border-solid border-b-[2px] overflow-hidden flex items-end pt-0 px-0 pb-[5px] text-[inherit]"
        id="pageButton"
        href="/contact"
      >
        <b className="self-stretch flex-1 relative leading-[121.1%] flex items-end cursor-pointer lg:text-[26px] sm:text-[22px]">
          CONTACT
        </b>
      </Link>
    </div>
  );
};

DropdownMenuHomeSelected.propTypes = {
  className: PropTypes.string,
};

export default DropdownMenuHomeSelected;
