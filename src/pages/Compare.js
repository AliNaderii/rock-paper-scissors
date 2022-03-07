// TOOLS
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// STYLES
import { StyledCompare, Result } from "../styles/Compare.styled";
import SelectionContainer from "../components/SelectionContainer";
// CHOICE OPTIONS
import { choices } from "../pages/Choices";

export default function Compare({ incrementScore, decrementScore }) {
  const name = useParams().name;
  const [randomSelect, setRandomSelect] = useState(null);
  const [resultText, setResultText] = useState('');
  // const { dispatch } = useScore();
  const navigate = useNavigate();

  const userSelection = choices.filter(choice => {
    return choice.name === name;
  });


  useEffect(() => {

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      const matchedChoice = choices.filter(choice => {
        return choice.id === randomNumber;
      });
      setRandomSelect(matchedChoice);
    }, 1000);

  }, []);

  // COULD USE A SWITCH AND TERNARY OPERATOR INSTEAD OF IF/ELSE

  useEffect(() => {
    if (randomSelect) {
      if (randomSelect[0].name === 'rock') {
        if (name === 'rock') {
          setResultText('DRAW');
        } else if (name === 'paper') {
          setResultText('YOU WIN');
          incrementScore();
        } else {
          setResultText('YOU LOSE');
          decrementScore();
        }
      }

      if (randomSelect[0].name === 'paper') {
        if (name === 'paper') {
          setResultText('DRAW');
        } else if (name === 'scissors') {
          setResultText('YOU WIN');
          incrementScore();
        } else {
          setResultText('YOU LOSE');
          decrementScore();
        }
      }

      if (randomSelect[0].name === 'scissors') {
        if (name === 'scissors') {
          setResultText('DRAW');
        } else if (name === 'rock') {
          setResultText('YOU WIN');
          incrementScore();
        } else {
          setResultText('YOU LOSE');
          decrementScore();
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomSelect]);


  return (
    <div>
      <StyledCompare>
        <SelectionContainer text='YOU PICKED' sources={ userSelection } />
        { resultText && <Result>
          <p>{ resultText }</p>
          <button onClick={ () => navigate('/') }>PLAY AGAIN</button>
        </Result> }
        <SelectionContainer text='THE HOUSE PICKED' sources={ randomSelect } />
      </StyledCompare>
    </div>
  );
}