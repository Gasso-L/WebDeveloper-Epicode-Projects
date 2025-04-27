import { Col, Button } from "react-bootstrap";
import { useRef } from "react";

const InputSearch = ({ onSearch }) => {
  const inputRef = useRef(null); //utilizzo l'hook useRef per salvarmi l'input da cercare

  //al submit del form mi recupero il libro da cercare ed invoco la funzione per darlo al componente padre
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <>
      <Col sm={6}>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search Book by Title"
            aria-label="Search"
            ref={inputRef}
          />
          <Button variant="warning" type="submit">
            Search
          </Button>
        </form>
      </Col>
    </>
  );
};

export default InputSearch;
