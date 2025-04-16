import Header from "@/components/header";
import styles from "./page.module.css";
import About from "@/components/About";
import Container from "@/components/Contianer";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";
import WelcomeOverlayWrapper from "@/components/WelcomeOverlayWrapper";
import CyberpunkBackground from "@/components/CyberpunkBackground";

export default function Home() {
  return (
    <div className={styles.page}>
      <CyberpunkBackground />
      <WelcomeOverlayWrapper />
      <Header/>
      <Container>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Awards/>
      </Container>
      <Footer/>
    </div>
  );
}
