import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Impor ikon GitHub

const ProjectCard = ({ imgSrc, title, desc, tags, projectLink, livePreview, github, classes }) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
      {/* Gambar Proyek */}
      <figure className="relative h-60 w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
        />
        
        {/* Overlay & Icon saat hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
          {/* Live Preview */}
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center icon-hover"
          >
            <span className="material-symbols-rounded text-3xl">visibility</span>
            <span className="text-sm mt-1">Live Preview</span>
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center icon-hover"
          >
             <span className="material-symbols-rounded text-3xl">code</span>
            <span className="text-sm mt-1">Code</span>
          </a>
        </div>
      </figure>

      {/* Informasi Proyek */}
      <div className="flex items-center justify-between gap-4">
        <div >
          <h3 className="title-1">{title}</h3>
          <p className='font-thin text-[14px] text-slate-300 my-1'>{desc}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                {label}
              </span>
            ))}
          </div>
        </div>

        
      </div>

      {/* Tautan Proyek */}
      <a href={github} target="_blank" rel="noopener noreferrer" className=" absolute inset-0 cursor-pointer z-20"></a>
    </div> 
  );
};

export default ProjectCard;