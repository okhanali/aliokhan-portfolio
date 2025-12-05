import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import type {
  IExperience,
  IFromField,
  INavLink,
  IProjects,
  ISkills,
  ISocialLinks,
} from '../types/type';

export const NAV_LINKS: INavLink[] = [
  {
    title: 'Anasayfa',
    path: '/',
  },
  {
    title: 'Hakkımda',
    path: '/about',
  },
  {
    title: 'Projeler',
    path: '/project',
  },
  {
    title: 'İletişim',
    path: '/contact',
  },
];

export const SOCIAL_LINKS: ISocialLinks = {
  linkedin: 'https://www.linkedin.com/in/aliokhan/',
  github: 'https://github.com/okhanali',
};

export const SKILLS: ISkills[] = [
  { name: 'HTML5', icon: SiHtml5, className: 'text-[#E34F26] size-10 max-sm:size-5' },

  { name: 'CSS3', icon: SiCss3, className: 'text-[#1572B6] size-10 max-sm:size-5' },

  {
    name: 'React',
    icon: SiReact,
    className: 'text-sky-600 dark:text-[#61DAFB] size-10 max-sm:size-5',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    className: 'light:text-[#d6bf04] dark:text-[#F7DF1E] size-10 max-sm:size-5',
  },
  { name: 'TypeScript', icon: SiTypescript, className: 'text-[#3178C6] size-10 max-sm:size-5' },

  {
    name: 'Next.js',
    icon: SiNextdotjs,
    className: 'light:text-black dark:text-white size-10 max-sm:size-5',
  },

  { name: 'Tailwind', icon: SiTailwindcss, className: 'text-[#06B6D4] size-10 max-sm:size-5' },

  { name: 'Git', icon: SiGit, className: 'text-[#F05032] size-10 max-sm:size-5' },

  {
    name: 'GitHub',
    icon: SiGithub,
    className: 'light:text-[#181717] dark:text-white size-10 max-sm:size-5',
  },
];

export const EXPERIENCE: IExperience[] = [
  {
    date: 'January 24 - July 25',
    company: 'Didiyos',
    role: 'Frontend Developer',
    place: 'İstanbul',
    description: [
      'Modern web teknolojilerini (React, Next.js) kullanarak kullanıcı dostu ve yüksek performanslı arayüzler geliştiriyorum. ',
      'Yeniden kullanılabilir (reusable) bileşen yapıları kurarak kod tekrarını azaltıyor ve geliştirme süreçlerini hızlandırıyorum. ',
      'RESTful API entegrasyonlarını sağlayarak dinamik veri akışlarını yönetiyor, TanStack Query ile sunucu state yönetimini optimize ediyorum.',
      'Tasarım ekibiyle (UI/UX) koordineli çalışarak, Figma tasarımlarını responsive ve piksel hassasiyetinde koda döküyorum.',
    ],
  },
  {
    date: 'January 24 - July 25',
    company: 'Mimcode',
    role: 'Frontend Developer',
    place: 'İstanbul',
    description: [
      'React ve Next.js tabanlı modern ön yüz mimarileri üzerine uzmanlaştım. ',
      'TypeScript ile tip güvenliğini sağlarken, UI geliştirmelerinde Tailwind CSS kullanarak hızlı ve responsive arayüzler ürettim. ',
      'Redux Toolkit ve TanStack Query ile state yönetimini optimize ettim.',
    ],
  },
  {
    date: 'August 20 - July 22',
    company: 'Levent Ofis',
    role: 'E-Commerce Operations Specialist',
    place: 'İstanbul',
    description: [
      'Ofis yönetimi ve günlük operasyonların düzenlenmesi konularında görev aldım. ',
      'Gitti Gidiyor, Çiçek Sepeti gibi markaların e-ticaret platformlarında SEO bazlı ürün girişleri gerçekleştirdim. ',
      'Ürün verilerini düzenleyip kategoriler oluşturduktan sonra doğru optimizasyon ile daha iyi kullanıcı deneyimi sağladım.',
      'Vakko ve Vakkorama paneli üzerinden ürün girişleri yaparak firmaların ürünlerinin e-ticaret sitelerine entegrasyonunu sağladım.',
    ],
  },
];

export const FORM_FIELDS: IFromField[] = [
  {
    id: 'name',
    label: 'Adınız Soyadınız',
    placeholder: 'Örn: Ali Okhan',
    component: 'input',
    type: 'text',
  },
  {
    id: 'email',
    label: 'E-posta Adresiniz',
    placeholder: 'Örn: aliokhan17@gmail.com',
    component: 'input',
    type: 'email',
  },
  {
    id: 'message',
    label: 'Mesajınız',
    placeholder: 'Projeden bahsedin',
    component: 'textarea',
    rows: 5,
  },
];

export const INITIAL_VALUES = {
  name: '',
  email: '',
  message: '',
};

