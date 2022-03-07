import styled from "styled-components";

export const StyledChoices = styled.section`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 120px auto;
  background: url('/images/bg-triangle.svg') no-repeat bottom;
  background-size: cover;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    margin-top: 130px;
  }
`;

export const ChoiceIcon = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ position }) => position.top ? position.top : 'unset'};
  left: ${({ position }) => position.left ? position.left : 'unset'};
  right: ${({ position }) => position.right ? position.right : 'unset'};
  bottom: ${({ position }) => position.bottom ? position.bottom : 'unset'};
  background-image: linear-gradient(${({ background }) => background});
  border-radius: 50%;
  box-shadow: inset 0px -4px 7px 4px rgba(0,0,0,0.4);
  cursor: pointer;

  div {
    border-radius: 50%;
    background-color: #fff;
    padding: 25px 30px;
    box-shadow: inset 0px 4px 7px 4px rgba(0,0,0,0.4);
  }

  img {
    height: 60px;
    width: 50px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;

    &:nth-child(3) {
      left: 15%;
    }

    div {
      padding: 20px 25px;
    }

    img {
      height: 50px;
      width: 40px;
    }
  }
`;