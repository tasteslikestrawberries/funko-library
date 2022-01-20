import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../src/assets/logo.png";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
//import { throwError } from "rxjs";
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

const RxjsLibrary: React.FC = () => {
  const [funkoData, setFunkoData] = useState<IFunko[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");

  //console.log(input);

  useEffect(() => {
    const getData$ = ajax(
      "https://mocki.io/v1/b8f51406-30a2-4005-bde3-e4936fe65ac9"
    );

    setLoading(true);

    const subscription = getData$
      .pipe(
        map((data) => data.response as IFunko[]),
        //delay(500),
        map((data: IFunko[]) => {
          if (input === "") return data;
          return data.filter((element: IFunko) => {
            return (
              element.title.toLowerCase().includes(input) ||
              element.series.toLowerCase().includes(input) ||
              element.id.toLowerCase().includes(input)
            );
          });
        })
        //tap((data) => console.log(data))
        //catchError((err) => throwError( () => new Error('Well,fudge'))) //must return an Observable (containing error message)
      )
      .subscribe({
        next: (data: any) => {
          setFunkoData(data);
          setLoading(false);
        },
        //this actually handles the error, without it error is uncaught
        error: (err) => {
          console.warn(err);
          setLoading(false);
          setErrorMessage("Sorry, an error occured.");
        },
      });

    //cleanup func
    return () => subscription.unsubscribe();
  }, [input]);

  return (
    <>
      <StyledHeader>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Funkos"
            aria-label="search-button"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </StyledHeader>

      <StyledHeader>
        <img src={logo} alt="logo" style={{ width: "120px" }} />
        <h2>Library</h2>
      </StyledHeader>

      {loading && <div>Loading...</div>}
      {errorMessage}

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
          {funkoData ? (
            funkoData.map((funko, idx) => (
              <tr key={idx}>
                <td className="align-middle"> {idx + 1} </td>
                <td className="align-middle"> {funko.id}</td>
                <td className="align-middle"> {funko.title}</td>
                <td className="align-middle"> {funko.series}</td>
                <td className="funkoImg">
                  {" "}
                  <img
                    src={funko.image}
                    style={{ width: "150px" }}
                    alt="funkoImg"
                  />
                </td>
              </tr>
            ))
          ) : (
            <span>Sorry, an error occured.</span>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default RxjsLibrary;
