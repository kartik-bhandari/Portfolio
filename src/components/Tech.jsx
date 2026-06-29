import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

// Custom hover glows matching each technology's brand color
const glowColors = {
  "HTML 5": "rgba(227, 79, 38, 0.25)",      // #E34F26
  "CSS 3": "rgba(21, 114, 182, 0.25)",      // #1572B6
  "JavaScript": "rgba(247, 223, 30, 0.25)", // #F7DF1E
  "React JS": "rgba(97, 218, 251, 0.25)",   // #61DAFB
  "Tailwind CSS": "rgba(6, 182, 212, 0.25)",// #06B6D4
  "Node JS": "rgba(51, 153, 51, 0.25)",     // #339933
  "MongoDB": "rgba(71, 162, 72, 0.25)",     // #47A248
  "FramerMotion": "rgba(241, 7, 163, 0.25)",// #F107A3
  "C++": "rgba(0, 89, 156, 0.25)",          // #00599C
  "git": "rgba(240, 80, 50, 0.25)",         // #F05032
  "figma": "rgba(242, 78, 30, 0.25)",       // #F24E1E
  "Photoshop": "rgba(49, 168, 255, 0.25)",  // #31A8FF
};

const textColors = {
  "HTML 5": "group-hover:text-[#E34F26]",
  "CSS 3": "group-hover:text-[#1572B6]",
  "JavaScript": "group-hover:text-[#F7DF1E]",
  "React JS": "group-hover:text-[#61DAFB]",
  "Tailwind CSS": "group-hover:text-[#06B6D4]",
  "Node JS": "group-hover:text-[#339933]",
  "MongoDB": "group-hover:text-[#47A248]",
  "FramerMotion": "group-hover:text-[#F107A3]",
  "C++": "group-hover:text-[#00599C]",
  "git": "group-hover:text-[#F05032]",
  "figma": "group-hover:text-[#F24E1E]",
  "Photoshop": "group-hover:text-[#31A8FF]",
};

const borderHoverColors = {
  "HTML 5": "hover:border-[#E34F26]/30",
  "CSS 3": "hover:border-[#1572B6]/30",
  "JavaScript": "hover:border-[#F7DF1E]/30",
  "React JS": "hover:border-[#61DAFB]/30",
  "Tailwind CSS": "hover:border-[#06B6D4]/30",
  "Node JS": "hover:border-[#339933]/30",
  "MongoDB": "hover:border-[#47A248]/30",
  "FramerMotion": "hover:border-[#F107A3]/30",
  "C++": "hover:border-[#00599C]/30",
  "git": "hover:border-[#F05032]/30",
  "figma": "hover:border-[#F24E1E]/30",
  "Photoshop": "hover:border-[#31A8FF]/30",
};

const TechCard = ({ name, icon }) => {
  const glow = glowColors[name] || "rgba(255, 255, 255, 0.15)";
  const textColorClass = textColors[name] || "group-hover:text-[#915EFF]";
  const borderHoverClass = borderHoverColors[name] || "hover:border-white/20";

  return (
    <div
      style={{
        "--glow-color": glow,
      }}
      className={`w-36 h-36 flex flex-col justify-center items-center bg-tertiary/40 backdrop-blur-md border border-white/5 rounded-2xl cursor-pointer p-4 select-none group transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 ${borderHoverClass} hover:[box-shadow:0_10px_25px_var(--glow-color)]`}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/30 p-2 group-hover:bg-primary/10 transition-all duration-300 ease-out">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain filter group-hover:scale-105 group-hover:brightness-110 transition-all duration-300 ease-out"
        />
      </div>
      <p className={`mt-3 text-[12px] font-semibold text-center text-white/80 ${textColorClass} transition-colors duration-300 ease-out`}>
        {name}
      </p>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-10">
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-6xl">
        {technologies.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");