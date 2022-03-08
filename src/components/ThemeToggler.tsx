import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggler = () => {
    const [isSunny, setSunny] = useState(false);

    const handleToggle = () => {
        setSunny((isSunny) => !isSunny);
      };

    return <button
    style={{ border: "none", backgroundColor: "transparent" }}
    onClick={() => handleToggle()}
  >
    {isSunny ? (
      <FontAwesomeIcon
        icon={faSun}
        style={{ color: "yellow", fontSize: "1.5em" }}
      />
    ) : (
      <FontAwesomeIcon
        icon={faMoon}
        style={{ color: "#0d6efd", fontSize: "1.5em" }}
      />
    )}
  </button>
}

export default ThemeToggler;