import AllTheBooks from "../allthebooks/AllTheBooks";
import CommentArea from "../commentArea/commentArea";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <main className="pb-3">
      <Alert className="text-center mb-4">
        <h1>Welcome to EpiBooks!</h1>
      </Alert>
      <AllTheBooks />
    </main>
  );
};

export default Welcome;
