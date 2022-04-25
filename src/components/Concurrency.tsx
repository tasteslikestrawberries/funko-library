import { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { mockData } from "../assets/mockdata";
import { ajax } from "rxjs/ajax";
import { concatMap, delay, of } from "rxjs";

const StyledMainFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 50vw;
  height: 50vh;
  overflow: hidden;
  border: 1px solid #000;
`;

const StyledNonUrgent = styled.span`
  color: #fd0dad;
  margin: 1rem;
  padding: 0.5rem;
`;

export default function Concurrency() {
  const [data, setData] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Mark any state updates inside as transitions
    startTransition(() => {
      const obs$ = of(mockData);
      const subscription = obs$
        .pipe(
          concatMap(async () => {
            //heavy data req
           await ajax(
              "https://jsonplaceholder.typicode.com/photos"
            ).subscribe(heavyData => console.log(heavyData));
          })
        )
        .subscribe(() => setData(mockData));
    });
  }, []);

  const handleInput = (event: any) => {
    setInput(event?.target.value);
  };
  return (
    <>
      <h2>Concurrency Test (useTransition hook)</h2>
      <StyledMainFlexContainer>
        <div>
          <h4>Urgent state change</h4>
          <input type="text" onInput={handleInput}></input>
          <p>Input: {input}</p>
        </div>

        <div>
          <h4>Non-urgent (wrapped in startTransition):</h4>
          <StyledFlexContainer>
            {isPending && <Spinner />}
            {data.map((e) => (
              <StyledNonUrgent>{e}</StyledNonUrgent>
            ))}
          </StyledFlexContainer>
        </div>
      </StyledMainFlexContainer>
    </>
  );
}
