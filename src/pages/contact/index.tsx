import type { FC } from 'react';
import Form from '../../components/form';
import { FaLinkedin } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../utils/constants';
import SEO from '../../seo/seo';

const Contact: FC = () => {
  return (
    <main className="page-background min-h-screen flex items-center justify-center py-12 px-4 md:px-8 overflow-hidden">
      <SEO
        title="İletişim | Ali Okhan"
        description="Benimle iletişime geçin. Proje teklifleri, iş birlikleri veya freelance çalışmalar için iletişim formu veya sosyal medya kanalları."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl w-full items-start lg:items-center">
        {/* (METİN & SOSYAL) */}
        <div className="flex flex-col gap-6 text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight pb-1">
            İletişime Geç
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-medium light:text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Yeni fırsatlara ve iş birliklerine her zaman açığım. Modern web teknolojileriyle
            geliştireceğimiz projelerde çözüm ortağınız olmamı isterseniz veya ekibinize katılmamla
            ilgili görüşmek isterseniz formu doldurabilirsiniz.
          </p>

          <address className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-4 not-italic">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ali Okhan LinkedIn Profilini yeni sekmede ziyaret et"
              className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent light:bg-white light:shadow-sm light:hover:shadow-md light:hover:border-cyan-200 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-cyan-500/30"
            >
              <div className="p-3 rounded-full light:bg-cyan-50 dark:bg-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin
                  aria-hidden="true"
                  className="text-3xl text-[#0077B5] dark:text-cyan-400"
                />
              </div>

              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-bold uppercase tracking-wider light:text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  LinkedIn
                </span>
                <span className="text-lg font-bold bg-gradient-to-r light:from-slate-800 light:to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-purple-600 transition-all">
                  @aliokhan
                </span>
              </div>
            </a>
          </address>
        </div>

        {/* (FORM) */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-full">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
