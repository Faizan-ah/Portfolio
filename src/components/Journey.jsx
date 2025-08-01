import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHourglassHalf } from 'react-icons/fa';
import { fadeIn, textVariant } from '../utils/motion';
import { journeyData } from '../constants';
import style from './styles/journey.module.css'; // Optional custom styles

const Journey = () => {
  const sectionName = 'My Journey';

  return (
    <div id="journey" className="my-16 px-4 sm:px-10">
      <motion.h2
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className={style.title}
      >
        {sectionName}
      </motion.h2>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
        A look back at where I started and how far I&#39;ve come as a
        professional -
      </motion.p>
      <div className="max-w-4xl mx-auto">
        <VerticalTimeline lineColor="#0d6ea6">
          {journeyData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--background)',
                color: 'var(--text)',
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--background)' }}
              date={item.years}
              dateClassName={style.itemDate}
              iconStyle={{ background: 'var(--cyan)', color: 'var(--white)' }}
              icon={
                item.type === 'education' ? (
                  <FaGraduationCap />
                ) : (
                  <FaBriefcase />
                )
              }
            >
              <div className="mb-2">
                {item.mainTech?.map((tech, idx) => (
                  <span key={idx} className={style.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className={style.itemTitle}>{item.title}</h3>
              <h4 className={style.itemCompany}>{item.company}</h4>
              <div className="mt-2">
                {item.technologies?.map((tech, idx) => (
                  <span key={idx} className={style.technologies}>
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}

          {/* Ending timeline element */}
          <VerticalTimelineElement
            iconStyle={{
              background: 'var(--cyan)',
              color: 'var(--white)',
            }}
            icon={<FaHourglassHalf />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Journey;
