import HeroSection from "./_sections/HeroSection";
import WebsiteSections from "./_sections/WebsiteSections";
import SaintOfChurchSection from "./_sections/SaintOfChurchSection";
import ServicesSection from "./_sections/ServicesSection";
import BestNewsOfChurchSection from "./_sections/BestNewsOfChurchSection";
import ChurchLibrary from "./_sections/ChurchLibrary";
//import ChurchScience from "./_sections/ChurchScience";
import FatherSays from "./_sections/FatherSays";
import ContactUs from "./_sections/ContactUs";
export default function Home() {
  return (
    <main className="grow w-screen max-w-screen overflow-x-hidden">
      <HeroSection />
      <WebsiteSections />
      <SaintOfChurchSection />
      <ServicesSection />
      <BestNewsOfChurchSection />
      <ChurchLibrary />
      {/*<ChurchScience />*/}
      <FatherSays />
      <ContactUs />
    </main>
  );
}
