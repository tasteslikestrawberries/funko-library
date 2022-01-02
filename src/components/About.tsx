import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: center;
  font-size: large;
`;

const About = () => {
  return (
    <>
      <h2>About</h2>
      <StyledContainer>
        Made by{" "}
        <a
          href="https://github.com/tasteslikestrawberries"
          target="_blank"
          rel="noreferrer"
        >
          <b style={{ color: "#0d6efd" }}>Anja</b>{" "}
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "1.5em", color: "#0B0B45" }}
          />
        </a>
      </StyledContainer>
    </>
  );
};

export default About;
