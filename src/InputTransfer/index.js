import React, { Component } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class InputTransfer extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      sentID: "",
      receiveID: "",
      amount: "",
      notes: "",
    };
    const path = window.location.href.split("/");
    this.idSender = parseInt(path[path.length - 4]);
    this.idReceiver = parseInt(path[path.length - 1]);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const response = await Axios.get(
      `http://localhost:8000/api/users/${this.idReceiver}`
    );
    this.setState({ data: response.data.data });
  }

  sentData() {
    Axios.post("http://localhost:8000/api/transactions", {
      sentID: this.idSender,
      receiveID: this.idReceiver,
      amount: this.state.amount,
      notes: this.state.notes,
    }).then((res) => console.log(res));
    return (
      <Redirect
        to={{
          pathname: `${this.idReceiver}/id/confirmation/to/${this.idReceiver}`,
        }}
      />
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.amount);
    console.log(this.state.notes);
    this.sentData();
  }

  render() {
    return (
      <>
        <div className="rounded-12 shadow-sm bg-white h-100">
          <div className="d-flex flex-column px-4 py-2 h-100">
            <h5 className="font-lg font-25 my-3">Transfer To</h5>
            <div className="bg-white shadow-sm mt-3 p-3 rounded-12">
              <Link to="/">
                <div className="d-flex flex-row align-items-center">
                  <img src={require("../assets/img/samuel.svg")} alt="" />
                  {this.state.data.map((item, index) => {
                    return (
                      <div key={index} className="ml-3 text-dark">
                        <div className="font-lg font-20">
                          {item.firstName} {item.lastName}
                        </div>
                        <div className="font-medium font-15">{item.phone}</div>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>
            <div className="row">
              <p className="col-6 mt-4 ml-2">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="0.00"
                  name="value"
                  className="text-center input-border-none text-theme font-40"
                  onChange={(e) => this.setState({ amount: e.target.value })}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="text-center d-flex flex-column h-100"
              >
                <div className="text-dark font-15 font-lg mb-2">
                  Rp. inputan Available
                </div>
                <div className="d-flex justify-content-center">
                  <div className="border-bottom-1 w-35">
                    <img src="" alt="" srcset="" />
                    <Form.Control
                      placeholder="Add some notes"
                      name="message"
                      className="text-center   input-border-none font-20"
                      onChange={(e) => this.setState({ notes: e.target.value })}
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
