import React from "react";
import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="bg-tertiary/40 backdrop-blur-md p-6 rounded-2xl sm:w-[360px] w-full border border-white/5 shadow-lg select-none transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/10 hover:shadow-2xl hover:shadow-[#915EFF]/5 flex flex-col justify-between min-h-[460px] group">
      <div>
        {/* Clean Image container with reduced height for breathing room */}
        <div className="relative w-full h-[190px] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Info */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] group-hover:text-[#915EFF] transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-3 text-secondary text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Clean text-based tags to avoid background badge clutter */}
      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[12px] font-semibold tracking-wide ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div className="text-left">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex mt-3">
        <p className="text-secondary text-[16px] max-w-3xl leading-[28px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7 justify-center md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");