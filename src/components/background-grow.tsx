import type { FC } from 'react';
import { motion } from 'framer-motion';

const BackgroundGlow: FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none transition-colors duration-500 light:bg-slate-100 dark:bg-[#020617]">
      {/* Mor Işık */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[100px] transition-colors duration-500 light:bg-cyan-400/40 dark:bg-cyan-500/50"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      {/* Mavi Işık */}
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[100px] transition-colors duration-500 light:bg-purple-400/40 dark:bg-purple-500/50"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>
    </div>
  );
};

export default BackgroundGlow;
