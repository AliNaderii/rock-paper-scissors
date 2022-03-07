// STYLES
import { StyledSelectionContainer, SelectedIcon, SelectedIconPlaceholder } from "../styles/SelectionContainer.styled";

export default function SelectionContainer({ text, sources }) {

  return (
    <StyledSelectionContainer>
      <h3>{ text }</h3>

      { sources ?
        (
          <SelectedIcon background={ sources[0].background } >
            <div>
              <img src={ sources[0].src } alt="choice icon" />
            </div>
          </SelectedIcon>
        )
        :
        (
          <SelectedIconPlaceholder />
        )
      }

    </StyledSelectionContainer>
  );
}