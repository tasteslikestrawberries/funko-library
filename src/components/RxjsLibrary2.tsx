import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../../src/assets/logo.png";
import { ajax } from "rxjs/ajax";
import { map, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { fromEvent } from "rxjs";
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

const RxjsLibrary2: React.FC = () => {
  const [funkoData, setFunkoData] = useState<IFunko[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //creating obs from input
    const inputObs$ = fromEvent(inputRef.current!, "input");

    //creating obs from http response
    const getData$ = ajax(
      "https://mocki.io/v1/b8f51406-30a2-4005-bde3-e4936fe65ac9"
    );

    //initial obs returns the whole array on first page load
    const initialObs$ = getData$
      .pipe(map((data) => data.response as IFunko[]))
      .subscribe((data) => setFunkoData(data));

    //subscribing to the input obs
    const inputSub$ = inputObs$
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(500), //wait till the user finished typing (avoid making a req on every keypress)
        distinctUntilChanged() //if a letter is typed=>deleted=>typed again, don't recall the api
      )
      .subscribe((input) => {
        setLoading(true);
        //inner subscription to the getData$ obs
        getData$
          .pipe(
            map((data) => data.response as IFunko[]), //extracting the response
            //delay(500),
            map((data: IFunko[]) => {
              if (input === "") return data;
              return data.filter((element: any) => {
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
      });

    //cleanup func
    return () => {
      initialObs$.unsubscribe();
      inputSub$.unsubscribe();
    };
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
            value={input}
            ref={inputRef}
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
                <td className="align-middle">
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

export default RxjsLibrary2;
