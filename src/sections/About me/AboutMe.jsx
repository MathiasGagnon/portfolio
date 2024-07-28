import styles from './AboutMeStyles.module.css';
import book from '../../assets/lorangeraie.jpg';
import tvshow from '../../assets/theexpanse.jpg';
import hike from '../../assets/gosford.webp';
import podcast from '../../assets/conflictedpodcast.avif';
import ProjectCard from '../../common/ProjectCard';

function AboutMe() {
  return (
    <section id="AboutMe" className={styles.container}>
      <h1 className="sectionTitle">About Me</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hike}
          link="https://www.alltrails.com/trail/canada/quebec/mount-gosford-circuit"
          p="The last Hike I did"
        />
        <ProjectCard
          src={book}
          link="https://editionsalto.com/livres/lorangeraie/"
          p="The last book I read"
        />
        <ProjectCard
          src={tvshow}
          link="https://www.primevideo.com/dp/amzn1.dv.gti.6e7c9f45-6f82-4cb6-8620-eb63ed91f6db?autoplay=0&ref_=atv_cf_strg_wb"
          p="The last TV show I watched"
        />
        <ProjectCard
          src={podcast}
          link="https://www.conflictedhistory.com/"
          p="My current favorite podcast"
        />
      </div>
    </section>
  );
}

export default AboutMe;
