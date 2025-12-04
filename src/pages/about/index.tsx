import type { FC } from 'react';
import { SKILLS } from '../../utils/constants';
import myProfile from '../../assets/me.jpg';
import WorkInfo from './workinfo';
import SEO from '../../seo/seo';

const About: FC = () => {
  return (
    <main className="page-background min-h-screen py-10 px-4 md:py-20">
      <SEO
        title="Hakkımda | Ali Okhan"
        description="Ali Okhan kimdir? Frontend Developer olarak teknik yeteneklerim, iş deneyimlerim ve kullandığım teknolojiler."
      />
      <h1 className="sr-only">Hakkımda - Ali Okhan</h1>

      {/* Container */}
      <div className="container mx-auto max-w-6xl">
        {/* ANA GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-12 lg:gap-20 items-start">
          {/* (Profil & Yetenekler) */}
          <aside className="flex flex-col items-center lg:sticky lg:top-24">
            {/* Profil Resmi */}
            <figure className="relative group">
              <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 bg-gradient-to-r from-cyan-600 to-purple-600" />
              <img
                src={myProfile}
                alt="Ali Okhan - Frontend Developer Profil Fotoğrafı"
                width={400}
                height={530}
                loading="eager"
                fetchPriority="high"
                className="relative rounded-2xl w-full max-w-md shadow-2xl object-cover aspect-[3/4] lg:aspect-auto"
              />
            </figure>

            {/* Yetenekler Kartı */}
            <div className="w-full max-w-sm lg:mt-10 -mt-12 z-10 relative">
              <div
                className="rounded-xl shadow-xl border backdrop-blur-md p-6 
                    light:bg-white/90 light:border-slate-200 
                    dark:bg-slate-800/90 dark:border-white/10"
              >
                <h2 className="font-bold text-xl text-center mb-4 light:text-slate-800 dark:text-white">
                  Teknik Yetenekler
                </h2>
                <ul
                  className="flex flex-wrap justify-center gap-4"
                  aria-label="Teknik Yetenekler Listesi"
                >
                  {SKILLS.map((skill, i) => (
                    <li
                      key={i}
                      className="group flex flex-col items-center justify-center gap-1 cursor-pointer"
                    >
                      <div className="p-2 rounded-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg light:bg-slate-100 dark:bg-white/5">
                        <skill.icon className={`text-2xl ${skill.className}`} aria-hidden="true" />
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase transition-colors light:text-slate-600 group-hover:light:text-purple-600 dark:text-slate-400 group-hover:dark:text-cyan-400">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* (İş Deneyimi) */}
          <article className="mt-8 lg:mt-0">
            <WorkInfo />
          </article>
        </div>
      </div>
    </main>
  );
};

export default About;
