import SEO from '../../seo/seo';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../../utils/constants';
import Card from './card';

const Projects: FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <>
      <SEO title="Projelerim | Ali Okhan" description="Ali Okhan Frontend Projeleri" />

      <main className="page-background min-h-screen py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Projelerim
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
            ))}
          </div>

          <AnimatePresence>
            {selectedId && selectedProject && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="fixed inset-0 z-40 bg-black/80 cursor-pointer"
                  aria-hidden="true"
                />

                {/* 2. Modal Penceresi */}
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                  <motion.div
                    layoutId={`card-${selectedId}`}
                    className="w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative border light:bg-white dark:bg-slate-900 dark:border-white/10"
                  >
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 z-20 p-2 rounded-full shadow-lg bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
                    >
                      <FaTimes size={20} />
                    </button>

                    {/* VIDEO ALANI - DÜZELTİLDİ */}
                    <div className="w-full aspect-video bg-black flex items-center justify-center relative">
                      <video
                        src={selectedProject.demoVideo}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={selectedProject.cover}
                        className="w-full h-full object-contain"
                      >
                        Tarayıcınız video etiketini desteklemiyor.
                      </video>
                    </div>

                    <div className="p-6 md:p-8 overflow-y-auto light:bg-white dark:bg-slate-900">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold light:text-slate-900 dark:text-white">
                          {selectedProject.title}
                        </h2>

                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all hover:scale-105 shadow-md bg-slate-800 text-white hover:bg-slate-700"
                        >
                          <FaGithub size={20} />
                          <span>GitHub</span>
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium border rounded-full light:bg-slate-100 dark:bg-white/5 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-lg leading-relaxed light:text-slate-600 dark:text-slate-300">
                        {selectedProject.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default Projects;
