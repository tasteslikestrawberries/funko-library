import styled from "styled-components";

const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const Main = () => {
  return (
    <>
      <StyledMainDiv>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Funkos"
            aria-label="search-button"
          />
           <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Search
          </button>
        </div>
      </StyledMainDiv>
      <h2>Funko Library</h2>
    </>
  );
};

export default Main;
