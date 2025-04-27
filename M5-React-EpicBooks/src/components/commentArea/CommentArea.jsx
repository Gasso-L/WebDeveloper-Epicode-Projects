import CommentsList from "./partials/commentslist/CommentsList.jsx";
import { Button, Modal, Spinner, Alert } from "react-bootstrap";
import AddComment from "./partials/addcomment/AddComment.jsx";
import { apiData } from "../../data/apiData.js";
import { useState, useEffect } from "react";
import "../commentArea/commentarea.css";

const CommentArea = ({
  productAsin,
  productTitle,
  show,
  handleCloseModalComment,
}) => {
  //useState per prendere le recensioni del prodotto
  const [productReview, setProductReview] = useState([]);
  //Controllo API: spinner ed errori
  const [isLoading, setIsLoading] = useState(false); //stato per il caricamento
  const [errorAPI, setErrorAPI] = useState(""); //useState per l'errore

  //fetch recupero le recensioni del libro
  const getReviewProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${apiData.API_ENDPOINT_GET_COMMENTS}${productAsin}/comments/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiData.TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setProductReview(data);
    } catch (error) {
      setErrorAPI(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (show) {
      getReviewProduct();
    }
  }, [show]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModalComment}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{productTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="pb-2">Last Comments:</h5>
          {isLoading && !errorAPI && (
            <Spinner animation="border" role="status"></Spinner>
          )}
          {!isLoading && errorAPI && (
            <Alert variant="danger" className="d-flex justify-content-center">
              Ops...something went wrong. Please try later!
            </Alert>
          )}
          {!isLoading && !errorAPI && (
            <CommentsList productComments={productReview} />
          )}
          <h5 className="py-3">Leave a Comment</h5>
          <AddComment productID={productAsin} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentArea;
