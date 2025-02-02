import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import ReactLenis from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


import { Link } from 'react-router-dom';



gsap.registerPlugin(ScrollTrigger);



const works = [
  {
    imgSrc: '/images/portfolio/portfolio-diskominfo.png',
    title: 'Website Diskominfo Pesawaran', 
    desc:'Redesign dan redevelop Website Diskominfo Pesawaran for 4 Months',
    tags: ['PHP', 'CI', 'Bootstrap', 'JQuery' ,'XAMPP'],
    github: '',
    livePreview:'https://kominfo.pesawarankab.go.id/',
    githubDisabled: true
  },
  {
    imgSrc: '/images/portfolio/potrfolio-simpel.png',
    title: 'Website Sistem Informasi Penjaminan Mutu Pembelajara',
    desc:'Develop a Website Sistem Informasi Penjaminan Mutu Pembelajaran for 3 Months as a backend',
    tags: ['PHP', 'Laravell','Filament', 'Tailwind CSS', 'JQuery' ,'XAMPP'],
    github: 'https://github.com/arzaqqq/Sistem-Informasi-Penjaminan-Mutu-Pembelajaran',
    livePreview:'https://mutu.sipil.unimal.ac.id/'
  },
 
  {
    imgSrc: '/images/portfolio/portfolio-maggotic.png',
    title: 'Website Maggotic',
    desc: 'Website Maggotic is website for selling maggot',
    tags: ['PHP', 'CI', 'Tailwind', 'Jquery'],
    livePreview: 'https://maggotic.my.id/',
    github: 'https://github.com/arzaqqq/website-maggotic',
  
  },
  {
    imgSrc: '/images/portfolio/portfolio-klinik-sehat.png',
    title: 'website Healt Medical Center',
    desc: 'website Healt Medical Center for personal project',
    tags: ['PHP', 'Laravel', 'Booostrap', 'Jquery'],
    github: 'https://github.com/codewithsadee-org/wealthome',
    livePreview: '',
  },
  {
    imgSrc: '/images/portfolio/portfolio-admin-kasir.png',
    title: 'Cashier Dashboard',
    desc: 'Cashier Dashboard for personal project',
    tags: ['Laravel', 'PHP', 'Booostrap', 'Jquery'],
    github: 'https://github.com/arzaqqq/kasir-filament-laravel',
    livePreview: '',
  },
  {
    imgSrc: '/images/portfolio/portfolio-mobile-diet.png',
    title: 'Mobile Diet App',
    desc: 'Mobile Diet App for a team project in the Mobile Programming subject.',
    tags: ['Java', 'Android Studio'],
    github: 'https://github.com/Mazoelian/DietMobile.git',
    livePreview:''
  },
  {
    imgSrc: '/images/portfolio/portfolio-mobile-game-education.png',
    title: 'Mobile Game education App',
    desc: 'Mobile Game education App for a team project in the fianl project in Mobile Programming subject.',
    tags: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/Mazoelian/Game-Edukasi-Mobile',
    livePreview:''
  },
  {
    imgSrc: '/images/portfolio/portfolio-figma-mobileeducation.png',
    title: 'Design Education App Mobile',
    desc: 'Design Education App Mobile for a test intership as UI/UX Desaigner.',
    tags: ['UI UX', 'Figma', 'Mobile'],
    github: '',
    livePreview:'https://www.figma.com/proto/e4AZmz95Ny0yXNpIvs6TI9/video-pembelajaran?node-id=3-2&t=uLD4T9izByyBM6c4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A5&show-proto-sidebar=1'
  },
  {
    imgSrc: '/images/portfolio/portfolio-figma-ecommerceweb.png',
    title: 'Design E-Commerce web',
    desc: 'Design E-Commerce web for client as freelancer.',
    tags: ['UI UX', 'Figma', 'Website'],
    github: '',
    livePreview:'https://www.figma.com/proto/9IwYDfQTSzptS22dThfp7t/e-commerse?node-id=2313-19&t=qHdjRp5xFwPC9IO1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2711%3A321'
  },
];


const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas setiap kali halaman dimuat
  }, []);
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.fromTo(element, 
        { y: 50, opacity: 0 }, // Mulai dari posisi di bawah dan transparan
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root classes="reveal-up">
      <section className='section' id='work'>
        <div className="container">
         <div className="flex justify-between">
         <h2 className='headline-2 mb-8 reveal-up'>Portofolio saya</h2>
          <Link to="/" className='btn btn-primary reveal-up'>Back</Link>
         </div>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, desc, tags, github, livePreview }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                desc={desc}
                tags={tags}
                github={github}
                livePreview={livePreview}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default Projects;
