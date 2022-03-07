// STYLES
import { StyledHeader, ScoreBox } from "../styles/Header.styled";

export default function Header({ score }) {

  return (
    <StyledHeader>
      <h1>
        ROCK<br />
        PAPER<br />
        SCISSORS
      </h1>
      <ScoreBox>
        <span>SCORE</span>
        <p>{ score }</p>
      </ScoreBox>
    </StyledHeader>
  );
}