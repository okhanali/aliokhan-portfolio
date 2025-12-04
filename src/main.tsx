import { StrictMode } from 'react'; // 1. React Best Practice
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Uzantı (.tsx) yazmana gerek yok
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
