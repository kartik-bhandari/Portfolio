import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({
  project,
  index,
  onClick,
}) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <div
      onClick={onClick}
      className="bg-[#121212] p-5 rounded-none sm:w-[360px] w-full border-2 border-zinc-800 select-none transition-all duration-300 ease-out hover:-translate-x-[4px] hover:-translate-y-[4px] flex flex-col justify-between min-h-[380px] cursor-pointer group"
    >
      <div>
        {/* Compact, clean image preview without overlay buttons */}
        <div className="relative w-full h-[140px] overflow-hidden rounded-none border-b-2 border-zinc-800">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-none group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content Info */}
        <div className="mt-4">
          <div className="text-[11px] font-mono font-bold text-[#FFE500] tracking-widest uppercase mb-1">
            0{index + 1} —
          </div>
          <h3 className="text-white font-bold text-[18px] group-hover:text-[#FFE500] transition-colors duration-300 uppercase tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] md:text-[15px]  leading-relaxed line-clamp-3 font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Modern, quiet tags that light up on hover */}
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className="text-[9px] md:text-[12px]  font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-zinc-800 text-secondary bg-black/40  transition-colors duration-300"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    // Restrict background scrolling while modal is open
    document.body.style.overflow = "hidden";

    // Restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const { name, description, tags, image, source_code_link } = project;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0a0a0a] border-2 border-zinc-800 rounded-none max-w-2xl w-full p-6 sm:p-8 relative select-none flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-black bg-black hover:bg-[#FFE500] border-2 border-zinc-800 rounded-none w-8 h-8 flex justify-center items-center cursor-pointer transition-colors duration-200 z-10 font-bold"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="w-full h-[220px] sm:h-[280px] overflow-hidden rounded-none border-2 border-zinc-800 mt-2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-none"
          />
        </div>

        {/* Title and Github link */}
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-white font-bold text-[26px] tracking-tight uppercase">
            {name}
          </h3>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black hover:bg-[#FFE500] w-11 h-11 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-zinc-800 group/btn"
            title="Live Site"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white group-hover/btn:text-black transition-colors"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Full Description */}
        <div className="pr-1">
          <p className="text-secondary text-[14px] sm:text-[15px] leading-[26px] tracking-wide whitespace-pre-line font-medium">
            {description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-x-2 gap-y-1.5 mt-2 border-t-2 border-zinc-800/10 pt-4">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-[10px] md:text-[13px]  font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-zinc-500 text-zinc-500 rounded-none select-none bg-black/40"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="text-left">
        <p className={styles.sectionSubText}>// My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex mt-4">
        <p className="text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[26px] font-medium">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal Popup overlay */}
      {selectedProject &&
        createPortal(
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />,
          document.body
        )}
    </>
  );
};

export default SectionWrapper(Works, "projects");