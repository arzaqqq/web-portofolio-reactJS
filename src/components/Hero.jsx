import React from 'react'


const Hero = () => {
  return (
    <div>
      <section id='home'
       className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box 2-9 h-9 rounded-lg">
                        <img src="/images/icon.png"
                             width={40}
                             height={40}
                             alt="Miftahul Arzaq"
                             className='ing-cover' />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="realtive w-2 h-2 rounded-full bg-emerald-400 ">
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400"></span>
                        </span>

                        Terbuka untuk bekerja
                    </div>
                </div>
                <h2 className=''>
                    Ayo Mulai bekerja sama denagn saya agar bisnis anda lebih modern
                </h2>
                <div className="">
                    ButtonPrimary

                    ButtonOutline
                </div>

            </div>

            <div className="">
                <figure className=''>
                    <img 
                    src="/images/icon.png"
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
