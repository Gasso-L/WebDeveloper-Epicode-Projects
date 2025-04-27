import { Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./customcard.css";

const CustomCard = ({
  asin,
  title,
  img,
  price,
  category,
  onShowModalComment,
  setModalCommentData,
}) => {
  const [isSelected, setIsSelected] = useState(false); //selezione card

  const selectedCard = () => {
    setIsSelected(!isSelected);
  };

  //funzione apertura modale e salvataggio dati da mandare al modale
  const populateModalComment = () => {
    setModalCommentData({ asin, title });
    onShowModalComment();
  };

  return (
    <Col sm={12} md={6} lg={3} key={asin} className="custom-card">
      <Card className={`border ${isSelected ? `border-3 border-warning` : ""}`}>
        <div className="d-flex justify-content-center pt-1">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>
            {price}€ | {category}
          </Card.Text>
          <div className="d-flex flex-column align-content-center gap-2">
            <Button variant="warning" onClick={selectedCard}>
              Add To Cart
            </Button>
            <Button variant="success" onClick={populateModalComment}>
              Reviews
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