export const PROJECTS: IProjects[] = [
  // 1. KICK SHOES PROJECT
  {
    id: 'kick-shoes',
    title: 'Kick Shoes E-Ticaret',
    description:
      'Modern ve şık bir ayakkabı satış platformu. Kullanıcıların ürünleri filtreleyebildiği, sepete ekleyebildiği ve detaylı ürün incelemesi yapabildiği kapsamlı bir e-ticaret arayüzü.',
    technologies: ['React', 'TanStack Query', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/KickShoesProject.git',
    cover: '/KickShoes/shoes-kicks1.webp',
    images: [
      '/KickShoes/shoes-kicks1.webp',
      '/KickShoes/shoes-kicks2.webp',
      '/KickShoes/shoes-kicks3.webp',
      '/KickShoes/shoes-kicks4.webp',
      '/KickShoes/shoes-kicks5.webp',
      '/KickShoes/shoes-kicks6.webp',
    ],
  },

  // 2. TANSTACK HOTEL
  {
    id: 'tanstack-hotel',
    title: 'TanStack Hotel Booking',
    description:
      'TanStack Query (React Query) kütüphanesinin gücünü kullanarak geliştirilen, sunucu durum yönetiminin (server state) optimize edildiği performanslı bir otel rezervasyon sistemi.',
    technologies: ['React', 'TanStack Query', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/TanStackHotel.git',
    cover: '/TripserHotel/tripser-hotel1.webp',
    images: [
      '/TripserHotel/tripser-hotel1.webp',
      '/TripserHotel/tripser-hotel2.webp',
      '/TripserHotel/tripser-hotel3.webp',
    ],
  },

  // 3. E-SHOP REDUX TOOLKIT
  {
    id: 'eshop-redux',
    title: 'Redux E-Shop',
    description:
      'Global state yönetimi için Redux Toolkit kullanılan, karmaşık sepet mantığını ve ürün yönetimini asenkron işlemlerle (Thunk) yöneten alışveriş uygulaması.',
    technologies: ['React', 'Redux Toolkit', 'Axios', 'TailwindCSS', 'FakeStore API'],
    githubUrl: 'https://github.com/okhanali/E-ShopReduxToolkit.git',
    cover: '/E-Shop/e-shop1.webp',
    images: [
      '/E-Shop/e-shop1.webp',
      '/E-Shop/e-shop2.webp',
      '/E-Shop/e-shop3.webp',
      '/E-Shop/e-shop4.webp',
      '/E-Shop/e-shop5.webp',
      '/E-Shop/e-shop6.webp',
      '/E-Shop/e-shop7.webp',
    ],
  },

  // 4. FIREBASE TODO
  {
    id: 'firebase-todo',
    title: 'Firebase Todo App',
    description:
      'Bulut tabanlı (Cloud Firestore) veritabanı ile tam senkronize çalışan, gerçek zamanlı veri ekleme, silme ve güncelleme (CRUD) işlemlerini barındıran görev takip uygulaması.',
    technologies: ['React', 'Firebase', 'Firestore', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/FireBaseTodo.git',
    cover: '/AuthTodo/auth-todo1.webp',
    images: [
      '/AuthTodo/auth-todo1.webp',
      '/AuthTodo/auth-todo2.webp',
      '/AuthTodo/auth-todo3.webp',
      '/AuthTodo/auth-todo4.webp',
    ],
  },

  // 5. CHAT APP
  {
    id: 'chat-app',
    title: 'Real-Time Chat',
    description:
      'Kullanıcıların anlık olarak mesajlaşabildiği, Google ile giriş yapma (Auth) özelliğine sahip, modern arayüzlü gerçek zamanlı sohbet odası.',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/ChatApp.git',
    cover: '/ChatApp/chat-app1.webp',
    images: [
      '/ChatApp/chat-app1.webp',
      '/ChatApp/chat-app2.webp',
      '/ChatApp/chat-app3.webp',
      '/ChatApp/chat-app4.webp',
    ],
  },

  // 6. JOB TRACKER
  {
    id: 'job-tracker',
    title: 'Job Tracker Dashboard',
    description:
      'İş başvurularının durumunu (Mülakat, Red, Kabul) takip etmek için geliştirilen, istatistiksel verileri görselleştiren yönetim paneli.',
    technologies: ['React', 'Redux', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/JobTrackerr.git',
    cover: '/JobTracker/job-tracker1.webp',
    images: [
      '/JobTracker/job-tracker1.webp',
      '/JobTracker/job-tracker2.webp',
      '/JobTracker/job-tracker3.webp',
    ],
  },

  // 7. TRANSLATE APP
  {
    id: 'translate-app',
    title: 'AI Translator',
    description:
      'Çoklu dil desteği sunan, API entegrasyonu ile metinleri anlık olarak çevirebilen ve dil algılama yeteneğine sahip çeviri aracı.',
    technologies: ['React', 'RapidAPI', 'Axios', 'Redux', 'TailwindCSS'],
    githubUrl: 'https://github.com/okhanali/Translate.git',
    cover: '/TranslateApp/translate-app1.webp',
    images: [
      '/TranslateApp/translate-app1.webp',
      '/TranslateApp/translate-app2.webp',
      '/TranslateApp/translate-app3.webp',
      '/TranslateApp/translate-app4.webp',
    ],
  },

  // 8. NOTE APP
  {
    id: 'note-app',
    title: 'Note Organizer',
    description:
      'Kategorize edilebilir, etiketlenebilir ve düzenlenebilir not alma uygulaması. Veri kalıcılığı ve modern CRUD prensiplerine odaklanılarak geliştirildi.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux'],
    githubUrl: 'https://github.com/okhanali/NoteApp.git',
    cover: '/NoteApp/note-app3.webp',
    images: [
      '/NoteApp/note-app1.webp',
      '/NoteApp/note-app2.webp',
      '/NoteApp/note-app3.webp',
      '/NoteApp/note-app4.webp',
    ],
  },

  // 9. ICE CREAM UNIT TEST
  {
    id: 'unit-test',
    title: 'Ice Cream Shop',
    description:
      'Uygulama unit test kapsamına alınmış olup, UI davranışları ve Redux etkileşimleri test edilmiştir.',
    technologies: ['React', 'TailwindCSS', 'Redux', 'TDD'],
    githubUrl: 'https://github.com/okhanali/IceCreamUnitTestProject_CursorAi.git',
    cover: '/DropCream/drop-cream1.webp',
    images: ['/DropCream/drop-cream1.webp', '/DropCream/drop-cream2.webp'],
  },
];
