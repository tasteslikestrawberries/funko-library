import { useEffect, useState, startTransition, useTransition } from "react";
import Spinner from "./Spinner";

export default function Concurrency() {
  const [data, setData] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const mockData = ["Mouse", "Chicken", "Bird", "Dog", "Fox"];

  useEffect(() => {
    stall();
  }, []);

  const stall = () => {
    // Mark any state updates inside as transitions
    startTransition(() => {
      setTimeout(() => {
        // Transition: Show the results
        setData(mockData);
      }, 5000);
    });
  };

  const handleInput = (event: any) => {
    setInput(event?.target.value);
  };
  return (
    <>
      <h2>Concurrency</h2>
      <h3>1. startTransition API</h3>
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: "center", gap: "3rem" }}
      >
        <div>
          <h4>Non-urgent (wrapped in startTransition):</h4>
          <ul>
            {isPending && <Spinner />}
            {data.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Urgent state change</h4>
          <input type="text" onInput={handleInput}></input>
          <p>Input: {input}</p>
        </div>
      </div>
    </>
  );
}
