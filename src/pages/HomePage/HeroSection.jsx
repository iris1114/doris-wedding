import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { COLOR } from "../../utils/styles";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "../../utils/styles";

const StyledHero = styled.div`
  background-image: url(${require("../../images/album/26.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: top;
  position: relative;

  .text {
    display: flex;
    height: 100vh;
    width: 100%;
    font-size: 70px;
    justify-content: center;
    font-family: "Oooh Baby", cursive;
    color: ${COLOR.white};
    text-shadow: 2px 2px ${COLOR.darkPink};

    @media ${DEVICE.tablet} {
      font-size: 150px;
      justify-content: center;
    }

    .title {
      align-self: center;
    }
  }

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const HeroSection = () => {
  return (
    <StyledHero>
      <Reveal keyframes={fadeInUp} delay={600} duration={600}>
        <div className="text">
          <div className="title">Tim & Doris</div>
        </div>
      </Reveal>
    </StyledHero>
  );
};

export default HeroSection;
