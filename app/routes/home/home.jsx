import churnImg from '~/assets/churn-new.png';
import invImg from '~/assets/inventory-new.png';
import hungerImg from '~/assets/hunger-new.png';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Skills } from './skills';
import { Achievements } from './achievements';
import { Certifications } from './certifications';
import { Education } from './education';
import { Contact } from './contact';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Data Scientist + Software Developer',
    description: `Portfolio of ${config.name} — a data scientist and software developer specializing in Python, Machine Learning, and Data Analysis.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  
  const intro = useRef();
  const about = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const skills = useRef();
  const achievements = useRef();
  const certifications = useRef();
  const education = useRef();

  useEffect(() => {
    const sections = [
      intro, about, projectOne, projectTwo, projectThree,
      skills, achievements, certifications, education
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      
      <Profile
        id="about"
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
      />

      <div id="projects">
        <ProjectSummary
          id="project-1"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="Predicting Customer Churn"
          description="Built supervised ML models (XGBoost, Random Forest) with advanced feature engineering to detect high-risk customers and support retention strategies."
          buttonText="View on GitHub"
          buttonLink="https://github.com/gauravsinghtanwar1806"
          model={{
            type: 'laptop',
            alt: 'Customer Churn Prediction project',
            textures: [
              {
                srcSet: `${churnImg} 1280w, ${churnImg} 2560w`,
                placeholder: churnImg,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-2"
          alternate
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="Inventory Management System"
          description="A robust Java Swing-based application for product tracking featuring an undo system engineered with Data Structures and Algorithms."
          buttonText="View on GitHub"
          buttonLink="https://github.com/gauravsinghtanwar1806"
          model={{
            type: 'phone',
            alt: 'Inventory Management App',
            textures: [
              {
                srcSet: `${invImg} 375w, ${invImg} 750w`,
                placeholder: invImg,
              },
              {
                srcSet: `${invImg} 375w, ${invImg} 750w`,
                placeholder: invImg,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Global Hunger Analysis"
          description="In-depth analysis and visualization of global hunger data mapped to UN SDG 2 (Zero Hunger) using Python, Pandas, and Data Storytelling."
          buttonText="View on GitHub"
          buttonLink="https://github.com/gauravsinghtanwar1806"
          model={{
            type: 'laptop',
            alt: 'Global Hunger Analysis dashboard',
            textures: [
              {
                srcSet: `${hungerImg} 800w, ${hungerImg} 1920w`,
                placeholder: hungerImg,
              },
            ],
          }}
        />
      </div>

      <Skills
        id="skills"
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
      />

      <Achievements
        id="achievements"
        sectionRef={achievements}
        visible={visibleSections.includes(achievements.current)}
      />

      <Certifications
        id="certifications"
        sectionRef={certifications}
        visible={visibleSections.includes(certifications.current)}
      />

      <Education
        id="education"
        sectionRef={education}
        visible={visibleSections.includes(education.current)}
      />

      <Contact id="contact" />
    </div>
  );
};
