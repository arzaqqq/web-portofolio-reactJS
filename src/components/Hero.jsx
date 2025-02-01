import React from 'react'

// COMPONENTS
import {ButtonPrimary, ButtonOutline} from "./Button";


// Library typeit
import TypeIt from "typeit-react";

const Hero = () => {
  return (
    <div>
      <section id='home'
       className="pt-20 lg:pt-30">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box 2-9 h-9 rounded-lg">
                        <img src="/images/icon.png"
                             width={40}
                             height={40}
                             alt="Miftahul Arzaq"
                             className='img-cover' />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        <TypeIt className="text-blue-400" options={{ 
                                strings:['Terbuka untuk bekerja'],
                                cursorChar: "_",
                                speed: 50, 
                                deleteSpeed: 50, 
                                nextStringDelay: 1000, 
                                loop: true, 
                                loopDelay: 8500, 
                                       
                         }}/>
                           
                        
                    </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                <TypeIt
                      options={{
                      strings: ["Welcome to Miftahul Arzaq Portofolio"],
                      speed: 100,
                      waitUntilVisible: true,
                      cursorChar: "🔥",
                      afterComplete: (instance) => {
                        instance.destroy(); // Menghapus efek typing & kursor setelah selesai
                      },
                                 }}
                                 />
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary label="Download CV" icon="download"/>

                    <ButtonOutline href="#about" label='scroll down' icon="arrow_downward" />
                </div>

            </div>

            <div className="hidden lg:block">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img 
                    src="/images/semiformal.png"
                    width={656}
                    height={800}
                    alt="Miftahul Arzaq"
                    className='w-full' />
                </figure>
            </div>
        </div>
       </section>
    </div>
    
  )
}

export default Hero