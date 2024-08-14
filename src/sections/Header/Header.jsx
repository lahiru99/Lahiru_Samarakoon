import React from 'react';
import styles from './HeaderStyles.module.css';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import linktreeIcon from '../../assets/linktree (1).png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LS</div>

      {/* Iframe added here for full width and height coverage under the header */}
      <iframe
        src="https://my.spline.design/retrofuturismbganimation-6c9ea7ddee82570a522b6ed80552aa75/"
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
        allowFullScreen
      ></iframe>

      <div id="particle-container"></div>

      <nav className={`${styles.nav} ${styles.center}`}>
        <ul className={styles.navList}>
          <li>
            <a href="#hero" className={`${styles.navItem} ${styles.center}`}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${styles.navItem} ${styles.center}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={`${styles.navItem} ${styles.center}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.navItem} ${styles.center}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/lahiru99"
          target="_blank"
          className={styles.socialLink}
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/lahiru-samarakoon/"
          target="_blank"
          className={styles.socialLink}
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/19zeries/"
          target="_blank"
          className={styles.socialLink}
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://linktr.ee/19Zeries"
          target="_blank"
          className={styles.socialLink}
        >
          <img src={linktreeIcon} alt="Linktree" />
        </a>
      </div>
    </header>
  );
};

export default Header;
