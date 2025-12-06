import { useEffect, useState, type FC } from 'react';
import { motion } from 'framer-motion';
import type { IProjects } from '../../types/type';

interface CardProps {
  project: IProjects;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ project, onClick }) => {
  const [currentImg, setCurrentImg] = useState(project.cover);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovered && project.images && project.images.length > 1) {
      let index = 0;
      interval = setInterval(() => {
        index = (index + 1) % project.images!.length;
        setCurrentImg(project.images![index]);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isHovered, project.images]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImg(project.cover);
  };

  return (
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
      className="
        group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 shadow-md hover:shadow-xl border 
        light:bg-white light:border-slate-200 
        dark:bg-slate-800/50 dark:border-white/10
      "
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* --- RESİM ALANI --- */}
      <div className="relative h-52 overflow-hidden light:bg-gray-100 dark:bg-slate-700">
        <motion.img
          key={currentImg}
          src={currentImg}
          alt={`${project.title}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* --- KART İÇERİĞİ --- */}
      <div className="p-5 flex flex-col flex-grow gap-4">
        <h3 className="text-xl font-bold line-clamp-1 light:text-slate-800 dark:text-white">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="
                text-xs px-2.5 py-1 rounded-md font-medium border 
                light:bg-slate-100 light:text-slate-600 light:border-slate-200
                dark:bg-white/5 dark:text-slate-300 dark:border-white/10
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies && project.technologies.length > 3 && (
            <span className="text-xs px-1 py-1 font-medium light:text-slate-500 dark:text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="w-full py-2.5 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-cyan-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-all active:scale-95 cursor-pointer"
          >
            Detayları Gör
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
