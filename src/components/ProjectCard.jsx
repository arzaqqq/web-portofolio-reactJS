import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ imgSrc, title, desc, tags, projectLink,livePreview, github, classes }) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"+classes}>
      {/* Gambar Proyek */}
      <figure className="relative h-60 w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
        />
        
        {/* Overlay & Icon saat hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Live Preview */}
          <div className="icon-hover">
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center "
          >
            <span className="material-symbols-rounded text-3xl">visibility</span>
            <span className="text-sm mt-1">Live Preview</span>
          </a>
          </div>

          {/* GitHub */}
          <div className="icon-hover">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center "
          >
            <span className="material-symbols-rounded text-3xl">code</span>
            <span className="text-sm mt-1">code</span>
          </a>
          </div>
        </div>
      </figure>

      {/* Informasi Proyek */}
      <div className="flex items-center justify-between gap-4">
        
        <div>
        <h3 className="title-1">{title}</h3>
        <p className=' font-thin text-[14px] text-slate-300 my-1'>{desc}</p>
        <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
                 <span key={label} 
                      className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                     {label}
            </span>
        ))}
        </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950">
        <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
        </span>
        </div>
      

       
      </div>

      {/* Tautan Proyek */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer" 
        className="inset-0 "
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // tags dideklarasikan sebagai array
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
