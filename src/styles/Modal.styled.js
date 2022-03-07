import styled from "styled-components";

export const StyledModal = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  img {
    width: 90%;
  }
`;

export const ModalCard = styled.div`
  width: 350px;
  height: 380px;
  padding: 25px 25px;
  background-color: #fff;
  color: ${({ theme }) => theme.darkText};
`;

export const TopBar = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 28px;
  }
`;