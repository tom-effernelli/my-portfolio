import Image from "next/image";
import PropTypes from "prop-types";

const SidebarHomeAbout = ({ className = "" }) => {
  return (
    <div
      className={`w-[100px] bg-[#fff] border-[#000] border-solid border-l-[1px] box-border h-[982px] overflow-x-auto flex flex-col items-center justify-between pt-[71px] px-0 pb-4 gap-0 text-left text-base text-[#000] ${className}`}
    >
      <Image
        className="w-[133.2px] relative h-[231.8px]"
        width={133.2}
        height={231.8}
        sizes="100vw"
        alt=""
        src="/Signature.svg"
      />
      <div className="flex-1 flex flex-col items-center justify-end pt-[75px] px-0 pb-0 gap-[17px]">
        <div className="relative leading-[121.1%] font-medium inline-block [transform:_rotate(-90deg)] min-w-[390px]">
          <p className="m-0">DESIGNED IN PARIS. ALSO CODED IN PARIS.</p>
          <p className="m-0">TOM EFFERNELLI © 2025 - INFINITY.</p>
          <p className="m-0">THIS LINE IS JUST HERE FOR LAYOUT MATTERS.</p>
        </div>
        <Image
          className="w-[57px] relative h-[203.3px]"
          width={57}
          height={203.3}
          sizes="100vw"
          alt=""
          src="/Barcode.svg"
        />
      </div>
    </div>
  );
};

SidebarHomeAbout.propTypes = {
  className: PropTypes.string,
};

export default SidebarHomeAbout;
