import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Divider } from '~/components/divider';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './profile.module.css';

const achievementsData = [
  {
    metric: '4 ⭐',
    title: 'Java & Python Rating',
    description: 'Achieved verified 4-star ratings in Java and Python on HackerRank.',
    color: 'var(--accent)',
    glow: 'rgba(0, 234, 100, 0.3)'
  },
  {
    metric: '100+',
    title: 'Problems Solved',
    description: 'Data Structures and Algorithms across LeetCode, GeeksforGeeks, and HackerRank.',
    color: 'var(--primary)',
    glow: 'rgba(255, 161, 22, 0.3)'
  },
  {
    metric: '🛡️',
    title: 'Cybersecurity',
    description: 'Demonstrated proactive learning by engaging in cybersecurity concepts and peer discussions.',
    color: 'var(--textTitle)',
    glow: 'rgba(0, 190, 255, 0.3)'
  }
];
export const Achievements = ({ id, visible, sectionRef }) => {
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
                Achievements & Milestones
              </Heading>
              
              <div className={styles.achieveGrid} data-visible={visible}>
                {achievementsData.map((item, index) => (
                  <div 
                    key={index} 
                    className={styles.achieveCard}
                    style={{ 
                      transitionDelay: `${index * 150}ms`,
                      '--glow-color': item.glow
                    }}
                  >
                    <div className={styles.achieveMetric} style={{ color: item.color }}>
                      {item.metric}
                    </div>
                    <div className={styles.achieveInfo}>
                      <div className={styles.achieveTitle}>{item.title}</div>
                      <p className={styles.achieveDesc}>{item.description}</p>
                    </div>
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
