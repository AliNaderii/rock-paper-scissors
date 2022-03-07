import styled from "styled-components";

export const StyledRulesButton = styled.button`
  width: 120px;
  padding: 10px 0;
  position: absolute;
  bottom: 30px;
  right: 50px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  outline: 2px solid ${({ theme }) => theme.headerOutline};

  @media (max-width: 768px) {
      position: relative;
      bottom: unset;
      right: unset;
      margin: 20px auto;
  }
`;