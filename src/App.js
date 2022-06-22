import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import "./App.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imagescar1 from "./images/imagescar1.jpg";
import imagescar2 from "./images/imagescar2.jpg";
import imagescar3 from "./images/imagescar3.jpg";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <div className="Navbar">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">palm exhibition</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="kinds of cars" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Hyundai</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Toyota</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Mercedes</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagescar1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagescar2}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagescar3}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="card-form">
        <Card style={{ width: "18rem" }}>
          <ProfilePhoto />
          <Card.Body>
            <FullName />
            <Card.Text>
              It is our pleasure to deal with you and we work to satisfy all
              customers .
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Form */}
        <Form className="form">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Address />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Type of Company</th>
              <th>car class</th>
              <th>Company link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hyundai</td>
              <td>lantera</td>
              <td>Hyundai@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Toyota</td>
              <td>Tundra</td>
              <td>Toyota@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mercedes</td>
              <td>G class</td>
              <td>Mercedes@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* footer */}
      <div className="footer">
        <footer className="page-footer font-small blue pt-4 footer1">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ABOUT US </h5>
                <p>
                  We are not the only ones in libya but we are your best
                  choice...
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Email address : arooh7546@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!">Phone Number :00218925345580</a>
                  </li>
                  <li>
                    <a href="#!">Other Ph Num : 002185340125</a>
                  </li>
                  <li>
                    <a href="#!">Address : sbhha-Libya</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram-square"></i>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
