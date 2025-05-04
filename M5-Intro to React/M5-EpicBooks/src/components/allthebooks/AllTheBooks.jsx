import { Container, Row, Spinner, Alert, Button, Col } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";
import CommentArea from "../commentArea/commentArea";
import CustomCard from "../customcard/CustomCard";
import { useContext, useState } from "react";

const AllTheBooks = () => {
  //Uso il context
  const { products, isLoading, errorAPI, queryMissed, handleReset } =
    useContext(ProductsContext);

  const [selected, setSelected] = useState(false); //selezione card

  const [selectedAsin, setSelectedAsin] = useState(""); //stato per l'asin della

  return (
    <>
      <Container fluid className="pb-4">
        <Row className="gy-3">
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
          {!isLoading && !errorAPI && !queryMissed && (
            <Col md={8}>
              <Row className="gy-3">
                {products.map((product) => (
                  <Col sm={12} md={6} lg={4} key={product.asin}>
                    <CustomCard
                      category={product.category}
                      img={product.img}
                      price={product.price}
                      title={product.title}
                      asin={product.asin}
                      selected={selectedAsin === product.asin}
                      setSelected={setSelectedAsin}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
          <Col md={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
