import type { FC } from 'react';

import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

const Header: FC = () => {
  return (
    <header className="flex justify-center pt-8 px-4 relative z-50">
      <div
        className="flex items-center justify-between w-full max-w-7xl rounded-full shadow-lg border transition-all duration-300
                      py-3 px-4 md:px-6 lg:px-8 md:py-4
                      light:bg-white/95 light:border-black/5 light:shadow-slate-200
                      bg-slate-900/95 border-white/10 shadow-black/50"
      >
        {/* (LOGO)  */}
        <div className="flex-1 min-w-0 flex items-center mr-2 lg:mr-4">
          <Link
            to="/"
            className="group flex items-center text-base sm:text-xl md:text-xl lg:text-3xl font-mono font-bold whitespace-nowrap overflow-hidden text-ellipsis bg-gradient-to-r bg-clip-text text-transparent light:from-cyan-600 light:to-purple-600 from-cyan-400 to-purple-500 hover:opacity-80 transition-opacity"
            aria-label="Ali Okhan - Ana Sayfa"
          >
            <span aria-hidden="true" className="flex items-center">
              <span className="light:text-slate-600 text-slate-400 mr-1 opacity-70 group-hover:text-cyan-500 transition-colors">
                &lt;
              </span>
              <span className="inline-block min-w-[120px] sm:min-w-[160px] lg:min-w-[180px]">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Ali Okhan')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('React Dev')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Frontend Dev')
                      .pauseFor(1500)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: '|',
                  }}
                />
              </span>

              <span className="light:text-slate-600 text-slate-400 ml-1 opacity-70 group-hover:text-purple-500 transition-colors">
                /&gt;
              </span>
            </span>
          </Link>
        </div>

        {/* (MENU) */}
        <div className="shrink-0 flex items-center">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
