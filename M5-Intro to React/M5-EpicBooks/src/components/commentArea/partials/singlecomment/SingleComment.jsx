import "../singlecomment/singlecomment.css";
import { Button } from "react-bootstrap";
import { Trash2, Pencil } from "lucide-react";
import { apiData } from "../../../../data/apiData.js";
const SingleComment = ({
  id,
  author,
  comment,
  rate,
  getReviewProduct,
  setcurrentEditComment,
}) => {
  const handleDeleteComment = async () => {
    try {
      const response = await fetch(
        `${apiData.API_ENDPOINT_POST_COMMENTS}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiData.TOKEN}`,
          },
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
    <tr>
      <td className="short-text">{author}</td>
      <td className="short-text">{comment}</td>
      <td className="short-text">{rate}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Button variant="danger" value={id} onClick={handleDeleteComment}>
            <Trash2 size={20} />
          </Button>
          <Button
            variant="warning"
            value={id}
            onClick={() => setcurrentEditComment({ id, author, comment, rate })}
          >
            <Pencil size={20} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default SingleComment;
