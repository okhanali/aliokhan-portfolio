import SEO from '../../seo/seo';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Ana Sayfa | Ali Okhan"
        description="Ali Okhan - Frontend Developer. Modern web teknolojileri ile kullanıcı odaklı, hızlı ve estetik arayüzler geliştiriyorum."
      />

      <main className="page-background min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-bold flex flex-col gap-8 md:gap-12 max-w-5xl mx-auto z-10 will-change-transform"
        >
          {/* --- BAŞLIK ALANI --- */}
          <div className="flex flex-col gap-3 md:gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-colors tracking-tight light:text-slate-950 text-white">
              Selam, Ben{' '}
              <span className="whitespace-nowrap bg-linear-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Ali Okhan
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-colors leading-tight light:text-slate-800 dark:text-slate-100">
              <span className="bg-linear-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent inline-block">
                Geleceğin Arayüzlerini
              </span>{' '}
              Kodluyorum
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-xl md:max-w-3xl mx-auto leading-relaxed light:text-slate-700 dark:text-slate-200 transition-colors duration-300">
            Modern web teknolojileriyle hızlı, ölçeklenebilir ve kullanıcı odaklı arayüzler
            geliştiriyorum.
          </p>

          {/* --- BUTONLAR --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <button
              onClick={() => navigate('/project')}
              className="home-btn w-full sm:w-auto"
              aria-label="Projeler sayfasını görüntüle"
            >
              Projelerimi İncele
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="
                w-full sm:w-auto cursor-pointer
                text-sm py-2.5 px-6 md:text-lg md:py-3.5 md:px-10 
                rounded-full font-bold transition-all duration-300 shadow-lg 
                border-2 border-cyan-500/50 
                
                light:text-slate-900 bg-white/50 
                hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent
                
                dark:text-white dark:bg-transparent dark:hover:shadow-cyan-500/40
              "
              aria-label="İletişim sayfasına git"
            >
              İletişime Geç
            </button>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
