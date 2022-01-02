import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

//components
import Main from "./components/Main";
import About from "./components/About";

const StyledNav = styled.nav`
  background-color: #fafafa;
  font-size: large;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const StyledContainer = styled.div`
  font-size: large;
  margin: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  min-height: 80vh;
  padding: 2rem;
`;

const App = () => {
  const [isSunny, setSunny] = useState(false);
  const handleToggle = () => {
    setSunny( (isSunny) => !isSunny);
  };

  return (
    <>
      <Router>
        <StyledNav>
          <StyledLinks>
            <Link to="/main">Library</Link>
            <Link to="/about">About</Link>
          </StyledLinks>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => handleToggle()}
          >
            {isSunny ? (
              <FontAwesomeIcon
                icon={faSun}
                style={{ color: "yellow", fontSize: "1.5em" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "#0d6efd", fontSize: "1.5em" }}
              />
            )}
          </button>
        </StyledNav>

        <StyledContainer>
          <Routes>
            <Route path="main" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Main/>} />
          </Routes>
        </StyledContainer>
      </Router>
    </>
  );
};

export default App;
