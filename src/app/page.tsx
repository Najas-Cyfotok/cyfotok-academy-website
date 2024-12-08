import CompanyAbout from "./sections/CompanyAbout";
import Hackathon from "./sections/Hackathon";
import HeroSection from "./sections/HeroSection";
import Learn from "./sections/Learn";
import Partners from "./sections/Partners";
import TrainingFacilities from "./sections/TrainingFacilities";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Partners/>
      <Learn/>
      <TrainingFacilities/>
      <Hackathon/>
      <CompanyAbout/>
    </main>
  );
}
