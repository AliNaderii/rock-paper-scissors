import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  padding: 10px 15px 10px 25px;
  margin: 0 auto;
  color: #fff;
  outline: 3px solid ${({ theme }) => theme.headerOutline};

  h1 {
    letter-spacing: 0.5px;
    line-height: 1;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 120px;

    h1 {
      font-size: 26px;
      font-weight: 600;
    }
  }
`;

export const ScoreBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 110px;
  line-height: 1;
  padding: 10px;

  span {
    color: ${({ theme }) => theme.scoreText};
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  p {
    font-weight: 700;
    color: ${({ theme }) => theme.darkText};
    opacity: 0.9;
    font-size: 62px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 95%;

    span {
      font-size: 14px;
      margin-top: 10px;
      font-weight: 700;
    }

    p {
      font-size: 45px;
    }
  }
`;