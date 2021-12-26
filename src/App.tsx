import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//components
import Main from "./components/Main";
import About from "./components/About";

const StyledNav = styled.nav`
  background-color: #03a9f4;
  font-size: large;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2rem;
  flex-wrap:wrap;

`;

const StyledContainer = styled.div`
  font-size: large;
  margin: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  min-height: 80vh;
  padding:2rem;
`;

const StyledLinks = styled.div`
display:flex;
gap:1rem;
`;

const App = () => {
  return (
    <>
      <Router>
        <StyledNav>
          <StyledLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </StyledLinks>
        </StyledNav>

        <StyledContainer>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
          </Routes>
        </StyledContainer>
      </Router>
    </>
  );
};

export default App;
