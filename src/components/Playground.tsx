import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

const Playground: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("");
  const [test, setTest] = useState(false);

  console.log("React 18 render!");

  const handleCount = () => {
    flushSync(() => {
      setClicked(!clicked);
      setCount(count + 1);
    });
    //trigger re-render with specific state update (flushSync())
    //doesn' work if the upper state updates aren't wrapped in the function too (todo check why)
    flushSync(() => {
      setTest(!test);
    });
  };

  const handleQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res.quote);
        setClicked(!clicked);
        setCount(count + 1);
      });
  };

  const handleTimeout = () => {
    setTimeout(() => {
      setClicked(!clicked);
      setCount(count + 1);
    }, 1000);
  };

  return (
    <>
      <button onClick={handleCount}>Get Count</button>
      <p>Count is: {count} </p>
      <button onClick={handleQuote}>Get Quote</button>
      <p>Quote is: {quote} </p>
      <button onClick={handleTimeout}>Set timeout</button>
      <p>Check console </p>
    </>
  );
};

export default Playground;
