import styles from './SoftSkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function SoftSkills() {

  const checkMarkIcon = checkMarkIconDark;

  return (
    <section id="Softskills" className={styles.container}>
      <h1 className="sectionTitle">Soft skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Polars" />
        <SkillList src={checkMarkIcon} skill="Tensorflow" />
        <SkillList src={checkMarkIcon} skill="PyTorch" />
        <SkillList src={checkMarkIcon} skill="ClearML" />
        <SkillList src={checkMarkIcon} skill="Wandb" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Power BI" />
        <SkillList src={checkMarkIcon} skill="Power Automate" />
        <SkillList src={checkMarkIcon} skill="Talend" />
        <SkillList src={checkMarkIcon} skill="MS SQL Server" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="SQLite" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jira" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />
      </div>
    </section>
  );
}

export default SoftSkills;
