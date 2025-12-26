import FooterDevArts from "../../components/footer-dev-arts";
import StickyNavigation from "../../components/sticky-navigation";
import PageHeader from "../../components/page-header";

const ProjectPageDevStochasticTexture = () => {
  return (
    <>
      <StickyNavigation currentPage="dev" />
      <div className="dev-page w-full relative overflow-hidden flex flex-col items-start pt-8 pb-[85px] xs:pb-[37px] pl-[74px] xs:pl-[37px] pr-[74px] xs:pr-[37px] box-border gap-[120px] xs:gap-[100px] bg-[url('/Dev@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[45px] text-[#fff] md:box-border">
        <PageHeader currentPage="dev" borderColor="#fff" isProjectPage={true} />
        <div className="self-stretch flex flex-col items-end gap-32 xs:gap-[60px] text-[25px] font-courier">
          <div className="self-stretch relative leading-[121%] lg:text-xl md:text-[14px] sm:text-[9px] xs:text-[7px]">
            <p className="m-0 whitespace-pre-wrap">{`███████ ████████ ██████  ██    ██  █████  ██████  ██   ██ ██    ██ ████████ ████████  ██████  ██████  ████████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██    ██    ██   ██ ██    ██ ██   ██ ██   ██ ██  ██  ██    ██    ██       ██    ██    ██ ██         ██    `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████    ██    ██████  ██    ██ ███████ ██████  █████   ██    ██    ██       ██    ██    ██ ██   ███   ██    `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██    ██    ██   ██ ██    ██ ██   ██ ██   ██ ██  ██  ██    ██    ██       ██    ██    ██ ██    ██  ██    `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██    ██    ██████   ██████  ██   ██ ██████  ██   ██  ██████     ██       ██     ██████   ██████  ██    `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                                                                                `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                                                                                                                `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████ ███████ ████████ ████████ ███████ ██████  ████████ ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██ ██         ██       ██    ██      ██   ██    ██    ██      `}</p>
            <p className="m-0 whitespace-pre-wrap">{`███████ ███████    ██       ██    █████   ██████     ██    ███████ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██      ██    ██       ██    ██      ██   ██    ██         ██ `}</p>
            <p className="m-0 whitespace-pre-wrap">{`██   ██ ███████    ██       ██    ███████ ██   ██    ██    ███████ `}</p>
          </div>
          <b className="self-stretch relative text-3xl leading-[121.1%] lg:text-[25px] md:text-xl sm:text-[15px] xs:text-[15px]">
            <p className="m-0">
              This project implements a stochastic texture generator that can tile
              a given texture sample across arbitrarily large 3D surfaces without
              any visible repetition patterns. The implementation is based on the
              research paper &quot;Procedural Stochastic Textures by Tiling and
              Blending&quot; by Thomas Deliot and Eric Heitz, which introduces
              techniques for generating seamless, non-repetitive textures through
              histogram-preserving blending and stochastic tiling.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The core challenge addressed by this project is the problem of
              texture repetition artifacts that occur when tiling a small texture
              sample across large surfaces. Traditional tiling methods create
              visible seams and repeating patterns that break immersion in 3D
              environments. The stochastic texturing approach solves this by
              using histogram-preserving blending operations that maintain the
              statistical properties of the original texture while creating
              seamless transitions between tiles.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              The implementation involves analyzing the input texture sample,
              generating multiple tile variations, and applying blending
              techniques that preserve the histogram distribution of pixel
              values. This ensures that the synthesized texture maintains the
              visual characteristics of the original sample while eliminating
              repetition artifacts. The algorithm can generate textures of
              arbitrary size, making it particularly useful for texturing large
              3D models and environments in computer graphics applications.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This project demonstrates my interest in advanced computer graphics
              techniques and my ability to implement research papers into
              practical applications. The work required understanding complex
              mathematical concepts related to texture synthesis, histogram
              preservation, and stochastic sampling methods.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {`→ Check the repo `}
              <a
                href="https://github.com/tom-effernelli/stochastic-texture-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="[text-decoration:underline]"
              >
                here
              </a>
              .
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Reference: Deliot, T., &amp; Heitz, E. (2019). Procedural
              Stochastic Textures by Tiling and Blending. In{" "}
              <em>Proceedings of SIGGRAPH</em>.
            </p>
          </b>
        </div>
      </div>
      <FooterDevArts />
    </>
  );
};

export default ProjectPageDevStochasticTexture;

