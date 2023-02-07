import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "./Filter.css";
import ReactStars from "react-stars";

const Filter = ({ handleChange, name, ratingChanged }) => {
  console.log(name);
  return (
    <div>
      <Navbar bg="light" variant="dark">
        <Nav className="me-auto nav">
          <Nav.Link href="#home">
            <div class="waviy">
              <span>J</span>
              <span>.</span>
              <span>M</span>
              <span>o</span>
              <span>v</span>
              <span>i</span>
              <span>e</span>
              <span>s</span>
            </div>
          </Nav.Link>

          <div className="searchbar">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={handleChange}
                value={name}
              />
            </Form>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Filter;
