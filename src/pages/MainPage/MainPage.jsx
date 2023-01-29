import { useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Container,
  Row,
  Modal,
} from "react-bootstrap";
import "./mainPage.css";
import image1 from "./images/image.jpg";
import image2 from "./images/book.jpg";

function MainPage() {
  const [show, setShow] = useState(false);
  window.localStorage.setItem("name", "Hello arsen");

  return (
    <div className="main_page-container">
      <div className="list-book">
        <CardGroup>
          <Row xs={1} md={4} className="d-flex justify-content-center g-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Человек в 4-х мерном пространстве</Card.Title>
                <Card.Text>Мистер Червяк</Card.Text>
                <Button variant="warning">Learn more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Сердца в Атлантиде</Card.Title>
                <Card.Text>Стивен Кинг</Card.Text>
                <Button variant="warning">Learn more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Сердца в Атлантиде</Card.Title>
                <Card.Text>Стивен Кинг</Card.Text>
                <Button variant="warning">Learn more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Сердца в Атлантиде</Card.Title>
                <Card.Text>Стивен Кинг</Card.Text>
                <Button variant="warning">Learn more</Button>
              </Card.Body>
            </Card>
          </Row>
        </CardGroup>
        <div className="create-book">
          <Button variant="warning" className="create-button">
            Add book
          </Button>
        </div>
      </div>
    </div>
  );
}
export default MainPage;

{
  /* <div className="book-block">
<div className="img-cover">
  <img src={image1}></img>
</div>
<div className="book-description">
  <p className="title">Сердца в Атлантиде</p>
  <span className="author">Стивен Кинг</span>
</div>
</div> */
}
