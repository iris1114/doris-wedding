import styled from "styled-components";

const StyledDivider = styled.div`
  margin: auto;
  width: 30%;
`;

const Divider = () => {
  return (
    <StyledDivider>
      <img src={require("../images/divider.png")} alt="deliver" />
    </StyledDivider>
  );
};

export default Divider;
