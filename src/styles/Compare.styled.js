import styled from "styled-components";

export const StyledCompare = styled.section`
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    gap: 25px;
    width: 90%;
  }
`;

export const Result = styled.div`
  padding-top: 50px;
  text-align: center;

  p {
    font-size: 42px;
  }

  button {
    background-color: #fff;
    color: ${({ theme }) => theme.darkText};
    padding: 15px;
    width: 200px;
    margin-top: 20px;
    font-weight: 700;
    letter-spacing: 2px;

    &:hover {
      color: hsl(349, 71%, 52%);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
  }
`;