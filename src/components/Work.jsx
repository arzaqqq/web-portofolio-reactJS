import React from 'react'

// Components
import ProjectCard from './ProjectCard';

import { Link } from 'react-router-dom';

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
    
  ];

const Work = () => {
  return (
    <section className='section'
    id='work'
    >
        <div className="container">
        <h2 className='headline-2 mb-3 reveal-up'>
          Portfolio
        </h2>
        <p className='text-zinc-400 mt-1 mb-5 max-w-[50ch] reveal-up'>
        Explore a curated collection of my work, showcasing the projects and skills I’ve mastered over time.
            </p>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, desc, tags,github, livePreview}, key) => (
                   <ProjectCard
                   key={key}
                   imgSrc={imgSrc}
                   title={title}
                   desc={desc}
                   tags={tags}
                   github={github}
                   livePreview={livePreview}
                   className="reveal-up"/>
                ))}
            </div>
            <div className="flex justify-center">
            <button>
            <Link to="/project"
            className='btn bg-sky-500 hover:bg-sky-400 text-white mt-5'>
            Load more</Link></button>
            </div>
        </div>
    </section>
  )
}

export default Work
