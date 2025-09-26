import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const NavigationBarHomeSelected = ({ className = "" }) => {
  return (
    <div
      className={`w-[1524px] bg-[#fff] border-[#000] border-solid border-b-[1px] box-border max-w-full h-[101px] overflow-hidden flex items-center justify-between py-0 px-[45px] gap-0 text-left text-[29px] text-[#000] ${className}`}
    >
      <Link href="/" className="w-[50px] relative bg-[#000] box-border h-[50px] cursor-pointer" />
      <div className="flex items-center justify-center py-0 pl-[135px] pr-[100px] gap-16 lg:flex md:flex md:w-auto md:[align-self:unset] md:items-center md:justify-center md:pl-[45px] md:pr-0 md:box-border sm:flex">
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
          className="w-[39px] relative h-[34px] hidden md:block md:cursor-pointer"
          width={39}
          height={34}
          sizes="100vw"
          alt=""
          src="/Dropdown-menu.svg"
        />
      </div>
    </div>
  );
};

NavigationBarHomeSelected.propTypes = {
  className: PropTypes.string,
};

export default NavigationBarHomeSelected;
