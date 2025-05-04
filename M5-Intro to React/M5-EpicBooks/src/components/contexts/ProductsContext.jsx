import { createContext, useEffect, useState } from "react";
import { apiData } from "../../data/apiData.js";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  //Controllo API: spinner, prodotti ed errori
  const [isLoading, setIsLoading] = useState(false); //stato per il caricamento
  const [products, setProducts] = useState([]); //useState per prendere i dati dalle API
  const [errorAPI, setErrorAPI] = useState(""); //useState per l'errore

  //input da cercare
  const [productQuery, setProductQuery] = useState("");
  //input non trovato
  const [queryMissed, setqueryMissed] = useState(false);

  //restituisce i prodotti da cercare
  const showQueryProducts = () => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(productQuery.toLowerCase())
    );
  };

  //useEffect per l'input da cercare
  useEffect(() => {
    if (productQuery.length !== 0) {
      const filterProducts = showQueryProducts();
      if (filterProducts.length !== 0) {
        setqueryMissed(false);
        setProducts(filterProducts);
      } else {
        setqueryMissed(true);
      }
    }
  }, [productQuery]);

  //Funzione reset dopo ricerca vuota
  const handleReset = () => {
    getAllProducts();
    setProducts(products);
    setqueryMissed(false);
  };

  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiData.API_ENDPOINT, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiData.TOKEN}`,
        },
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setErrorAPI(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //caricato il componente eseguo la fetch per tutti i prodotti
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        errorAPI,
        productQuery,
        setProductQuery,
        queryMissed,
        showQueryProducts,
        handleReset,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
