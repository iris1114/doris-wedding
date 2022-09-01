import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import styled from "styled-components";
import EndingSection from "./EndingSection";

const StyledMain = styled.div`
  overflow: hidden;
`;
const HomePage = () => {
  return (
    <StyledMain>
      <HeroSection />
      <div id="location">
        <WelcomeSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>

      <EndingSection />
    </StyledMain>
  );
};

export default HomePage;
