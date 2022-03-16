import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../shared/ThemeContext";

const ThemeToggler = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return <button
    style={{ border: "none", backgroundColor: "transparent" }}
    onClick={() => toggleTheme()}
  >
    {isDark ? (
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