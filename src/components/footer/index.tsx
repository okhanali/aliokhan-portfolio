import type { FC } from 'react';
import { NAV_LINKS } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t backdrop-blur-md transition-colors duration-300 light:bg-white/80 light:border-slate-200 bg-slate-900/50 border-white/5">
      <div className="container mx-auto py-8 px-4 flex flex-col items-center gap-6">
        {/* --- NAVIGASYON --- */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Alt Menü">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent scale-105'
                    : 'light:text-slate-600 light:hover:text-purple-600 text-slate-400 hover:text-cyan-400'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* --- TELİF HAKKI --- */}
        <div className="flex flex-col md:flex-row items-center gap-1 text-sm font-medium light:text-slate-500 text-slate-500">
          <p>&copy; {currentYear}</p>
          <p className="flex items-center gap-1">
            <span className="font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Ali Okhan
            </span>
            <span>| Tüm hakları saklıdır.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
