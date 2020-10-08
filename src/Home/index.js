import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
    this.path = window.location.href.split("/");
    this.id = this.path[this.path.length - 1];
    console.log(this.path);
  }

  componentDidMount() {
    Axios.get(`http://localhost:8000/api/users/${this.id}`).then((response) => {
      this.setState({ data: response.data.data[0] });
    });
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column rounded-12 bg-theme-2 h-100">
          <div className="bg-theme rounded-12 shadow-sm p-4">
            <div className="d-flex flex-lg-row flex-column justify-content-lg-between align-items-center">
              <div>
                <div className="my-2 text-white font-light">Balance</div>
                <h1 className="font-40 text-white my-3 font-lg">
                  Rp. {this.state.data.balance}
                </h1>
                <div className="my-2 text-white font-light">
                  {this.state.data.phone}
                </div>
              </div>
              <div className="d-flex flex-lg-column flex-row justify-content-between mt-lg-0 mt-1">
                <Link
                  to="/3/transfer"
                  className="btn bg-outline-grey text-white font-lg font-20 py-2 px-4 mb-0 mx-lg-0 mx-3 mb-lg-2 rounded-7"
                >
                  <img
                    src={require("../assets/img/transfer.svg")}
                    alt=""
                    className="d-none d-sm-inline mr-2"
                  />
                  Transfer
                </Link>

                <Link
                  to="/3/topup"
                  className="btn bg-outline-grey text-white font-lg font-20 py-2 px-4 mb-0 mx-lg-0 mx-3 mb-lg-2 rounded-7"
                >
                  <img
                    src={require("../assets/img/top-up.svg")}
                    alt=""
                    className="d-none d-sm-inline mr-2"
                  />
                  Top Up
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-4 h-100">
            <div className="col-lg-7 col-12 mb-lg-0 mb-3 h-100">
              <div className="bg-white rounded-12 shadow-sm p-4 h-100">
                <div className="row">
                  <div className="col-6">
                    <img src="asset/home/arrow-up.svg" alt="" />
                    <div className="small my-2 font-light">Income</div>
                    <div className="font-20 font-light">Rp.2.120.000</div>
                  </div>
                  <div className="col-6">
                    <img src={require("../assets/img/expense.svg")} alt="" />
                    <div className="small my-2 font-light">Expense</div>
                    <div className="font-20 font-light">Rp.1.560.000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 h-100">
              <div className="bg-white rounded-12 shadow-sm px-4 pt-4 pb-5 h-100">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="font-20 font-light">Transaction History</div>
                  <Link to="/history" className=" text-decoration-none">
                    <div className="font-light font-15">See All</div>
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="d-flex">
                    <img
                      height="54px"
                      width="54px"
                      src="/asset/home/1.png"
                      alt=""
                    />
                    <div className="ml-2">
                      <div className="font-20 font-light">Samuel Suhi</div>
                      <div className="small mt-2 font-light">Transfer</div>
                    </div>
                  </div>
                  <div className="text-success font-20 font-light">
                    +Rp.50.000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
