import SEO from '../../seo/seo';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../../utils/constants';
import Card from './card';

const Projects: FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  // Scroll kilidi
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  // Otomatik Slider
  useEffect(() => {
    if (
      !selectedId ||
      !selectedProject ||
      !selectedProject.images ||
      selectedProject.images.length === 0
    )
      return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedId, selectedProject]);

  const handleCardClick = (id: string) => {
    setSelectedId(id);
    setCurrentSlideIndex(0);
  };

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
              <Card
                key={project.id}
                project={project}
                onClick={() => handleCardClick(project.id)}
              />
            ))}
          </div>
          {createPortal(
            <AnimatePresence>
              {selectedId && selectedProject && (
                <motion.div
                  key="modal-root"
                  className="fixed inset-0 z-[9999] flex items-center justify-center"
                >
                  {/* Backdrop */}
                  <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute inset-0 bg-black/80 cursor-pointer"
                    aria-hidden="true"
                  />

                  {/* Modal Container */}
                  <div className="relative w-full h-full flex items-center justify-center p-4 pointer-events-none">
                    <motion.div
                      key="modal-card"
                      layoutId={`card-${selectedId}`}
                      className="w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col relative bg-white dark:bg-slate-900 border dark:border-white/10"
                    >
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 z-20 p-2 rounded-full shadow-lg bg-black/50 text-white hover:bg-black/70 transition-all cursor-pointer"
                      >
                        <FaTimes size={20} />
                      </button>

                      {/* SLIDER ALANI */}
                      <div className="w-full h-64 md:h-96 bg-gray-100 dark:bg-slate-800 relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentSlideIndex}
                            src={
                              selectedProject.images && selectedProject.images.length > 0
                                ? selectedProject.images[currentSlideIndex]
                                : selectedProject.cover
                            }
                            alt={selectedProject.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover absolute inset-0"
                            loading="lazy"
                          />
                        </AnimatePresence>

                        {selectedProject.images && selectedProject.images.length > 1 && (
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {selectedProject.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  idx === currentSlideIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="p-6 md:p-8 overflow-y-auto light:bg-white dark:bg-slate-900 flex-1">
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
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
        </div>
      </main>
    </>
  );
};

export default Projects;
