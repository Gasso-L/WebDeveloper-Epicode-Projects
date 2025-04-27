import { Button } from "react-bootstrap";
import "./custombutton.css";

const BtnAddToCart = ({title}) => {
    return(
        <Button className="btn btn-add-cart custom-btn" variant="">
            {title}
        </Button>
    )
}

export default BtnAddToCart;