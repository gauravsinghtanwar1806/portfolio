import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Divider } from '~/components/divider';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './profile.module.css'; 

const educationData = [
  {
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    period: 'Aug 2023 - Present',
    degree: 'Bachelor of Technology - Computer Science & Engineering',
    score: '8.17',
    scoreLabel: 'CGPA',
    scoreValue: 81.7,
  },
  {
    institution: 'St. Xaviers School',
    location: 'Behror, Rajasthan',
    period: 'Apr 2021 - June 2022',
    degree: 'Intermediate',
    score: '76%',
    scoreLabel: 'Percent',
    scoreValue: 76,
  },
  {
    institution: 'St. Xaviers School',
    location: 'Behror, Rajasthan',
    period: 'Apr 2019 - May 2020',
    degree: 'High School',
    score: '88%',
    scoreLabel: 'Percent',
    scoreValue: 88,
  },
];

const CircularProgress = ({ value, label, text, visible, delay }) => {
  const radius = 33;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className={styles.progressContainer}>
      <svg className={styles.progressSvg} width="80" height="80" viewBox="0 0 80 80">
        <circle className={styles.progressBackground} cx="40" cy="40" r={radius} strokeWidth="6" />
        <circle 
          className={styles.progressFill} 
          cx="40" 
          cy="40" 
          r={radius} 
          strokeWidth="6" 
          strokeDasharray={circumference} 
          style={{ 
            strokeDashoffset: visible ? strokeDashoffset : circumference,
            transitionDelay: `${delay + 300}ms`
          }} 
        />
      </svg>
      <div className={styles.progressTextContainer}>
        <span className={styles.progressScore}>{text}</span>
        <span className={styles.progressLabel}>{label}</span>
      </div>
    </div>
  );
};

export const Education = ({ id, visible, sectionRef }) => {
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
            <div className={styles.column} style={{ width: '100%', gridColumn: '1 / -1' }}>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                Education
              </Heading>
              
              <div className={styles.eduGrid} data-visible={visible}>
                {educationData.map((edu, index) => (
                  <div 
                    key={index} 
                    className={styles.eduCard}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={styles.eduContent}>
                      <div className={styles.eduHeader}>
                        <span className={styles.eduInstitution}>{edu.institution}</span>
                        <span className={styles.eduLocation}>{edu.location}</span>
                      </div>
                      <span className={styles.eduDegree}>{edu.degree}</span>
                      <span className={styles.eduPeriod}>{edu.period}</span>
                    </div>
                    <CircularProgress 
                      value={edu.scoreValue} 
                      label={edu.scoreLabel} 
                      text={edu.score} 
                      visible={visible}
                      delay={index * 150}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </Transition>
    </Section>
  );
};
