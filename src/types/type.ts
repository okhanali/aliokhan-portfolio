import type { IconType } from 'react-icons/lib';

export interface INavLink {
  title: string;
  path: string;
}

export interface ISocialLinks {
  linkedin: string;
  github: string;
}

export interface ISkills {
  name: string;
  icon: IconType;
  className: string;
}

export interface IExperience {
  date: string;
  company: string;
  role: string;
  place: string;
  description: string[];
}

export interface IFromField {
  id: string;
  label: string;
  placeholder: string;
  component: 'input' | 'textarea';
  type?: string;
  rows?: number;
}

export interface IProjects {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;

  // GÖRSEL MEDYA ALANLARI
  cover: string;
  images: string[];
  demoVideo: string;
}
