import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';
import type { FC } from 'react';

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
      title={isDark ? 'Aydınlık Mod' : 'Karanlık Mod'}
      className="p-2.5 rounded-full border shadow-sm transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-200 light:hover:shadow-md bg-white/10 border-white/10 text-yellow-400 hover:bg-white/20"
    >
      {isDark ? (
        <FaSun
          size={20}
          className="transition-transform duration-500 hover:rotate-90"
          aria-hidden="true"
        />
      ) : (
        <FaMoon
          size={20}
          className="transition-transform duration-500 hover:-rotate-12"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
