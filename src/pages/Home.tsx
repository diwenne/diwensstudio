import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
import CompareTable from "../components/CompareTable"; // 👈 add this line

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <div className="divider" />
      <Pricing />
      <WhyChooseUs />
      <CompareTable /> {/* 👈 render it right after WhyChooseUs */}
    </>
  );
}