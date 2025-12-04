import SEO from '../../seo/seo';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../../utils/constants'; // Constant dosyasından çekiyoruz
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
      <SEO
        title="Projelerim | Ali Okhan"
        description="Ali Okhan'ın bugüne kadar geliştirdiği, modern web teknolojileri (React, Next.js, TypeScript) kullanılarak hazırlanmış profesyonel projelerin bir derlemesi."
      />

      <main className="page-background min-h-screen py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* --- BAŞLIK --- */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Projelerim
          </h1>

          {/* --- GRID YAPISI --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
            ))}
          </div>

          {/* --- MODAL (POPUP) --- */}
          <AnimatePresence>
            {selectedId && selectedProject && (
              <>
                {/* 1. Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
                  aria-hidden="true"
                />

                {/* 2. Modal Penceresi */}
                <div
                  className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-title"
                >
                  <motion.div
                    layoutId={`card-${selectedId}`}
                    className="w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative border light:bg-white light:border-slate-200 dark:bg-slate-900 dark:border-white/10"
                  >
                    {/* Kapat Butonu */}
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 z-20 p-2 rounded-full shadow-lg transition-transform hover:rotate-90 hover:scale-110 light:bg-white light:text-slate-800 dark:bg-black/50 dark:text-white"
                      aria-label="Projeyi Kapat"
                    >
                      <FaTimes size={20} />
                    </button>

                    {/* VIDEO ALANI */}
                    <div className="w-full aspect-video bg-black flex items-center justify-center relative group">
                      <video
                        src={selectedProject.demoVideo}
                        controls
                        autoPlay
                        playsInline
                        poster={selectedProject.cover}
                        title={`${selectedProject.title} tanıtım videosu`}
                        className="w-full h-full object-contain"
                      >
                        <track kind="captions" />
                        Tarayıcınız video etiketini desteklemiyor.
                      </video>
                    </div>

                    {/* İÇERİK ALANI */}
                    <div className="p-6 md:p-8 overflow-y-auto light:bg-white dark:bg-slate-900">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <h2
                          id="modal-title"
                          className="text-2xl md:text-3xl font-bold light:text-slate-900 dark:text-white"
                        >
                          {selectedProject.title}
                        </h2>

                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${selectedProject.title} projesinin GitHub kodlarını incele`}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all hover:scale-105 shadow-md dark:bg-white light:hover:bg-slate-800 light:bg-white dark:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white light:hover:text-white"
                        >
                          <FaGithub size={20} />
                          <span>GitHub</span>
                        </a>
                      </div>

                      <div
                        className="flex flex-wrap gap-2 mb-6"
                        aria-label="Projede kullanılan teknolojiler"
                      >
                        {selectedProject.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium border rounded-full light:bg-slate-100 light:text-slate-600 light:border-slate-200 dark:bg-white/ dark:text-slate-300 dark:border-white/10"
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
