import type { FC } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import BackgroundGlow from '../background-grow';

const FirstLoadingPage: FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300 will-change-transform backface-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="hidden md:block absolute inset-0 z-0 opacity-40 pointer-events-none">
        <BackgroundGlow />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 w-full px-4 flex justify-center"
      >
        <div
          className="font-mono font-bold flex items-center justify-center gap-2 md:gap-4 text-center"
          aria-hidden="true"
        >
          {/* Sol Bracket (<) */}
          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-purple-600 dark:text-purple-400 transition-colors duration-300">
            &lt;
          </span>
          <div className="min-w-[180px] sm:min-w-[300px] md:min-w-[450px] flex justify-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium whitespace-nowrap text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Merhaba, Hoş Geldiniz...').pauseFor(500).start();
              }}
              options={{
                autoStart: true,
                delay: 45,
                deleteSpeed: 30,
                cursor: '_',
                cursorClassName: 'Typewriter__cursor text-purple-500',
              }}
            />
          </div>

          {/* Sağ Bracket (/>) */}
          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-purple-600 dark:text-purple-400 transition-colors duration-300">
            /&gt;
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FirstLoadingPage;
