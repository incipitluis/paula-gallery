import { useTranslations } from "next-intl";
import NavBar from "../components/nav";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <div className="flex-grow w-full mx-auto px-4 text-center bg-inherit pt-6 pb-12 md:pb-0">
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
