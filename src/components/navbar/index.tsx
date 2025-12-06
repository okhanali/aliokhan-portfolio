import { type FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import OpenMenu from './toggle-menu';
import { NAV_LINKS, SOCIAL_LINKS } from '../../utils/constants';
import ThemeToggle from './theme-toggle';

const Navbar: FC = () => {
  return (
    <>
      <nav
        className="max-md:hidden flex items-center gap-4 lg:gap-8 lg:text-xl font-medium"
        aria-label="Masaüstü Navigasyon"
      >
        {/* --- İÇ SAYFA LİNKLERİ --- */}
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-bold scale-105'
                  : 'light:text-slate-700 text-slate-200 hover:text-cyan-600 hover:text-cyan-400'
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}

        {/* --- AYIRICI ÇİZGİ & SOSYAL MEDYA --- */}
        <div className="flex items-center gap-5 pl-4 border-l border-slate-300 border-slate-700 h-8">
          {/* LinkedIn - Dış Link */}
          <a
            href={SOCIAL_LINKS.linkedin || 'https://linkedin.com'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profilim"
            className="group"
          >
            <FaLinkedin
              className="text-2xl lg:text-3xl light:text-slate-600 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-[#0077B5] group-hover:text-cyan-400"
              aria-hidden="true"
            />
          </a>

          {/* GitHub - Dış Link */}
          <a
            href={SOCIAL_LINKS.github || 'https://github.com'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilim"
            className="group"
          >
            <FaGithub
              className="text-2xl lg:text-3xl light:text-slate-600 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-black group-hover:text-white light:group-hover:text-purple-500"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* --- TEMA BUTONU --- */}
        <div className="pl-2">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobil Menü Bileşeni */}
      <OpenMenu />
    </>
  );
};

export default Navbar;
