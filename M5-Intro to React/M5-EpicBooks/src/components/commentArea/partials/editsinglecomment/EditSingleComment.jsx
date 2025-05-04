import { Form, Button } from "react-bootstrap";
import { apiData } from "../../../../data/apiData";
import { useState } from "react";

const EditSingleComment = ({ comment, getReviewProduct, productID }) => {
  const [formData, setformData] = useState({
    comment: "",
    rate: "",
    elementId: productID,
  });

  const onChangeInput = (e) => {
    const rateValue = e.target.name === "rate";
    setformData({
      ...formData,
      [e.target.name]: rateValue ? Number(e.target.value) : e.target.value,
    });
  };

  const modifyComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiData.API_ENDPOINT_POST_COMMENTS}/${comment.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiData.TOKEN}`,
          },
          body: JSON.stringify(formData),
        }
      );
      return await response.json();
    } catch (error) {
      console.log(error.message);
    } finally {
      getReviewProduct();
    }
  };
  return (
    <Form onSubmit={modifyComment}>
      <Form.Group className="mb-3">
        <Form.Control
          defaultValue={comment.comment}
          name="comment"
          placeholder="Leave a Comment Here..."
          required
          type="text"
          as="textarea"
          rows={3}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Form.Label>Rating:</Form.Label>
      <Form.Select
        name="rate"
        required
        aria-label="Rating"
        defaultValue={comment.rate}
        onChange={onChangeInput}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <div className="d-flex justify-content-end align-items-center pt-3">
        <Button type="submit" variant="warning">
          Edit Comment
        </Button>
      </div>
    </Form>
  );
};

export default EditSingleComment;
