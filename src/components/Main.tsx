import React from "react";
import { useState, useEffect } from "react";
import useFetchData from "./hooks/useFetchData";
import styled from "styled-components";
import logo from "../../src/assets/logo.png";
import { Table } from "react-bootstrap";

interface IFunko {
  id: string;
  title: string;
  series: string;
  image: string;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const Main: React.FC = () => {
  const { data, loading }: { data: IFunko[]; loading: boolean } = useFetchData();
  const [searchData, setSearchData] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IFunko[]>([]);

  useEffect(() => {
    const results = data.filter((entry) => {
      if (entry.id.toLowerCase().includes(searchData)) return true;
      if (entry.title.toLowerCase().includes(searchData)) return true;
      if (entry.series.toLowerCase().includes(searchData)) return true;

      return false;
    });

    setSearchResults(results);
  }, [data, searchData]);

  return (
    <>
      <StyledHeader>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Funkos"
            aria-label="search-button"
            value={searchData}
            onInput={(e) => setSearchData(e.currentTarget.value)}
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
            {searchResults.map((entry: any, idx: number) => (
              <tr key={idx}>
                <td className="align-middle">
                  <b>{idx + 1}</b>
                </td>
                <td className="align-middle">
                  <b>{entry.id}</b>
                </td>
                <td className="align-middle">{entry.title}</td>
                <td className="align-middle">{entry.series}</td>
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
