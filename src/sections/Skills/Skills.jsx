import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {

  const checkMarkIcon = checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Polars" />
        <SkillList src={checkMarkIcon} skill="Tensorflow" />
        <SkillList src={checkMarkIcon} skill="PyTorch" />
        <SkillList src={checkMarkIcon} skill="Langchain" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Power BI" />
        <SkillList src={checkMarkIcon} skill="Power Automate" />
        <SkillList src={checkMarkIcon} skill="Talend" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
