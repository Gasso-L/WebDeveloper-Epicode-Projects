import { Button } from "react-bootstrap";
import "./custombutton.css";

const BtnBuyNow = ({title}) => {
    return(
        <Button className="btn btn-buy-now custom-btn" variant="">
            {title}
        </Button>
    )
}

export default BtnBuyNow;