import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-auto sm:h-screen mx-auto flex flex-col justify-start sm:block'>
      <div
        className="relative sm:absolute inset-x-0 top-0 sm:top-[120px] pt-[80px] sm:pt-0 max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 z-10"
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Kartik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className='sm:block hidden' />
            and web applications
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-5 sm:mt-8 flex flex-row flex-wrap gap-4 z-10 relative">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#804df0] text-white font-semibold text-[14px] py-2.5 px-6 rounded-lg shadow-md shadow-[#915EFF]/20 hover:shadow-[#915EFF]/40 hover:scale-[1.05] active:scale-95 transition-all duration-300 select-none text-center"
            >
              Get Resume
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[230px] sm:h-full mt-[-25px] sm:mt-0">
        <ComputersCanvas /> 
      </div>

      <div className='absolute bottom-10 sm:bottom-[30px] w-full hidden sm:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;