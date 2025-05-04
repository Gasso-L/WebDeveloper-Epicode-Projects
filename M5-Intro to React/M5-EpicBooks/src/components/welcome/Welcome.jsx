import { ThemeContext } from "../contexts/ThemeContext";
import AllTheBooks from "../allthebooks/AllTheBooks";
import Alert from "react-bootstrap/Alert";
import { useContext } from "react";
import "./welcome.css";

const Welcome = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main
      className={`pb-3 main-content ${
        isDarkMode ? "bkg-dark-mode" : "bkg-light-mode"
      }`}
    >
      <Alert className="text-center mb-4">
        <h1>Welcome to EpiBooks!</h1>
      </Alert>
      <AllTheBooks />
    </main>
  );
};

export default Welcome;
