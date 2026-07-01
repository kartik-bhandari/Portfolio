import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full bg-[#121212] p-5 rounded-none border-2 border-zinc-800 transition-all duration-300 select-none group hover:-translate-x-[4px] hover:-translate-y-[4px] hover:border-[#FFE500] hover:shadow-[4px_4px_0px_#FFE500]">
    <div className="flex justify-center items-center flex-col min-h-[220px] gap-6">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain filter group-hover:scale-105 transition-all duration-300"
      />
      <h3 className="text-white text-[18px] font-bold text-center group-hover:text-[#FFE500] transition-colors duration-300 uppercase tracking-tight">
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

      <p className="mt-6 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[26px]">
I build production-ready web apps — from pixel-perfect frontends to robust backends. MERN + Next.js + AI integrations. I focus on clean architecture, solid UI/UX, and write code that is clean, secure, and maintainable. If you have an interesting problem to solve, let's build something great together.
      </p>

      {/* <div className="mt-16 flex justify-center flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");