import type { FC } from 'react';
import { motion } from 'framer-motion';

import { FaLinkedin } from 'react-icons/fa';
import SEO from '../../seo/seo';
import { SOCIAL_LINKS } from '../../utils/constants';
import Form from '../../components/form';

const Contact: FC = () => {
  return (
    <main className="page-background min-h-screen flex items-center justify-center py-24 px-4 md:px-8">
      <SEO
        title="İletişim | Ali Okhan"
        description="Benimle iletişime geçin. Proje teklifleri, iş birlikleri veya freelance çalışmalar için iletişim formu."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl w-full items-start lg:items-center">
        {/* SOL TARA (METİN) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight pb-1">
            İletişime Geç
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-medium light:text-slate-600 text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Yeni fırsatlara ve iş birliklerine her zaman açığım. Modern web teknolojileriyle
            geliştireceğimiz projelerde çözüm ortağınız olmamı isterseniz veya ekibinize katılmamla
            ilgili görüşmek isterseniz formu doldurabilirsiniz.
          </p>

          <address className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-4 not-italic">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border 
                light:bg-white light:shadow-sm light:hover:shadow-md light:border-slate-200
                bg-white/5 hover:bg-white/10 border-white/5
              "
            >
              <div className="p-3 rounded-full light:bg-cyan-50 bg-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-3xl light:text-[#0077B5] text-cyan-400" />
              </div>

              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-bold uppercase tracking-wider transition-colors light:text-slate-500 light:group-hover:text-cyan-600 text-slate-400 group-hover:text-cyan-300">
                  LinkedIn
                </span>
                <span className="text-lg font-bold transition-colors light:text-slate-800 light:group-hover:text-cyan-600 text-white group-hover:text-cyan-300">
                  @aliokhan
                </span>
              </div>
            </a>
          </address>
        </motion.div>

        {/* SAĞ TARAF (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-lg lg:max-w-full">
            <Form />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
