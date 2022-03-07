import { StyledRulesButton } from "../styles/RulesButton.styled";

export default function RulesButton({ toggleModal }) {
  return (
    <StyledRulesButton onClick={ toggleModal }>
      Rules
    </StyledRulesButton>
  );
}