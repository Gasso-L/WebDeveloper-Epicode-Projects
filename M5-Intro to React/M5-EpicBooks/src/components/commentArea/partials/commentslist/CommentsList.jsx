import SingleComment from "../singlecomment/SingleComment";
import { Table } from "react-bootstrap";
import "./commentslist.css";

const CommentsList = ({
  productComments,
  getReviewProduct,
  setcurrentEditComment,
}) => {
  return (
    <div className="custom-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Author</th>
            <th>Comment</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productComments.map((productComment) => {
            return (
              <SingleComment
                key={productComment._id}
                id={productComment._id}
                author={productComment.author}
                comment={productComment.comment}
                rate={productComment.rate}
                getReviewProduct={getReviewProduct}
                setcurrentEditComment={setcurrentEditComment}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CommentsList;
