import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <div className="divider" />
      <Pricing />
      <WhyChooseUs />
    </>
  );
}