import { ThemeContext } from "../contexts/ThemeContext";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import "./customcard.css";

const CustomCard = ({
  asin,
  title,
  img,
  price,
  category,
  setSelected,
  selected,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const selectedCard = () => {
    setSelected((prevSelected) => (prevSelected === asin ? null : asin));
  };

  return (
    <>
      <Card
        onClick={selectedCard}
        key={asin}
        className={`custom-card border ${
          selected ? `border-3 border-warning` : ""
        } ${isDarkMode ? `dark-mode` : `light-mode`}`}
      >
        <div className="d-flex justify-content-center pt-1">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>
            {price}€ | {category}
          </Card.Text>
          <div className="d-flex flex-column align-content-center gap-2">
            <Button variant="warning">Add To Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomCard;
