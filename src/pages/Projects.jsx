import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import ReactLenis from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    desc:'ini projek bisasa aja tapi keren kok wkwkw',
    tags: ['API', 'MVC', 'Development', 'PHP' ,'js'],
    github: 'https://github.com/arzaqqq/',
    livePreview:'https://kominfo.pesawarankab.go.id/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    github: 'https://pixstock-official.vercel.app/',
    livePreview:'https://codewithsadee.vercel.app/'
  },
 
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    github: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    github: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    livePreview:'https://codewithsadee.vercel.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    livePreview:'https://codewithsadee.vercel.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    livePreview:'https://codewithsadee.vercel.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    livePreview:'https://codewithsadee.vercel.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    github: 'https://github.com/codewithsadee/vcard-personal-portfolio',
    livePreview:'https://codewithsadee.vercel.app/'
  },
];


const Projects = () => {
  
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
    <ReactLenis root>
      <section className='section' id='work'>
        <div className="container">
         <div className="flex justify-between">
         <h2 className='headline-2 mb-8 reveal-up'>Portofolio saya</h2>
          <a href="/" className='btn btn-primary reveal-up'>Back</a>
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
