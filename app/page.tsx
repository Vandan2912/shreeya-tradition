import AboutSection from "@/components/AboutSection";
import CollexctionSection from "@/components/CollectionSection";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";
import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between"
      )}
    >
      <HeroSection />
      <CollexctionSection />
      <NewArrival />
      <AboutSection />
    </main>
  );
}
