import EditSingleComment from "./partials/editsinglecomment/EditSingleComment.jsx";
import CommentsList from "./partials/commentslist/CommentsList.jsx";
import AddComment from "./partials/addcomment/AddComment.jsx";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { useState, useEffect, useContext } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { apiData } from "../../data/apiData.js";

const CommentArea = ({ asin }) => {
  //useState per prendere le recensioni del prodotto
  const [productReview, setProductReview] = useState([]);
  //Controllo API: spinner ed errori
  const [isLoading, setIsLoading] = useState(false); //stato per il caricamento
  const [errorAPI, setErrorAPI] = useState(""); //useState per l'errore

  const [currentEditComment, setcurrentEditComment] = useState(null);

  const { isDarkMode } = useContext(ThemeContext);

  //fetch recupero le recensioni del libro
  const getReviewProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${apiData.API_ENDPOINT_GET_COMMENTS}${asin}/comments/`,
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
    if (asin) {
      getReviewProduct();
    }
  }, [asin]);

  return (
    <div>
      {asin && (
        <>
          <h5 className={`pb-2 ${isDarkMode ? `text-light` : ``}`}>
            Last Comments:
          </h5>
          {isLoading && !errorAPI && (
            <Spinner animation="border" role="status"></Spinner>
          )}
          {!isLoading && errorAPI && (
            <Alert variant="danger" className="d-flex justify-content-center">
              Ops...something went wrong. Please try later!
            </Alert>
          )}
          {!isLoading && !errorAPI && (
            <CommentsList
              productComments={productReview}
              getReviewProduct={getReviewProduct}
              setcurrentEditComment={setcurrentEditComment}
            />
          )}
          <h5 className={`py-3 ${isDarkMode ? `text-light` : ``}`}>
            {!currentEditComment ? "Leave a Comment" : "Edit a Comment"}
          </h5>
          {!currentEditComment && (
            <AddComment productID={asin} getReviewProduct={getReviewProduct} />
          )}
          {currentEditComment && (
            <EditSingleComment
              productID={asin}
              comment={currentEditComment}
              getReviewProduct={getReviewProduct}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CommentArea;
