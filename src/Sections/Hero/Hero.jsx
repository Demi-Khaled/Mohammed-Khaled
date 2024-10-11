import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile.jpg";
import xIcon from "../../assets/twitter-dark.svg";
import linkedInIcon from "../../assets/linkedin-dark.svg";
import gitHubIcon from "../../assets/github-dark.svg";
import cv from "../../assets/cv.pdf";
function Hero() {
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className="hero-image">
          <img src={heroImg} className={styles.hero} alt="" />
        </div>
        <div className={styles.info}>
          <h1>
            Mohamed
            Khaled
            <br />Amine
          </h1>
          <h2>Software Engineer</h2>
          <span>
            <a href="https://x.com/AppLol398659" target="_blank">
              <img src={xIcon} alt=""/>
            </a>
          
            <a href="https://www.linkedin.com/in/mohammed-khaled-amine-ali-24817a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <img src={linkedInIcon} alt="" />
            </a>
          
            <a href="https://github.com/Demi-Khaled" target="_blank">
              <img src={gitHubIcon} alt="" />
            </a>
          </span>
          <p> I'm driven by a profound curiosity and a passion<br /> for  creating innovative solutions through code. <br />My interests span a wide range of areas within software development,</p>
          <a href={cv}>
            <button className="hover">CV</button>
          </a>
        </div>
      </section>
    </>
  );
}
export default Hero;
