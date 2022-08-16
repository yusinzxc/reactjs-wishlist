import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

import { useState } from "react";
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";
import { GoPlus } from 'react-icons/go';
import NewWish from "./components/NewWish";

function App() {
  const [empty, setEmpty] = useState(false)
  const [input, setInput] = useState({
    embed: "",
    url: "",
    title: "",
    price: "",
    description: ""
  }); const { embed, url, title, price, description } = input;
  const [state, setState] = useState([])
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(true)
  }
  function handleClose() {
    setShow(false)
  }
  function handleOnChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }
  function addNewWish() {
    let wish = input;
    let add = state;
    add.push(wish)
    setState(add)
    handleClose()
  }


  return (
    <>
      <NewWish show={show} handleShow={handleShow} handleClose={handleClose} handleOnChange={handleOnChange} addNewWish={addNewWish} />
      <Navbar variant="light" bg="light" className="border-bottom border-dark mb-3">
        <Container fluid className="justify-content-between">
          <Navbar.Brand className="fs-3 fw-bold d-flex align-items-center">
            Wishlist
          </Navbar.Brand>
          <Button className="border border-dark text-dark new-wish" variant="warning" onClick={handleShow}>
            <GoPlus className="mb-1" />
          </Button>
        </Container>
      </Navbar>
      <Container className='test min-vh-100' fluid>
        <Row>
          {
            state.length ? state.map(function (value, index) {
              const { embed, url, title, price } = value;
              return (
                <Col md={4} lg={2} key={index}>
                  <Card className="mb-3 border border-dark">
                    <Card.Img variant="top" src={embed} className="border-bottom border-dark" />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-secondary">₱{price}</span>
                        <a href={url}>

                          <Button>Buy Now</Button>
                        </a>

                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }) : null
          }
        </Row>
      </Container>
    </>
  )
}


export default App;
