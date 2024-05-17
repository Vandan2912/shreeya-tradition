import BannerSection from "@/components/BannerSection";
import BestSelling from "@/components/BestSelling";
import Footer from "@/components/Footer";
import NewArrival from "@/components/NewArrival";
import TrendingNow from "@/components/TrendingNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between bg-lightpink"
      )}
    >
      <BannerSection />
      <TrendingNow />
      <BestSelling />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
