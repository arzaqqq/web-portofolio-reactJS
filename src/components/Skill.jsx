import React from 'react'

import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Library'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: 'Server-side Scripting'
  },
  {
    imgSrc: '/images/codeigniter.svg',
    label: 'CodeIgniter',
    desc: 'PHP Framework'
  },
  {
    imgSrc: '/images/laravel.svg',
    label: 'Laravel',
    desc: 'PHP Framework'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'General-purpose Programming'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
];


const Skill = () => {
  return (
    <div>
      <section className="section" id='skill'>
        <div className="container" >
            <h2 className='headline-2 reveal-up'>
                Berbagai Tools yang saya kuasai
            </h2>

            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div  className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) =>(
                        <SkillCard
                             key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                           />
                    ))
                }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
