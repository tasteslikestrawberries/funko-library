import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//components
import Main from "./components/Main";
import TodoList from "./components/TodoList/TodoList";
import About from "./components/About";
import RxjsLibrary from "./components/RxjsLibrary";
import RxjsLibrary2 from "./components/RxjsLibrary2";
import ThemeToggler from "./components/ThemeToggler";

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

  return (
    <>
      <Router>
        <StyledNav>
          <StyledLinks>
            <Link to="/main">Library</Link>
            <Link to="/rxjs-lib">Library with RxJS</Link>
            <Link to="/rxjs-lib2">Library with RxJS2</Link>
            <Link to="/todo-list">Todos</Link>
            <Link to="/about">About</Link>
          </StyledLinks>
          <ThemeToggler />
        </StyledNav>

        <StyledContainer>
          <Routes>
            <Route path="main" element={<Main />} />
            <Route path="todo-list" element={<TodoList />} />
            <Route path="rxjs-lib" element={<RxjsLibrary />} />
            <Route path="rxjs-lib2" element={<RxjsLibrary2 />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Main/>} />
          </Routes>
        </StyledContainer>
      </Router>
    </>
  );
};

export default App;
