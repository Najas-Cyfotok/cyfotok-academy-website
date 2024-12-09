import CompanyAbout from "./sections/CompanyAbout";
import ExternalLinks from "./sections/ExternalLinks";
import Hackathon from "./sections/Hackathon";
import HeroSection from "./sections/HeroSection";
import Learn from "./sections/Learn";
import Partners from "./sections/Partners";
import Testimonials from "./sections/Testimonials";
import TrainingFacilities from "./sections/TrainingFacilities";


export default function Home() {
  return (
    <main>
      <HeroSection/>  {/* hero section */}
      <Partners/> {/* partners section */}
      <Learn/>  {/* learn section */}
      <TrainingFacilities/>  {/* training facilities section */}
      <Hackathon/>  {/* hackathon banner section */}
      <CompanyAbout/>  {/* company about banner section */}
      <ExternalLinks/>  {/* external links section */}
      <Testimonials/>  {/* testimonials section */}
    </main>
  );
}
