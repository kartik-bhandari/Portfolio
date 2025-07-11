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
    homyz,
    threejs,
    skyEstate,
    ragvi,
    chatApp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "skyEstate",
      description:
        "Full stack, responsive Real Estate website for Buying, Selling and Renting Houses. Build using react and tailwind. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
      ],
      image: skyEstate,
      source_code_link: "https://skyestate.onrender.com/",
    },
        {
      name: "chatApp",
      description:
        "Real-Time Chat App with video caling and screen sharing features built using MERN stack and daisyUI.",
      tags: [
        {
          name: "daisyUI",
          color: "blue-text-gradient",
        },
        {
          name: "Stream",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "blue-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://stream-app-e0li.onrender.com",
    },
        {
      name: "ragviDesign",
      description:
        "A fully functional and responsive website for an interior design company based in Noida, India.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
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
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: monkeypie,
      source_code_link: "https://monkeypie.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };