import styled from "styled-components";

export const BoldText = styled.p`
  font-weight: ${(props) => (props.isBold ? "600" : "")};
`;
