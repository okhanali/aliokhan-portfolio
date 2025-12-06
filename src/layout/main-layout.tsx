import { useEffect, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import useTheme from '../hooks/useTheme';
import BackgroundGlow from '../components/background-grow';

import darkBg from '../assets/darkmodehome.webp';
import lightBg from '../assets/lightmodehome.webp';

const MainLayout: FC = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-transparent text-slate-900 text-slate-200 transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-4 py-2 bg-cyan-600 text-white rounded-md font-bold shadow-lg"
      >
        İçeriğe Atla
      </a>

      {isHomePage && (
        <>
          <div
            aria-hidden="true"
            className={`fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out pointer-events-none -z-20
              ${theme === 'light' ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ backgroundImage: `url(${lightBg})` }}
          />

          <div
            aria-hidden="true"
            className={`fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out pointer-events-none -z-20
              ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ backgroundImage: `url(${darkBg})` }}
          />
        </>
      )}

      {!isHomePage && <BackgroundGlow />}

      <Header />

      <div id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 relative z-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
