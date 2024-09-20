import { useTranslations } from "next-intl";
import Header from "../components/header";
import NavBar from "../components/nav";
import CardCarousel from "../components/card-carousel";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen md:h-screen flex flex-col">
      <NavBar />
      <Header />
      <main className="flex-grow container mx-auto px-4 text-center mt-6 pb-12 md:pb-0">
        <CardCarousel />
      </main>
    </div>
  );
}
