import styled from "styled-components";


export const StyledSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 320px;

  h3 {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    text-align: center;
    justify-content: flex-start;
    margin-top: 20px;

    h3 {
      font-size: 16px;
      margin-top: 25px;
      order: 2;

    }
  }
`;

export const SelectedIcon = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${({ background }) => background});
  border-radius: 50%;
  box-shadow: inset 0px -4px 7px 4px rgba(0,0,0,0.4);
  order: 1;

  div {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
    padding: 50px 30px;
    box-shadow: inset 0px 4px 7px 4px rgba(0,0,0,0.4);
    text-align: center;
  }

  img {
    height: 90px;
    width: 80px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;

    div {
      width: 90px;
      height: 90px;
      padding: 20px 0px;
    }

    img {
      height: 55px;
      width: 50px;
    }
  }
`;

export const SelectedIconPlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;