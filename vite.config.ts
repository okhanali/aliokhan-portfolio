import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    Sitemap({
      hostname: 'https://www.aliokhan.com',
      dynamicRoutes: ['/', '/about', '/project', '/contact'],

      // Robots.txt
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404'],
        },
      ],

      // SEO İpuçları
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      generateRobotsTxt: true,
    }),
  ],
});
