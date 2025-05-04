import { ThemeContext } from "../../../contexts/ThemeContext.jsx";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { apiData } from "../../../../data/apiData.js";
import { useState, useContext } from "react";

const AddComment = ({ productID, getReviewProduct }) => {
  //Controllo API: spinner ed errori
  const [isLoading, setIsLoading] = useState(false); //stato per il caricamento
  const [errorAPI, setErrorAPI] = useState(""); //useState per l'errore

  const { isDarkMode } = useContext(ThemeContext);

  const sendReviewProduct = async (product) => {
    try {
      setIsLoading(true);
      const response = await fetch(apiData.API_ENDPOINT_POST_COMMENTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiData.TOKEN}`,
        },
        body: JSON.stringify(product),
      });
      return await response.json();
    } catch (error) {
      setErrorAPI(error.message);
    } finally {
      setIsLoading(false);
      getReviewProduct();
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const payload = {
      comment: e.target.elements.comment.value,
      rate: e.target.elements.rating.value,
      elementId: productID,
    };
    await sendReviewProduct(payload);
  };

  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        {/* se ho un errore e non sta caricando lancio l'alert */}
        {errorAPI && !isLoading && (
          <Alert variant="danger" className="d-flex justify-content-center">
            Ops...something went wrong. Please try later!
          </Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Control
            name="comment"
            placeholder="Leave a Comment Here..."
            required
            type="text"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Label className={`${isDarkMode ? `text-light` : ``}`}>
          Rating:
        </Form.Label>
        <Form.Select
          name="rating"
          required
          aria-label="Rating"
          defaultValue="1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <div className="d-flex justify-content-end align-items-center pt-3">
          <Button type="submit" variant="warning" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner animation="border" role="status"></Spinner>
              </>
            ) : (
              "Send Comment"
            )}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddComment;
