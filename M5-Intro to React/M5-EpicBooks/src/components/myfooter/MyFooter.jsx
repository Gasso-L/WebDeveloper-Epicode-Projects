import { Container, Row, Col } from "react-bootstrap";
import "./myfooter.css";

const MyFooter = () => {
    return (
        <footer className="pt-5">
            <Container>
            <Row>
                <Col sm={12} className="d-flex justify-content-center align-items-center">
                    <h3>EpicBooks!</h3>
                </Col>
            </Row>
            <Row className="py-4">
                <Col sm={12} className="footer-list">
                    <ul className="d-flex justify-content-center align-items-center gap-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}

export default MyFooter