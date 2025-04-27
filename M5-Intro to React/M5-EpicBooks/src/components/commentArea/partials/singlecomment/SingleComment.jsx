import "../singlecomment/singlecomment.css";
import { Button } from "react-bootstrap";
import { Trash2, Pencil } from "lucide-react";
const SingleComment = ({ id, author, comment, rate }) => {
  return (
    <tr>
      <td className="short-text">{author}</td>
      <td className="short-text">{comment}</td>
      <td className="short-text">{rate}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Button variant="danger" value={id}>
            <Trash2 size={20} />
          </Button>
          <Button variant="warning" value={id}>
            <Pencil size={20} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default SingleComment;
