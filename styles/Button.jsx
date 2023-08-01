import styled from "styled-components";

export const BaseButton = styled.button`
  color: var(--color-secondary);
  font-family: Fromage, serif;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: var(--color-primary);
  padding: 10px 25px;
  border-radius: 50px;
  border: 2px solid var(--color-secondary);
  display: block;

  a {
    color: var(--color-secondary);
  }
`;
