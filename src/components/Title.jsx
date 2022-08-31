import styled from "styled-components";
import { COLOR } from "../utils/styles";

const StyledTitle = styled.div`
  .sub {
    font-size: 18px;
    display: flex;
    align-items: baseline;

    .line {
      width: 500px;
      height: 2px;
      background-color: ${COLOR.black};
    }
  }

  .title {
    font-size: 50px;
    margin-top: 30px;
  }
`;

const Title = ({ sub, title }) => {
  return (
    <StyledTitle>
      <div className="sub">
        <span>{sub}</span>
        <span className="line"></span>
      </div>

      <div className="title">{title}</div>
    </StyledTitle>
  );
};

export default Title;
