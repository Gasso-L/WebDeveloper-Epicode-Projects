import { ProductsContext } from "../contexts/ProductsContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

const InputSearch = () => {
  const { setProductQuery, showQueryProducts } = useContext(ProductsContext);

  const [productSearch, setProductSearch] = useState("");

  const handleInputChange = (e) => {
    setProductSearch(e.target.value);
  };

  //al submit del form mi recupero il libro da cercare ed invoco la funzione del componente context
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductQuery(productSearch);
    showQueryProducts();
    setProductSearch(""); //svuoto l'input dopo la ricerca
  };

  return (
    <>
      <form
        className="d-flex pt-3 pt-lg-0"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search Book by Title"
          aria-label="Search"
          onChange={handleInputChange}
          value={productSearch}
        />
        <Button variant="warning" type="submit">
          Search
        </Button>
      </form>
    </>
  );
};

export default InputSearch;
