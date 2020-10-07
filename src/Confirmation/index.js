import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Confirmation extends Component {
  constructor(props) {
    super();
  }
  App = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <button
          className="btn bg-theme align-self-end mt-auto mb-4 py-2 px-5 text-white font-lg font-15 rounded-7"
          onClick={() => handleShow(true)}
        >
          Continue
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="modal-title mb-2">Enter PIN to Transfer</h5>
                <button
                  type="button"
                  className="col-1 close"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className="col-9 pl-0 pb-5">
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </p>
            </div>
            <div className="d-flex flex-row justify-content-around mb-3">
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
              <input
                type="text"
                className="input-mdl my-3"
                placeholder="__"
                maxlength="1"
              />
            </div>
            <div className="col row justify-content-end pr-0 mb-2">
              <button type="button" className="btn bg-theme text-white">
                Continue
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  render() {
    return (
      <>
        <div className="rounded-12 shadow-sm bg-white h-100">
          <div className="d-flex flex-column px-4 py-2 h-100">
            <h6 className="font-lg font-20 mb-3 mt-4">Transfer To</h6>
            <div className="bg-white shadow-sm mb-4 mt-0 p-3 rounded-12">
              <div className="d-flex flex-row align-items-center">
                <img src="a.png" alt="" />
                <div className="ml-3">
                  <div className="font-lg font-20">Samuel Suhi</div>
                  <div className="small font-medium">+62 813-8492-9994</div>
                </div>
              </div>
            </div>
            <h6 className="font-lg font-20 my-2">Details</h6>
            <div className="bg-white shadow-sm pl-4 mt-3 py-2 rounded-12">
              <div className="d-flex flex-column">
                <div className="small txt-third mb-2">Amount</div>
                <h5 className="font-lg font-20">Rp. 100.000</h5>
              </div>
            </div>
            <div className="bg-white shadow-sm pl-4 mt-3 py-2 rounded-12">
              <div className="d-flex flex-column">
                <div className="font-medium small txt-third mb-2">
                  Balance Left
                </div>
                <h5 className="font-lg font-20">Rp. 20.000</h5>
              </div>
            </div>
            <div className="bg-white shadow-sm pl-4 mt-3 py-2 rounded-12">
              <div className="d-flex flex-column">
                <div className="font-medium small txt-third mb-2">
                  Date & Time
                </div>
                <h5 className="font-lg font-20">May 11, 2020 - 12.20</h5>
              </div>
            </div>
            <div className="bg-white shadow-sm pl-4 mt-3 py-2 rounded-12">
              <div className="d-flex flex-column">
                <div className="small txt-third mb-2">Notes</div>
                <h5 className="font-lg font-20">For buying some socks</h5>
              </div>
            </div>
            <this.App />
          </div>
        </div>
      </>
    );
  }
}

export default Confirmation;
