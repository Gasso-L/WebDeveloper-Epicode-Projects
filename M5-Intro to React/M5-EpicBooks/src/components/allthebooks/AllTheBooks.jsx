import { Container, Row, Spinner, Alert, Button } from "react-bootstrap";
import CommentArea from "../commentArea/commentArea";
import InputSearch from "../inputSearch/InputSearch";
import CustomCard from "../customcard/CustomCard";
import { apiData } from "../../data/apiData.js";
import { useEffect, useState } from "react";

const AllTheBooks = () => {
  //Controllo API: spinner, prodotti ed errori
  const [isLoading, setIsLoading] = useState(false); //stato per il caricamento
  const [products, setProducts] = useState([]); //useState per prendere i dati dalle API
  const [errorAPI, setErrorAPI] = useState(""); //useState per l'errore

  //input da cercare
  const [productQuery, setProductQuery] = useState("");
  //input non trovato
  const [queryMissed, setqueryMissed] = useState(false);

  //Stato Modale
  const [showModalComment, setShowModalComment] = useState(false);

  //Dati da passare al Modale
  const [modalCommentData, setModalCommentData] = useState({});

  //Show Modal
  const handleShowModalComment = () => {
    setShowModalComment(true);
  };
  //Close Modal
  const handleCloseModalComment = () => {
    setShowModalComment(false);
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

  //Funzione recupera input da cercare dal figlio
  const handleSearch = (query) => {
    setProductQuery(query);
  };

  //Funzione reset dopo ricerca vuota
  const handleReset = () => {
    setProducts(products);
    setqueryMissed(false);
  };

  return (
    <>
      <Container className="pb-4">
        <Row className="pb-5 justify-content-center">
          <InputSearch onSearch={handleSearch} />
        </Row>
        <Row className="gy-3 justify-content-center">
          {isLoading && !errorAPI && (
            <Spinner animation="border" role="status"></Spinner>
          )}
          {!isLoading && errorAPI && (
            <Alert variant="danger" className="d-flex justify-content-center">
              Ops...something went wrong. Please try later!
            </Alert>
          )}
          {!isLoading && !errorAPI && queryMissed && (
            <Alert
              variant="warning"
              className="d-flex flex-column align-items-center"
            >
              <p>No books found!</p>
              <Button variant="warning" onClick={handleReset}>
                Go Back
              </Button>
            </Alert>
          )}
          {!isLoading &&
            !errorAPI &&
            !queryMissed &&
            products.map((product) => {
              return (
                <CustomCard
                  key={product.asin}
                  category={product.category}
                  img={product.img}
                  price={product.price}
                  title={product.title}
                  asin={product.asin}
                  onShowModalComment={handleShowModalComment} //passo alla card la visualizzazione del modale
                  setModalCommentData={setModalCommentData}
                />
              );
            })}
        </Row>
      </Container>
      {showModalComment && (
        <CommentArea
          show={showModalComment}
          handleCloseModalComment={handleCloseModalComment}
          productAsin={modalCommentData.asin}
          productTitle={modalCommentData.title}
        />
      )}
    </>
  );
};

export default AllTheBooks;
