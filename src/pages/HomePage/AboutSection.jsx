import { Reveal } from "react-awesome-reveal";
import styled from "styled-components";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { cards } from "../../utils/data";
import { DEVICE } from "../../utils/device";
import { fadeInLeft, fadeInUp } from "../../utils/styles";

const StyledAbout = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px;
  position: relative;
  padding-top: 100px;

  img {
    width: 100%;
    vertical-align: middle;
  }

  .wrap {
    display: flex;
    align-items: center;

    .pic {
      width: 25%;
      position: absolute;
      top: 0%;
      right: 0%;
      animation: up-m 3s linear infinite;

      @media ${DEVICE.tablet} {
        position: relative;
        top: 0%;
        right: 0%;
        width: 40%;
        animation: up-pc 3s linear infinite;

        @keyframes up-pc {
          50% {
            top: 0%;
            right: 1%;
          }
        }
      }

      @keyframes up-m {
        50% {
          top: 1%;
        }
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      justify-content: space-around;
      margin-top: 50px;
    }
  }
`;

const AboutSection = () => {
  return (
    <StyledAbout>
      <Reveal keyframes={fadeInUp} delay={600} duration={600}>
        <Title sub="HIS AND HER" title="ABOUT US" />
      </Reveal>

      <div className="wrap">
        <div className="pic pic1">
          <Reveal keyframes={fadeInLeft} delay={1000} duration={800}>
            <img src={require("../../images/about/pic1.png")} alt="pic" />
          </Reveal>
        </div>

        <div className="cards">
          {cards.map((element, index) => {
            return <Card meta={element} key={index} />;
          })}
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutSection;
