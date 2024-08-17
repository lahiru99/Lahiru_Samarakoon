import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="HTML"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="CSS"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="JavaScript"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="TypeScript"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Automation"
          className={styles.skillItem}
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="React"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Ionic"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Angular"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Flutter"
          className={styles.skillItem}
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList
          src={checkMarkIcon}
          skill="Git"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Bootstrap"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="SQL"
          className={styles.skillItem}
        />
        <SkillList
          src={checkMarkIcon}
          skill="Unix"
          className={styles.skillItem}
        />
      </div>
    </section>
  );
}

export default Skills;
