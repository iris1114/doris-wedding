import styled from "styled-components";
import { COLOR } from "../utils/styles";

const StyledFooter = styled.div`
  padding: 20px 0px;
  background-color: hsl(0, 0%, 100%, 0.6);
  text-align: center;
  color: ${COLOR.grey};
  font-size: 14mappx;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>© 2022 Tim & Doris Wedding. All Rights Reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
