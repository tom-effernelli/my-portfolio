import Link from "next/link";
import FooterDevArts from "../../components/footer-dev-arts";
import Image from "next/image";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const ProjectPageArtsCaresync = () => {
  return (
    <>
      <StickyNavigation currentPage="arts" />
      <div className="arts-page w-full relative bg-[#090909] overflow-hidden flex flex-col items-start pt-8 px-0 pb-[85px] xs:pb-[37px] box-border gap-[47px] text-left text-[45px] text-[#fff]">
        <PageHeader currentPage="arts" borderColor="#fff" isProjectPage={true} />
      <Image
        className="self-stretch h-5 max-w-full overflow-hidden shrink-0 z-[1] xs:hidden"
        width={1524}
        height={20}
        sizes="100vw"
        alt=""
        src="/Separator.svg"
      />
      <div className="self-stretch flex flex-col items-start py-0 pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] gap-[47px] z-[2] text-[200px] md:box-border">
        <div className="self-stretch relative leading-[100%] font-space-grotesk font-medium lg:text-[160px] md:text-[120px] sm:text-[80px] xs:text-[60px]">
          <p className="m-0">PROJECT:</p>
          <p className="m-0">CARESYNC</p>
        </div>
        <div className="self-stretch relative text-[75px] leading-[100%] font-space-grotesk font-medium lg:text-[50px] md:text-[40px] sm:text-3xl xs:text-[20px]">{`TOP5 WINNING HACKATHON PROJECT - SHIPFAST HACKATHON @ ECOLE 42 `}</div>
        <div className="self-stretch w-full max-w-[1000px] mx-auto my-8">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/RdFEQCJy8PI?vq=hd1080&autoplay=0&rel=0"
              title="CareSync Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="self-stretch relative text-[35px] leading-[200%] font-medium lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
          <p className="m-0">
            CareSync was an app we created during the Shipfast hackathon at
            École 42. In just 8 hours, we coded a healthcare application
            designed to assist with patient priority ranking.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            A bit of context: patient priority is currently defined through
            country-specific processes, and each country has its own system. For
            example, the French system uses the “FRENCH” ranking method (yes,
            that’s the real name), which relies on a complex grid spanning over
            12 pages of medical criteria, measurements, and patient-reported
            symptoms. There are even nurses whose entire job is to evaluate
            patient priority for treatment - they are called triage nurses.
          </p>
          <p className="m-0">
            We reflected on this and realized that the process could be
            optimized through an app, offering a more efficient solution than
            relying solely on a grid.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            As part of the hackathon, we also had to create a promotional video
            for our app - and we took it seriously. Some teammates brought a
            microphone and a stabilizer to record themselves presenting. Thanks
            to AI (Google Veo) and some editing in Premiere Pro, we managed to
            produce a polished video.
          </p>
          <p className="m-0">
            We ended up in the top 5 among more than 30 teams!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`You can explore the dev side of this project `}
            <Link href="/project-page-dev-caresync" className="[text-decoration:underline]">
              here
            </Link>!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`Check out CareSync `}
            <a href="https://hackathon-shipfast-caresync.vercel.app/" target="_blank" rel="noopener noreferrer" className="[text-decoration:underline]">
              here
            </a>!
          </p>
        </div>
      </div>
      <div className="w-0.5 absolute !!m-[0 important] top-[-1px] left-[43px] border-[#fff] border-dashed border-r-[2px] box-border h-[5713px] z-[3] xs:hidden" />
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageArtsCaresync;
