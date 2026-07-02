import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full min-h-[70vh] sm:min-h-[85vh] flex items-center justify-start bg-black pt-[100px] pb-12 border-b-2 border-zinc-800 overflow-hidden'>
      <div className={`${styles.paddingX} w-full flex flex-row items-center justify-between gap-10`}>
        {/* Left Side: Text and CTA */}
        <div className="flex-[1.2] flex flex-row items-start gap-5">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#FFE500]' />
            <div className='w-1 sm:h-[300px] h-32 violet-gradient' />
          </div>

          <div className="text-left flex flex-col items-start">
            {/* Brutalist Tag */}
            <div className="inline-block bg-[#FFE500] text-black text-[11px] font-bold tracking-[2px] px-3 py-1 mb-4 uppercase select-none">
              Hello!
            </div>

            <h1 className={`${styles.heroHeadText} text-white text-left`}>
              I am <br />
              Kartik <br />
              Bhandari <br />
            </h1>
            <p className={`${styles.heroSubText} text-left`}>
              I develop user interfaces and web applications — full-stack development with AI integrations baked in.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-row flex-wrap justify-start gap-4 z-10 relative">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFE500] text-black border-2 border-zinc-800 font-bold text-[13px] tracking-wider py-2.5 px-6 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all select-none text-center"
              >
                GET RESUME
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Brutalist Code Panel & Geometric Programming Figures */}
        <div className="hidden lg:flex flex-1 justify-center items-center relative h-[420px] select-none">
          {/* Wireframe Grid Backdrop */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] border border-zinc-800" />
          
          {/* Brutalist Code Panel */}
          <div className="relative bg-[#121212] border-2 border-zinc-800 p-6 w-[360px] shadow-[8px_8px_0px_#FFE500] z-0">
            {/* Card Header (Mac style buttons but square) */}
            <div className="flex flex-row items-center gap-2 border-b-2 border-zinc-800 pb-3 mb-4">
              <div className="w-3 h-3 rounded-none border border-zinc-800 bg-[#FFE500]" />
              <div className="w-3 h-3 rounded-none border border-zinc-800 bg-white" />
              <div className="w-3 h-3 rounded-none border border-zinc-800 bg-[#555]" />
              <span className="text-[10px] text-secondary font-bold uppercase tracking-wider ml-auto font-mono">kartik.js</span>
            </div>
            
            {/* Mock Code Block */}
            <div className="font-mono text-[12px] text-left space-y-2.5 leading-relaxed">
              <div>
                <span className="text-[#FFE500] font-bold">const</span> developer = {"{"}
              </div>
              <div className="pl-4 text-secondary">
                name: <span className="text-white">"Kartik"</span>,
              </div>
              <div className="pl-4 text-secondary">
                stack: [<span className="text-[#FFE500]">"Next.js"</span>, <span className="text-[#FFE500]">"React"</span>],
              </div>
              <div className="pl-4 text-secondary">
                focus: <span className="text-white">"Full-stack + AI"</span>
              </div>
              <div>{"};"}</div>
            </div>
          </div>
          
          {/* Floating Terminal Prompt Symbol box */}
          <div className="absolute top-8 -left-6 bg-black border-2 border-zinc-800 px-3 py-2 text-[#FFE500] font-mono font-bold text-xs tracking-tighter shadow-[4px_4px_0px_#fff] z-10">
            &gt;_ terminal
          </div>
          
          {/* Floating Coding Brackets Tag box */}
          <div className="absolute -bottom-2 right-2 bg-[#FFE500] text-black border-2 border-zinc-800 px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_#000] z-10">
            &lt;/&gt; code
          </div>
          
          {/* Solid Circle */}
          <div className="absolute -top-6 right-12 w-10 h-10 rounded-full bg-[#FFE500] border-2 border-zinc-800 shadow-[2px_2px_0px_#000] z-0" />
          
          {/* Dashed square */}
          <div className="absolute bottom-16 -left-12 w-16 h-16 border-2 border-dashed border-[#FFE500]/40 z-0 animate-[spin_25s_linear_infinite]" />
        </div>
      </div>
    </section>
  )
}

export default Hero;