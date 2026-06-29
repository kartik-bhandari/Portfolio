import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kartik",
          from_email: form.email,
          to_email: "kartikbhandari2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full max-w-2xl bg-tertiary/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl select-none"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-semibold mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-primary/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#915EFF] focus:ring-1 focus:ring-[#915EFF]/50 transition-all duration-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-semibold mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-primary/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#915EFF] focus:ring-1 focus:ring-[#915EFF]/50 transition-all duration-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-semibold mb-3">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-primary/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 focus:border-[#915EFF] focus:ring-1 focus:ring-[#915EFF]/50 transition-all duration-300 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915EFF] py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/20 hover:bg-[#804df0] hover:scale-105 active:scale-95 transition-all duration-300 self-start mt-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");