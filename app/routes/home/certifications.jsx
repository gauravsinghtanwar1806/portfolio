import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Divider } from '~/components/divider';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './profile.module.css';

const certList = [
  { file: 'Coursera Data Analysis.pdf', title: 'Data, Data Everywhere' },
  { file: 'Coursera Data Analysis 2.pdf', title: 'Ask Questions for Data-Driven Decisions' },
  { file: '12313123.pdf', title: 'The Bits and Bytes of Computer Networking' },
  { file: 'FreeCodeCamp_HTML.pdf', title: 'Legacy Responsive Web Design V8' },
  { file: 'Nestle Internship.pdf', title: 'Nestle Internship' },
  { file: 'Unstop_IIIT_Raipur.pdf', title: 'Unstop Hackathon IIIT Raipur' },
  { file: 'DSA - Summer Training.pdf', title: 'DSA Summer Training' },
  { file: 'NonTechMOOC.pdf', title: 'Non-Tech MOOC' },
];

export const Certifications = ({ id, visible, sectionRef }) => {
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
                Certifications & Awards
              </Heading>
              
              <div className={styles.certGrid} data-visible={visible}>
                {certList.map((cert, index) => {
                  const imgName = cert.file.replace('.pdf', '.png');
                  return (
                    <a 
                      key={index} 
                      href={`/certificates/${cert.file}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.certCard}
                      style={{ transitionDelay: `${index * 50 + 200}ms` }}
                    >
                      <div className={styles.certImgContainer}>
                        <img src={`/certificates/${imgName}`} alt={cert.title} className={styles.certImg} loading="lazy" />
                      </div>
                      <span className={styles.certName}>{cert.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </Transition>
    </Section>
  );
};
