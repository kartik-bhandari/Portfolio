import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { klogo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const span = entry.target.querySelector(".hash-span");
          if (span && span.id) {
            const link = navLinks.find((l) => l.id === span.id);
            if (link) {
              setActive(link.title);
            }
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when the section dominates the center viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each parent section container holding a hash-span
    const spans = document.querySelectorAll(".hash-span");
    spans.forEach((span) => {
      const section = span.closest("section");
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-black border-b-2 border-zinc-800`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}>
          <p className='text-white text-[22px] font-bold cursor-pointer flex tracking-tighter'>
            KB<span className='text-[#FFE500]'>_</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#FFE500]" : "text-secondary"} hover:text-white text-[16px] font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[24px] h-[24px] object-contain cursor-pointer filter invert'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black border-2 border-zinc-800 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-none shadow-[4px_4px_0px_#FFE500]`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-bold cursor-pointer text-[14px] uppercase tracking-wider ${
                    active === nav.title ? "text-[#FFE500]" : "text-secondary"
                  } hover:text-white transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;