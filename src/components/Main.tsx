import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../src/assets/logo.png";
import { Table } from "react-bootstrap";
import axios from "axios";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const Main: React.FC = () => {
  useEffect(() => {
    const getFunkoData = async () => {
      try {
        const data = await axios.get(
          "https://raw.githubusercontent.com/kennymkchan/funko-pop-data/master/funko_pop.json"
        );
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFunkoData();
  }, []);

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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#No.</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Main;
