import React from "react";
import { Nav, Row, Col, Container,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div style={{ 
      color:"whitesmoke", 
      backgroundImage: 'url("https://images.unsplash.com/photo-1561378552-1a7f6f193840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNub3clMjBjb3ZlcmVkJTIwbW91bnRhaW4lMjByYW5nZXxlbnwwfHwwfHx8MA%3D%3D")',
      backgroundSize:'cover',
      backgroundPosition:'center',
      padding:'50px',
      width:'92%'
    }}>
      <Container style={{display:"flex",justifyContent:"space-between"}}>
        <Row style={{display:"flex",marginLeft:50}}>
          <Col md={3} style={{width:'25%', padding:'10px',marginTop:'50px'}}>
            <h2>MOVIEAK.com</h2>
            <p style={{ width: '100%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col style={{marginLeft:50}}>
            <h2>Customer Service</h2>
            <ul>
              <li >
                <Nav.Link style={{ color:"white"}} as={Link} to="/">Home</Nav.Link>
              </li>
              <br />
              <li>
                <Nav.Link style={{ color:"white"}} as={Link} to="/comingsoon">Coming Soon</Nav.Link>
              </li>
              <br />
              <li>
                <Nav.Link style={{ color:"white"}} as={Link} to="/toprated">Top Rated</Nav.Link>
              </li>
            </ul>
          </Col>
          <Col style={{marginLeft:100}}>
          <h2>RECENT POSTS</h2>
          <Row className="mb-3" style={{width:'50%'}}>
            <Col xs={12}>
            <Image src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_59-115x85_c.jpg" fluid />
                <div className="p-2">
                  <h4>
                    SIX BOOK-TO-FILM ADAPTATIONS TO GET EXCITED ABOUT
                    THIS AUTUMN
                  </h4>
                  <p className="text-muted">April 28, 2022 / 0 Comments</p>
                </div>
                <hr />
                <Row>
              <Col xs={12}>
                <Image src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_57-115x85_c.jpg" fluid />
                <div className="p-2">
                  <h4>
                    THE BEATLES: EIGHT DAYS A WEEK - THE TOURING
                  </h4>
                  <p className="text-muted">April 28, 2022 / 0 Comments</p>
                </div>
                <hr />
              </Col>
            </Row>
            </Col>
          </Row>
          </Col>
          <Col style={{marginRight:"15%"}}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 9067 Zurich, Switzerland 87
              </li>
              <li>
                <i className="fas fa-envelope"></i> abc@gmail.com
              </li>
              <li>
                <i className="fas fa-phone"></i> 01-234-5678
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainFooter;