import { StyledModal, ModalCard, TopBar } from "../styles/Modal.styled";

export default function Modal({ toggleModal }) {
  return (
    <StyledModal>
      <ModalCard>
        <TopBar>
          <h2>RULES</h2>
          <button aria-label="close modal" onClick={ toggleModal }>
            <img src="/images/icon-close.svg" alt="close icon" />
          </button>
        </TopBar>
        <img src="/images/image-rules.svg" alt="rules" />
      </ModalCard>
    </StyledModal>
  );
}