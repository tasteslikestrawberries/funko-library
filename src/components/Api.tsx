import React from "react";
import { useState, useEffect } from "react";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, tap, catchError } from "rxjs/operators";
import { Table } from "react-bootstrap";

interface IFunko {
  id: string;
  title: string;
  series: string;
  image: string;
}

const Api: React.FC = () => {
  const [funkoData, setFunkoData] = useState<IFunko[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData$ = ajax(
      "https://mocki.io/v1/b8f51406-30a2-4005-bde3-e4936fe65ac9"
    );

    setLoading(true);

    const subscription = getData$
      .pipe(
        map((data) => data.response),
        tap((data) => console.log(data)),
        catchError((err) => of("An error occured: " + err)) //must return an Observable (containing error message)
      )
      .subscribe({
        next: (data: any) => {
          setFunkoData(data);
          setLoading(false);
        },

        //error: (err) => console.log(err)
      });

    //cleanup
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>IDX</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {funkoData &&
            funkoData.map((funko, idx) => (
              <>
                <tr key={idx}>
                  <td> {idx + 1} </td>
                  <td> {funko.title}</td>
                </tr>
              </>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Api;
