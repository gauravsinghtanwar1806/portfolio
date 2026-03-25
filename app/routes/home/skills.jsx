import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './profile.module.css'; // Reusing profile styles for simplicity

const skillList = [
  { title: "Python", icon: "python/python-original.svg" },
  { title: "Java", icon: "java/java-original.svg" },
  { title: "SQL", icon: "mysql/mysql-original.svg" },
  { title: "HTML5", icon: "html5/html5-original.svg" },
  { title: "CSS3", icon: "css3/css3-original.svg" },
  { title: "JavaScript", icon: "javascript/javascript-original.svg" },
  { title: "GitHub", icon: "github/github-original.svg" },
  { title: "Jupyter", icon: "jupyter/jupyter-original.svg" },
  { title: "Pandas", icon: "pandas/pandas-original.svg" },
  { title: "NumPy", icon: "numpy/numpy-original.svg" },
  { title: "Scikit-Learn", icon: "scikitlearn/scikitlearn-original.svg" }
];

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                Skills & Technologies
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p" style={{marginBottom: 'var(--spaceL)'}}>
                <strong>Core competencies:</strong> Machine Learning, Data Science, Web Development, Algorithms, and Object-Oriented Programming. I continuously expand my toolset to solve increasingly complex problems.
              </Text>

              <div className={styles.skillGrid} data-visible={visible}>
                {skillList.map((skill, index) => (
                  <div key={index} className={styles.skillBadge} style={{ transitionDelay: `${index * 50 + 200}ms` }}>
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} 
                      alt={skill.title} 
                      className={styles.skillBadgeIcon} 
                    />
                    <span className={styles.skillBadgeText}>{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Competencies
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
