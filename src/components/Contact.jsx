import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import contact from '../assets/contact.svg';
import style from './styles/contact.module.css';
import { ErrorToast, successToast } from '../utils/toast';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const isValid = form.checkValidity();
  //   if (isValid) {
  //     // Submit the form
  //     form.submit();
  //     setForm({
  //       name: '',
  //       email: '',
  //       message: '',
  //     });
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.target;
    const isValid = formElement.checkValidity();
    if (!isValid) return;

    try {
      const response = await fetch('https://formspree.io/f/mvgrwbdl', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(formElement),
      });

      if (response.ok) {
        successToast();
        setForm({ name: '', email: '', message: '' });
        formElement.reset();
      } else {
        ErrorToast();
      }
    } catch {
      ErrorToast();
    }
  };
  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
        Have an idea, a project, or just want to say hi? I’d love to hear from
        you.
      </motion.p>
      <div className={style.container}>
        <motion.form
          variants={slideIn('left', '', 0, 1)}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mvgrwbdl"
          method="POST"
          className={style.form_container}
        >
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength="30"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              className={style.input}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              maxLength="500"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${style.input} ${style.textarea}`}
            />
            <button type="submit" className={style.btn_container}>
              <span className={style.btn_hover}>Get in touch</span>
              <span className={style.btn}>Get in touch</span>
            </button>
          </div>
        </motion.form>
        <motion.div
          variants={slideIn('right', '', 0, 1)}
          className={style.img_container}
        >
          <img
            src={contact}
            alt="contact"
            className={style.img}
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 'my-0');
