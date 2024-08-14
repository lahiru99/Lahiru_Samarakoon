import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Profile_Img1.0.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import CV from '../../assets/cv.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const roleRef = useRef(null);

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const options = {
      strings: [
        'Software Developer',
        'Front-End Developer',
        'Photographer',
        '3D Artist',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    new Typed(roleRef.current, options);
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className="iframe-container">
        <iframe
          src="https://my.spline.design/backlightbgeffect-607f8880be470518439c6a007fcb998a/"
          frameborder="0"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        ></iframe>
      </div>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Hi, I'm Lahiru Samarakoon</h1>
        <h2 ref={roleRef}></h2>
        <p>With a passion for developing websites and apps</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
