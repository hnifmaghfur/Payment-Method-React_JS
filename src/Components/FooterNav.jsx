import React from "react";
import { Container, Navbar } from "react-bootstrap";
const FooterNav = (props) => {
  return (
    <>
      <Navbar className="bg-theme py-3">
        <Container>
          <Navbar.Brand className="text-theme-2 font-medium font-15">
            2020 Zwallet. All right reserved.
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="d-flex align-items-center">
              <div className="text-theme-2 font-light font-15 mx-3">
                +62 5637 8882 9901
              </div>
              <div className="text-theme-2 font-light font-15 ml-3">
                contact@zwallet.com
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FooterNav;
