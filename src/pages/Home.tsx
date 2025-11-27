import AboutUs from "./HomePage/AboutUs";
import BeforeAfter from "./HomePage/BeforeAfter";
import Benefit from "./HomePage/Benefit";
import Features from "./HomePage/Features";
import Hero from "./HomePage/Hero";
import Installed from "./HomePage/Installed";

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <Hero />
      <AboutUs />
      <Benefit />
      <BeforeAfter />
      <Installed />
      <Features />
    </div>
  );
}
