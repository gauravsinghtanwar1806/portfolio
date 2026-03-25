import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#about',
  },
  {
    label: 'Projects',
    pathname: '/#projects',
  },
  {
    label: 'Skills',
    pathname: '/#skills',
  },
  {
    label: 'Awards',
    pathname: '/#achievements',
  },
  {
    label: 'Certs',
    pathname: '/#certifications',
  },
  {
    label: 'Education',
    pathname: '/#education',
  },
  {
    label: 'Contact',
    pathname: '/#contact',
  },
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/gaurav-singh-tanwar/',
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
