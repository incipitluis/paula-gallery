import { useTranslations } from "next-intl";
import Hero from "../components/hero";
import NavBar from "../components/nav";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen md:h-screen flex flex-col">
      <NavBar />
      <Hero />
      <div className="flex-grow container mx-auto px-4 text-center mt-6 pb-12 md:pb-0">
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
