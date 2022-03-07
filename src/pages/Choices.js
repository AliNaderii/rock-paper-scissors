// TOOLS
import { useNavigate } from "react-router-dom";
// STYLES
import { StyledChoices, ChoiceIcon } from "../styles/Choices.styled";

export const choices = [
  {
    id: 1,
    src: '/images/icon-paper.svg',
    name: 'paper',
    background: 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
    position: {
      top: '-70px',
      left: '-70px'
    }
  },
  {
    id: 2,
    src: '/images/icon-scissors.svg',
    name: 'scissors',
    background: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
    position: {
      top: '-70px',
      right: '-70px'
    }
  },
  {
    id: 3,
    src: '/images/icon-rock.svg',
    name: 'rock',
    background: 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
    position: {
      bottom: '-70px',
      left: '20%'
    }
  },
];

export default function Choices() {
  const navigate = useNavigate();

  const handleChoice = (name) => {
    navigate(`/compare/${name}`);
  };

  return (

    <StyledChoices>
      { choices.map(choice => (
        <ChoiceIcon
          onClick={ () => handleChoice(choice.name) }
          key={ choice.name }
          background={ choice.background }
          position={ choice.position }
        >
          <div><img src={ choice.src } alt="choice icon" /></div>
        </ChoiceIcon>
      )) }
    </StyledChoices>
  );
}