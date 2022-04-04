import { useState, useEffect } from "react";

const Playground: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("");

  console.log("React 18 render!");

  const handleCount = () => {
    setClicked(!clicked);
    setCount(count + 1);
  };

  const handleQuote = () => {
    fetch("https://api.kanye.rest/").then((res) =>
      res
        .json()
        .then((res) => setQuote(res.quote))
        .then(() => {
          setClicked(!clicked);
          setCount(count + 1);
        })
    );
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
