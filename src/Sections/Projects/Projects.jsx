import styles from "./ProjectStyles.module.css";
import trendy from "../../assets/trendy.png";
import ProjectCard from "../../common/ProjectCard.jsx"
import mobizil from "../../assets/nobizil.png"
import workWave from "../../assets/WorkWave.png"
import secureCrypt from "../../assets/securecrypt.png"
function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <br />
         <div className={styles.projectsContainer}>
          <ProjectCard src={trendy} link={"https://github.com/Demi-Khaled/Trendy"} h3="Trendy" p="Clothing Store Management System"/>
          <ProjectCard src={mobizil} link={"https://github.com/Demi-Khaled/mobizil"} h3="Mobizil" p="Mobile Review and News Platform"/>
          <ProjectCard src={workWave} link={"https://github.com/Demi-Khaled/WorkWave"} h3="WorkWave" p="Freelancing App"/>
          <ProjectCard src={secureCrypt} link={"#"} h3="CyberCrypt" p="Encryption app"/>
        </div>
      </section>
    </>
  );
}
export default Projects;
