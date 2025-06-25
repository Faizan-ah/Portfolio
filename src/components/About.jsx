import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m{' '}
        <a
          href="https://www.linkedin.com/in/faizan-ah/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Faizan,
        </a>{' '}
        a full-stack developer who enjoys making things that live on the
        internet. Whether it&apos;s a crisp user interface, a sturdy backend, or
        the devops glue holding it all together, I like building complete
        solutions that
        <span className={style.italic}> just work.</span>
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        I started my professional journey in 2021, working full-time as a
        full-stack developer, where I built and maintained production-grade web
        applications. In 2023, I began pursuing my Master&apos;s in Health
        Technology, expanding my skill set while continuing to code,
        collaborate, and stay immersed in the industry through projects,
        research, and development work. Most of my experience lies in web
        development, but I&apos;ve dabbled in mobile too, and I&apos;m always up
        for learning something new. Recently, I&apos;ve also been exploring AI
        and data science; building small ML models, experimenting with data
        pipelines, and understanding how intelligent systems can be folded into
        full-stack applications.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.15, 1)} className={style.text}>
        Along the way, I earned a{' '}
        <a
          href="https://drive.google.com/file/d/1IA-QabWpojtB8nUzB1CuO00okKzakRqK/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Full-Stack Developer Certification from Integrify
        </a>{' '}
        , further sharpening my skills and validating my commitment to
        high-quality, scalable software development.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        I&apos;ve shipped production-ready applications using React (JavaScript
        & TypeScript), Spring Boot (Java/Kotlin), and the MERN stack. Databases?
        MySQL, PostgreSQL, MongoDB; you name it. Cloud? Been there with AWS,
        GCP, and Huawei Cloud. Need server-side configs or DevOps setup?
        I&apos;ve handled pipelines cleaner than a barbershop fade.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.5, 1)} className={style.text}>
        I don&apos;t just code, I solve problems. I&apos;ve worked with
        cross-functional teams, translated vague client ideas into working
        features, and delivered projects on time and under budget. I stay
        curious, stay learning, and stay ready for whatever&apos;s next in tech.
        Let&apos;s build something awesome. If you&apos;ve got an idea, a job,
        or just want to talk shop; drop me a line.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.75, 1)} className={style.text}>
        📄 Want to know more?{' '}
        <a
          href="https://drive.google.com/file/d/1BIbh4H0elmVQ8ruUbppgpaNVkxWWTrX9/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>{' '}
        for a deeper dive into my projects, skills, and experience.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
