import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/ScoothScare.webp';
import snakeGame from '../../assets/SnakeGame.png';
import shop from '../../assets/RubyProject.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={'https://github.com/lahiru99/ScootShare'}
          h3="ScootShare"
          p="Shooter Share Website"
        />
        <ProjectCard
          src={snakeGame}
          link={'https://github.com/lahiru99/Snake_SFML'}
          h3="Snake Game"
          p="Ruby Shopping website"
        />
        <ProjectCard
          src={shop}
          link={'https://github.com/lahiru99/Shop'}
          h3="Shopping Web"
          p="Ruby Shopping website"
        />
      </div>
    </section>
  );
}

export default Projects;
