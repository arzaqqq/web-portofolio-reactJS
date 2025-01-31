import React, { useState, useEffect, useRef } from 'react';

// Library React-Count-up
import CountUp from 'react-countup';

const aboutItems = [
  { 
    label: 'Projek selesai', 
    number: 45 
  },
  { 
    label: 'tahun pengalaman', 
    number: 4
  }
];

const About = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null); // Ref untuk section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true); // Mulai animasi CountUp saat elemen terlihat
        }
      },
      {
        threshold: 0.5, // Membuat elemen terdeteksi saat 50% bagian elemen masuk viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Bersihkan observer
      }
    };
  }, []);

  return (
    <section id='about' className='section' ref={sectionRef}>
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <h2 className='mb-5 text-4xl font-semibold text-zinc-100'>Tentang saya</h2>
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[62ch]'>
          Halo, Nama saya Miftahul Arzaq, saya adalah orang yang sangat aktif belajar 
          berbagai hal yang berhubungan dengan teknologi, saya ahli dalam berbagai hal 
          seperti UI/UX, Front-end, Back-end, dan Machine learning.   
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  {/* Hanya tampilkan CountUp jika elemen sudah masuk ke viewport */}
                  <span className='text-2xl font-semibold md:text-4xl'>
                    {startCounting ? (
                      <CountUp start={0} end={number} duration={3} />
                    ) : (
                      number
                    )}
                  </span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/icon.png"
              alt="logo"
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
