import React from 'react'

// Components
import ProjectCard from './ProjectCard';

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
  ];

const Work = () => {
  return (
    <section className='section'
    id='work'
    >
        <div className="container">
            <h2 className='headline-2 mb-8 reveal-up'>
                Portofolio saya
            </h2>

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
            <a href="/project"
            className='btn btn-primary mt-5'>
            Load more</a></button>
            </div>
        </div>
    </section>
  )
}

export default Work
