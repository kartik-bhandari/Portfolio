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
          to_email: "work@kartikbhandari.com",
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
        className="w-full max-w-2xl bg-[#121212] p-8 rounded-none border-2 border-zinc-800 shadow-[4px_4px_0px_#FFE500] select-none"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-bold mb-3 uppercase text-[12px] tracking-wide">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-none outline-none border-2 border-zinc-800 focus:border-[#FFE500] transition-all duration-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-3 uppercase text-[12px] tracking-wide">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-none outline-none border-2 border-zinc-800 focus:border-[#FFE500] transition-all duration-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-3 uppercase text-[12px] tracking-wide">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-none outline-none border-2 border-zinc-800 focus:border-[#FFE500] transition-all duration-300 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#FFE500] text-black border-2 border-zinc-800 font-bold py-3.5 px-8 rounded-none shadow-[4px_4px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all self-start mt-2 uppercase tracking-wider text-[13px]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");