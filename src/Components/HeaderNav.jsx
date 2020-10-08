import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const HeaderNav = (props) => {
  let data = props.data;
  return (
    <>
      <Navbar className="bg-white rounded-bottom-20 shadow-sm">
        <Container>
          <Navbar.Brand>
            <Nav.Link className="px-0">
              <Link
                to="/"
                className="text-decoration-none text-theme font-lg font-30 "
              >
                ZWallet
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="d-flex align-items-center pr-2 ">
              <img
                src={require("../assets/img/samuel.svg")}
                alt=""
                className="mr-2"
                height="50px"
                weight="50px"
              />
              <div className="flex-column ">
                <div className="text-grey font-medium font-20">
                  {data["firstName"]} {data["lastName"]}
                </div>
                <div className="text-grey font-light font-15">
                  {data["phone"]}
                </div>
              </div>
              <img
                src={require("../assets/img/notification.svg")}
                alt=""
                srcSet=""
                className="ml-3"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
