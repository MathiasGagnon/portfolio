import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import moon from '../../assets/moon.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  const themeIcon  = moon;
  const twitterIcon = twitterDark;
  const githubIcon = githubDark;
  const linkedinIcon = linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mathias
          <br />
          Gagnon
        </h1>
        <h2>Aspiring AI and BI specialist</h2>
        <span>
          <a href="https://github.com/MathiasGagnon" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/mathias-gagnon-362362241" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a desire to combine artificial intelligence and business intelligence.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
