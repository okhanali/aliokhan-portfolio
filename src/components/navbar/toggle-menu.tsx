import { useState, type FC } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import ThemeToggle from './theme-toggle';

// --- ANIMASYON AYARLARI ---
const menuVars: Variants = {
  initial: { x: '100%', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.2, staggerChildren: 0.09, staggerDirection: 1 } },
};

const mobileLinkVars: Variants = {
  initial: { y: 20, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const ToggleMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* --- HAMBURGER BUTONU --- */}
      <button
        onClick={toggleMenu}
        className="relative z-[60] p-2 focus:outline-none group cursor-pointer"
        aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <div className="space-y-1.5" aria-hidden="true">
          <motion.span
            animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="block h-0.5 w-7 rounded-full bg-current transition-colors light:bg-slate-900 dark:bg-white"
          />
          <motion.span
            animate={{ width: isOpen ? 0 : 24, opacity: isOpen ? 0 : 1 }}
            className="block h-0.5 w-5 rounded-full bg-current transition-colors light:bg-slate-900 dark:bg-white group-hover:w-7"
          />
          <motion.span
            animate={{ rotateZ: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="block h-0.5 w-7 rounded-full bg-current transition-colors light:bg-slate-900 dark:bg-white"
          />
        </div>
      </button>

      {/* --- MENÜ PANELİ --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* 2. Sidebar */}
            <motion.div
              id="mobile-navigation"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobil Navigasyon Menüsü"
              className="fixed top-0 right-0 h-screen w-72 z-50 flex flex-col items-center justify-center shadow-2xl border-l light:bg-white/95 light:border-slate-200 dark:bg-slate-900/95 dark:border-white/10 backdrop-blur-xl"
            >
              {/* Linkler Container */}
              <motion.nav
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-8 items-center text-center w-full"
              >
                {NAV_LINKS.map((link) => (
                  <MobileNavLink
                    key={link.path}
                    to={link.path}
                    title={link.title}
                    onClick={closeMenu}
                  />
                ))}

                {/* Çizgi Ayırıcı */}
                <motion.div
                  variants={mobileLinkVars}
                  className="w-1/2 h-px light:bg-slate-200 dark:bg-white/10 my-2"
                  role="separator"
                />

                {/* Sosyal Medya & Tema */}
                <motion.div variants={mobileLinkVars} className="flex items-center gap-6">
                  <div className="flex gap-6">
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profilim"
                      className="transition-transform hover:scale-110 light:text-cyan-600 dark:text-cyan-400"
                    >
                      <FaLinkedin size={28} aria-hidden="true" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profilim"
                      className="transition-transform hover:scale-110 light:text-purple-600 dark:text-purple-400"
                    >
                      <FaGithub size={28} aria-hidden="true" />
                    </a>
                  </div>

                  <ThemeToggle />
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleMenu;

// --- ALT BİLEŞEN: LİNKLER ---
const MobileNavLink = ({
  to,
  title,
  onClick,
}: {
  to: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <motion.div variants={mobileLinkVars} className="overflow-hidden w-full">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `block text-2xl font-bold font-mono tracking-wide transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent scale-110'
              : 'light:text-slate-700 dark:text-slate-300 hover:light:text-slate-900 hover:dark:text-white'
          }`
        }
      >
        {title}
      </NavLink>
    </motion.div>
  );
};
