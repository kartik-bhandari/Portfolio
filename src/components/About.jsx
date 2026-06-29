import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full bg-tertiary/40 backdrop-blur-md p-[1px] rounded-[20px] border border-white/5 shadow-lg select-none transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:border-white/10 hover:shadow-2xl hover:shadow-[#915EFF]/5 group">
    <div className="bg-primary/20 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 group-hover:bg-primary/10">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain filter group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
      />
      <h3 className="text-white text-[20px] font-bold text-center group-hover:text-[#915EFF] transition-colors duration-300">
        {title}
      </h3>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I build fast, scalable web applications using JavaScript, React, Node.js, and Next.js. I've shipped production-ready applications across the stack, from pixel-perfect frontends to robust backend systems. I focus on clean architecture, sharp UI, and code that doesn't fall apart at scale. If you have a problem worth solving, let's build something that solves it right.
      </p>

      {/* <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");