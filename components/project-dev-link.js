import Link from "next/link";

const ProjectDevLink = ({ title, description, href }) => {
  return (
    <Link
      className="cursor-pointer [text-decoration:none] self-stretch relative leading-[121%] text-[inherit] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px] font-bold"
      id="projectpageButton"
      href={href}
    >
      <p className="m-0">{title}</p>
      {description && <p className="m-0">{description}</p>}
    </Link>
  );
};

export default ProjectDevLink;

