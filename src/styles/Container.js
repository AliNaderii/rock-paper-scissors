import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  padding: 40px 0 20px;

  @media (max-width: 768px) {
    padding: 20px 0 10px;
    display: flex;
    flex-direction: column;
  }
`;