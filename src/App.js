// TOOLS
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// STYLES
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import { Container } from "./styles/Container";
// COMPONENTS
import Compare from './pages/Compare';
import Header from "./components/Header";
import Modal from "./components/Modal";
import RulesButton from "./components/RulesButton";
import Choices from "./pages/Choices";

const theme = {
  gradient: {
    scissors: 'hsl(39, 89%, 49%) to hsl(40, 84%, 53%)',
    paper: 'hsl(230, 89%, 62%) to hsl(230, 89%, 65%)',
    rock: 'hsl(349, 71%, 52%) to hsl(349, 70%, 56 %)',
  },

  darkText: 'hsl(229, 25%, 31%)',
  scoreText: 'hsl(229, 64%, 46%)',
  headerOutline: 'hsl(217, 16%, 45%)'
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(prevState => prevState + 1);
  };

  const decrementScore = () => {
    setScore(prevState => prevState > 0 ? prevState - 1 : 0);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Container>
        <Header score={ score } />
        <Router>
          <Routes>
            <Route path='/' element={ <Choices /> } />
            <Route
              path='/compare/:name'
              element={
                <Compare
                  incrementScore={ incrementScore }
                  decrementScore={ decrementScore } />
              } />
          </Routes>
        </Router>
        <RulesButton toggleModal={ toggleModal } />
        { showModal && <Modal toggleModal={ toggleModal } /> }
      </Container>
    </ThemeProvider>
  );
}

export default App;
