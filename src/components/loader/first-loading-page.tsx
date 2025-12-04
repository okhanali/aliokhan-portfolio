import type { FC } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import BackgroundGlow from '../background-grow';

const FirstLoadingPage: FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden light:bg-white dark:bg-black transition-colors duration-300"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackgroundGlow />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-4 w-full flex justify-center"
        role="status"
        aria-label="Merhaba, Hoş Geldiniz"
      >
        <div
          className="font-mono font-bold flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 text-center"
          aria-hidden="true"
        >
          {/* Sol Bracket */}
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl light:text-[#7d2cc9] dark:text-[#a855f7]">
            &lt;
          </span>

          {/* Yazı Alanı */}
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium whitespace-nowrap light:text-slate-800 dark:text-slate-300">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Merhaba, Hoş Geldiniz...').start();
              }}
              options={{
                autoStart: true,
                delay: 50,
                cursor: '_',
              }}
            />
          </div>

          {/* Sağ Bracket */}
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl light:text-[#7d2cc9] dark:text-[#a855f7]">
            /&gt;
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstLoadingPage;
