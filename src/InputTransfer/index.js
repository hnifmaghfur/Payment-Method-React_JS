import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class InputTransfer extends Component {
  render() {
    return (
      <>
        <div className="rounded-12 shadow-sm bg-white h-100">
          <div className="d-flex flex-column px-4 py-2 h-100">
            <h5 className="font-lg font-25 my-3">Transfer To</h5>
            <div className="bg-white shadow-sm mt-4 p-3 rounded-12">
              <Link to="/">
                <div className="d-flex flex-row align-items-center">
                  <img src="/asset/history/1.png" alt="" />
                  <div className="ml-3 text-dark">
                    <div className="font-lg font-20">Samuel Suhi</div>
                    <div className="font-medium font-15">+62 813-8492-9994</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row">
              <p className="col-6 mt-4 ml-2">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="0.00"
                  className="text-center input-border-none text-theme font-40"
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="text-center d-flex flex-column h-100"
              >
                <div className="text-dark font-15 font-lg mb-2">
                  {" "}
                  Rp. inputan Available
                </div>
                <div className="d-flex justify-content-center">
                  <div className="border-bottom-1 w-35">
                    <img src="" alt="" srcset="" />
                    <Form.Control
                      placeholder="Add some notes"
                      className="text-center   input-border-none font-20"
                    />
                  </div>
                </div>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  className="bg-theme mt-auto mb-4 py-2 px-5 text-white font-lg font-15 rounded-7"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default InputTransfer;
