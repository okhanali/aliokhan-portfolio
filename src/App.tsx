import { useEffect, useState, type FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main-layout';
import FirstLoadingPage from './components/loader/first-loading-page';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Projects = lazy(() => import('./pages/project'));
const Contact = lazy(() => import('./pages/contact'));

const NotFound = lazy(() => import('./pages/not-found'));

const App: FC = () => {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasVisited');
    }
    return true;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <FirstLoadingPage />
      ) : (
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
