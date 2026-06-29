import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative flex items-center justify-between w-full mb-12 md:even:flex-row-reverse">
      {/* Spacer to push card to opposite side on desktop */}
      <div className="hidden md:block w-[calc(50%-2.5rem)]" />

      {/* Experience Card Content */}
      <div className="w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)] bg-tertiary/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-lg hover:border-white/10 hover:shadow-xl hover:shadow-[#915EFF]/5 transition-all duration-300 group select-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div>
            <h3 className="text-white text-[20px] font-bold group-hover:text-[#915EFF] transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-secondary text-[14px] font-semibold mt-1">
              {experience.company_name}
            </p>
          </div>
          <span className="text-white/60 text-[12px] font-medium px-3 py-1 rounded-full bg-primary/40 border border-white/5 self-start md:self-center">
            {experience.date}
          </span>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100/90 text-[13px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mb-16"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Vertical Timeline container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* The central line */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[3px] bg-gradient-to-b from-[#915EFF]/80 via-[#915EFF]/40 to-transparent rounded-full" />

        {/* Timeline Items */}
        <div className="w-full flex flex-col items-center">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");