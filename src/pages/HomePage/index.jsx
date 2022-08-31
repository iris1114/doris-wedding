import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <GallerySection />
    </main>
  );
};

export default HomePage;
