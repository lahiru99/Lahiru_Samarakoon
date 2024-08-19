import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Profile_Img1.0.png';
import sun from '../../assets/sun2.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import CV from '../../assets/cv.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const roleRef = useRef(null);

  const themeIcon = theme === 'light' ? sun : moon;

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
        <p>
          Driven by curiosity and a passion for innovation, I am committed to
          lifelong learning and efficient problem-solving. I excel in
          collaborative environments and am eager to contribute my skills to
          developing cutting-edge web applications that shape the future.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
