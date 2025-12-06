import Link from "next/link";

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  devLink, 
  artsLink, 
  backgroundImage 
}) => {
  return (
    <div 
      className="self-stretch lg:h-[698px] overflow-hidden shrink-0 flex flex-col items-center justify-end p-5 box-border bg-cover bg-no-repeat bg-[top] md:h-[500px] sm:h-[300px] xs:h-[200px]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="self-stretch flex items-end justify-between gap-0">
        <div className="flex-1 flex flex-col items-start justify-end py-0 pl-0 lg:pr-[75px] md:pr-[40px] sm:pr-[20px] xs:pr-[10px] gap-[23px]">
          <div className="self-stretch relative leading-[121%] sm:text-[50px] xs:text-[35px] md:text-[75px] lg:text-[100px] font-medium font-space-grotesk">
            {title}
          </div>
          <div className="self-stretch relative leading-[121%] sm:text-[20px] xs:text-[15px] md:text-[30px] lg:text-[50px] font-medium font-space-grotesk">
            {subtitle}
          </div>
          {description && (
            <div className="self-stretch relative lg:text-[35px] md:text-[25px] leading-[121%] xs:hidden sm:hidden">
              {description}
            </div>
          )}
        </div>
        <b className="relative leading-[113%] inline-block max-w-[300px] lg:text-[35px] md:text-[25px] sm:text-[15px] xs:text-[10px]">
          {devLink && (
            <>
              <p className="m-0">
                <Link href={devLink} className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                  {`> View dev work`}
                </Link>
              </p>
              <p className="m-0">&nbsp;</p>
            </>
          )}
          {artsLink && (
            <p className="m-0">
              <Link href={artsLink} className="cursor-pointer [text-decoration:none] text-[inherit] hover:underline">
                {`> View creative work`}
              </Link>
            </p>
          )}
        </b>
      </div>
    </div>
  );
};

export default ProjectCard;

