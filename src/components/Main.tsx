import React from "react";
import useFetchData from "./hooks/useFetchData";
import styled from "styled-components";
import logo from "../../src/assets/logo.png";
import { Table } from "react-bootstrap";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const Main: React.FC = () => {
  const { data, loading } = useFetchData();

  return (
    <>
      <StyledHeader>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Funkos"
            aria-label="search-button"
          />
          <button className="btn btn-primary" type="button" id="button-addon1">
            Search
          </button>
        </div>
      </StyledHeader>

      <StyledHeader>
        <img src={logo} alt="logo" style={{ width: "120px" }} />
        <h2>Library</h2>
      </StyledHeader>

      {loading && <div>Loading</div>}

      {!loading && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>#</th>
              <th>Title</th>
              <th>Series</th>
              <th className="funkoImg">Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry: any, idx: number) => (
              <tr key={idx}>
                <td>
                  <b>{idx + 1}</b>
                </td>
                <td>
                  <b>{entry.id}</b>
                </td>
                <td>{entry.title}</td>
                <td>{entry.series}</td>
                <td className="funkoImg">
                  <img
                    style={{ width: "150px" }}
                    src={entry.image}
                    alt="funkoImg"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Main;
