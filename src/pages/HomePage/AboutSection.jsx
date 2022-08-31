import { Reveal } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import { fadeInLeft, fadeInUp } from "../../utils/styles";

const StyledAbout = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 150px;
  padding: 0px 15px;

  .top {
    display: flex;

    .pic {
      width: 20%;
    }
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="top">
        <div className="pic pic1">
          <Reveal keyframes={fadeInLeft} delay={1000} duration={800}>
            <img src={require("../../images/about/pic1.png")} alt="pic" />
          </Reveal>
        </div>
        <Reveal keyframes={fadeInUp} delay={600} duration={600}>
          <Title sub="HE AND HER" title="ABOUT US" />
        </Reveal>
      </div>
    </StyledAbout>
  );
};

export default AboutSection;
