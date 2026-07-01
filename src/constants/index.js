import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    Photoshop,
    cpp,
    framermotion,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    monkeypie,
    threejs,
    ragvi,
    chatApp,
    ledger,
    hardwear,
    eventsnow,
    nextjs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "FramerMotion",
      icon: framermotion,
    },
    {
      name: "C++",
      icon: cpp,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Photoshop",
      icon: Photoshop,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Freelance",
      date: "2024 - present",
      points: [
        "Designed and developed multiple full-stack web applications for clients in real estate, interior design, and personal portfolio domains.",
        "Customized each project to meet client-specific requirements using the MERN stack and responsive UI with Tailwind CSS.",
        "Collaborated with clients throughout the development cycle to deliver scalable, brand-consistent digital solutions on time.",
      ],
    },
    {
      title: "Software Engineer Intern ",
      company_name: "Matrix Credit Risk Controls Pvt. Ltd.",
      date: "Jun 2025 - Jul 2025",
      points: [
        "Built a Contact Point Verification System to validate, manage, and authenticate user touchpoints across platforms.",
        "Contributed to development and debugging using React, Node.js, and JavaScript.",
        "Worked with Chrome extensions, APIs, and Git for seamless integration and version control.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
                {
      name: "Ledger.ai",
      description:
        " AI-powered personal finance tracker where users import bank statements via PDF, and an AI analyzes spending patterns, categorizes transactions, generates monthly reports, and answers financial questions through a chat interface.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini API",
          color: "blue-text-gradient",
        },
        {
          name: "Recharts",
          color: "blue-text-gradient",
        },
      ],
      image: ledger,
      source_code_link: "https://ledger-ai-snowy.vercel.app/",
    },
            {
      name: "Hardwear",
      description:
        "Built an e-commerce platform that allows customers to shop and checkout seamlessly while admins control inventory and orders through a dedicated dashboard, with payment processing and automated email notifications handled out of the box.",
      tags: [
        {
          name: "Razorpay",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "blue-text-gradient",
        },
        {
          name: "Resend",
          color: "blue-text-gradient",
        },
      ],
      image: hardwear,
      source_code_link: "https://www.hardwear.live",
    },
        {
      name: "ragviDesign",
      description:
        "A sleek, responsive website for an interior design brand featuring a custom CMS that lets the client manage portfolios, services, and site content, no code required.",
      tags: [
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        },
      ],
      image: ragvi,
      source_code_link: "https://www.ragvidesign.in/home",
    },
    {
      name: "monkeyPie",
      description:
        "A full stack AI image generating website which works on Dall-E AI and allows user to share his work with community.",
      tags: [
        {
          name: "OpenAI API",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: monkeypie,
      source_code_link: "https://monkeypie.netlify.app/",
    },
            {
      name: "Events Now",
      description:
        "A full-stack booking platform with real-time seat reservation, user booking management, and a powerful admin panel to create and control events all in one seamless flow.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Nodemailer",
          color: "blue-text-gradient",
        },
      ],
      image: eventsnow,
      source_code_link: "https://events-now-flax.vercel.app/",
    },
    {
      name: "chatApp",
      description:
        "Real-Time Chat App with video caling and screen sharing features built using MERN stack and daisyUI.",
      tags: [
        {
          name: "DaisyUI",
          color: "blue-text-gradient",
        },
        {
          name: "Stream",
          color: "blue-text-gradient",
        },
        {
          name: "Zustand",
          color: "blue-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://stream-app-e0li.onrender.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };