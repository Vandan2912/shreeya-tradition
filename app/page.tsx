import HeroSection from "@/components/HeroSection";
import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between"
      )}
    >
      <HeroSection />
    </main>
  );
}
