import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../seo/seo';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <main className="page-background min-h-[80vh] flex items-center justify-center px-4 text-center">
      <SEO
        title="404 - Sayfa Bulunamadı | Ali Okhan"
        description="Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek projelerimi inceleyebilirsiniz."
        noIndex={true}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto flex flex-col items-center gap-6 md:gap-8"
      >
        {/* --- 404 METNİ --- */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
          404
        </h1>

        {/* --- AÇIKLAMA --- */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold light:text-slate-800 dark:text-white">
            Oops! Kaybolmuş gibisin.
          </h2>
          <p className="text-base md:text-lg font-medium light:text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Aradığın sayfa uzayın derinliklerinde kaybolmuş olabilir veya hiç var olmamış olabilir.
          </p>
        </div>

        {/* --- BUTON --- */}
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-8 py-3.5 rounded-full font-bold text-white shadow-lg shadow-cyan-500/25 bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Ana Sayfaya Dön"
        >
          Ana Sayfaya Dön
        </button>
      </motion.div>
    </main>
  );
};

export default NotFound;
