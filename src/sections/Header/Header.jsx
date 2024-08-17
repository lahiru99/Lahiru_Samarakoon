import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';
import logo from '../../assets/Logo1.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import linktreeIcon from '../../assets/linktree (5).png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <button
        className={`${styles.hamburger}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
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
        <div className={styles.socialLinksContainer}>
          <div className={styles.socialLinksText}>FOLLOW ME:</div>
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
              href="https://linktr.ee/19zeries"
              target="_blank"
              className={styles.socialLink}
            >
              <img src={linktreeIcon} alt="Linktree" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
