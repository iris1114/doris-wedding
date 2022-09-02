import styled from "styled-components";
import { DEVICE } from "../utils/device";
import { COLOR } from "../utils/styles";

const StyledCard = styled.div`
  width: 150px;
  background-color: ${COLOR.white};
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  padding: 20px 20px;

  @media ${DEVICE.tablet} {
    width: 300px;
    padding: 50px 20px;
  }

  .question {
    text-align: center;

    .img {
      width: 50%;
      margin: 20px auto;

      @media ${DEVICE.tablet} {
        width: 30%;
      }
    }
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${COLOR.darkPink};
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transition: 0.3s ease;

    .text {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }

  &:hover .overlay {
    transform: scale(1);
  }

  @media (max-width: 640px) {
    &:nth-of-type(4) {
      .overlay {
        .text {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;

const Card = ({ meta }) => {
  const { img, question, answer } = meta;
  return (
    <StyledCard>
      <div className="question">
        <div className="img">
          <img src={img} alt="icon" />
        </div>
        <div className="text">{question}</div>
      </div>
      <div className="overlay">
        <div className="text">
          <div>{answer}</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
