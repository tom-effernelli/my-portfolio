import Link from "next/link";

const ProjectLinkCard = ({ 
  title, 
  subtitle, 
  description, 
  href, 
  backgroundImage,
  textColor = "text-[inherit]"
}) => {
  return (
    <Link
      className={`cursor-pointer [text-decoration:none] self-stretch h-[697.6px] overflow-hidden shrink-0 flex flex-col items-start justify-end py-[18px] pl-[18px] pr-[321px] md:pr-[150px] sm:pr-[50px] xs:pr-[20px] box-border bg-cover bg-no-repeat bg-[top] ${textColor} md:h-[400px] sm:h-[300px] xs:h-[200px]`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      id="pojectPageButton"
      href={href}
    >
      <div className="self-stretch flex flex-col items-start justify-end p-2.5 gap-[30px]">
        <div className="self-stretch relative leading-[121%] font-space-grotesk font-medium lg:text-[90px] md:text-6xl sm:text-[60px] xs:text-[40px]">
          {title}
        </div>
        {subtitle && (
          <div className="self-stretch relative lg:text-[50px] md:text-[35px] leading-[121%] font-space-grotesk font-medium xs:hidden sm:hidden">
            {subtitle}
          </div>
        )}
        {description && (
          <div className="self-stretch relative lg:text-[35px] md:text-[25px] leading-[121%] lg:text-3xl xs:hidden sm:hidden">
            {description}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectLinkCard;

