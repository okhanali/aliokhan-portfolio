import type { FC } from 'react';
import { EXPERIENCE } from '../../utils/constants';

const WorkInfo: FC = () => {
  return (
    <section className="flex flex-col w-full" aria-labelledby="experience-title">
      {/* Başlık */}
      <h2
        id="experience-title"
        className="font-bold text-3xl mb-8 text-center md:text-left light:text-slate-800 dark:text-white"
      >
        DENEYİM
      </h2>
      <ol className="flex flex-col border-l-2 md:border-l-0 border-slate-300 dark:border-slate-700 md:border-none pl-4 md:pl-0">
        {EXPERIENCE.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[auto_1fr] md:grid-cols-[120px_auto_1fr] gap-x-4 md:gap-x-8 mb-2"
          >
            {/* Tarih */}
            <div className="hidden md:flex justify-end pt-1">
              <time
                className="font-semibold text-sm whitespace-nowrap light:text-slate-600 dark:text-slate-400"
                dateTime={item.date}
              >
                {item.date}
              </time>
            </div>

            {/* Zaman Çizgisi  */}
            <div className="hidden md:flex flex-col items-center relative" aria-hidden="true">
              {/* Nokta */}
              <div
                className="w-4 h-4 rounded-full z-10 mt-1.5 shadow-md border-2 border-white dark:border-slate-900 
                light:bg-purple-500 light:shadow-purple-300 
                dark:bg-cyan-400 dark:shadow-cyan-900"
              />

              {/* Çizgi */}
              {i !== EXPERIENCE.length - 1 && (
                <div className="w-0.5 flex-grow my-1 light:bg-slate-300 dark:bg-slate-700" />
              )}
            </div>

            {/* İçerik */}
            <div className="pb-10 md:pb-12 relative">
              {/* Mobil Tarih */}
              <time className="md:hidden text-xs font-bold mb-1 block light:text-purple-600 dark:text-cyan-400">
                {item.date}
              </time>

              {/* Şirket & Pozisyon */}
              <h3 className="font-bold text-xl leading-tight light:text-slate-900 dark:text-white">
                {item.company}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 mb-3">
                <p className="font-semibold text-sm light:text-slate-700 dark:text-slate-300">
                  {item.role}
                </p>
                <span
                  className="hidden sm:block w-1.5 h-1.5 rounded-full light:bg-slate-400 dark:bg-slate-600"
                  aria-hidden="true"
                />

                <span className="text-sm italic light:text-slate-500 dark:text-slate-400">
                  {item.place}
                </span>
              </div>

              {/* Açıklamalar */}
              <div className="space-y-2">
                {item.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-2 min-w-[6px] h-6px rounded-full light:bg-cyan-600 dark:bg-purple-400"
                      aria-hidden="true"
                    />
                    <p className="text-sm md:text-base leading-relaxed font-medium opacity-90 light:text-slate-700 dark:text-slate-300">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkInfo;
