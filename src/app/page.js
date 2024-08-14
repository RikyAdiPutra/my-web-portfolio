import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Articles from "@/components/Articles";
import ContactUs from "@/components/ContactEx";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="articles">
          <Articles />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
