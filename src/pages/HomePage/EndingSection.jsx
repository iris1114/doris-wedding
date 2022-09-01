import { Reveal } from "react-awesome-reveal";
import styled from "styled-components";
import { DEVICE } from "../../utils/device";
import { fadeInUp } from "../../utils/styles";

const StyledEnding = styled.div`
  margin: 100px 0px;
  text-align: center;

  img {
    width: 100%;
    vertical-align: middle;
  }

  .pic {
    width: 80%;
    margin: auto;

    @media ${DEVICE.tablet} {
      width: 30%;
    }
  }

  .text {
    font-size: 18px;
    margin: 20px 0px;

    @media ${DEVICE.tablet} {
      font-size: 20px;
    }
  }
`;

const EndingSection = () => {
  return (
    <StyledEnding>
      <Reveal keyframes={fadeInUp} delay={600} duration={600}>
        <div className="pic">
          <img src={require("../../images/ending/2.jpg")} alt="wedding" />
        </div>
        <div className="text">感謝您們的到來❤️</div>
      </Reveal>
    </StyledEnding>
  );
};

export default EndingSection;
