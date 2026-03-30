import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Divider } from '~/components/divider';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './profile.module.css'; // Reusing profile styles for simplicity
import softStyles from './skills.module.css';

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

const softSkillList = [
  { title: "Leadership", emoji: "👑", color: "#FFD700" },
  { title: "Communication", emoji: "💬", color: "#4FC3F7" },
  { title: "Problem Solving", emoji: "🧩", color: "#AB47BC" },
  { title: "Teamwork", emoji: "🤝", color: "#66BB6A" },
  { title: "Critical Thinking", emoji: "🧠", color: "#FF7043" },
  { title: "Adaptability", emoji: "🔄", color: "#26C6DA" },
  { title: "Time Management", emoji: "⏱️", color: "#EC407A" },
  { title: "Creativity", emoji: "🎨", color: "#FFA726" },
  { title: "Attention to Detail", emoji: "🔍", color: "#7E57C2" },
  { title: "Collaboration", emoji: "🌐", color: "#42A5F5" },
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

              {/* Soft Skills Subsection */}
              <div className={softStyles.softSkillsSection} data-visible={visible}>
                <h4 className={softStyles.softSkillsHeading} data-visible={visible}>
                  Soft Skills
                </h4>
                <div className={softStyles.softSkillGrid} data-visible={visible}>
                  {softSkillList.map((skill, index) => (
                    <div
                      key={index}
                      className={softStyles.softSkillBadge}
                      style={{
                        transitionDelay: `${index * 60 + 400}ms`,
                        '--soft-glow': skill.color,
                      }}
                      data-visible={visible}
                    >
                      <span className={softStyles.softSkillEmoji} aria-hidden="true">
                        {skill.emoji}
                      </span>
                      <span className={softStyles.softSkillText}>{skill.title}</span>
                    </div>
                  ))}
                </div>
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
