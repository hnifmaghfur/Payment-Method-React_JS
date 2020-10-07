import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Transfer extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
    this.getSearch = this.getSearch.bind(this);
  }

  async componentDidMount() {
    const response = await Axios.get("http://localhost:8000/api/search");
    this.setState({ data: response.data.data });
  }

  async getSearch(event) {
    if (!event.target.value) {
      const response = await Axios.get("http://localhost:8000/api/search");
      this.setState({ data: response.data.data });
    } else {
      const response = await Axios.get("http://localhost:8000/api/search", {
        params: {
          q: event.target.value,
        },
      });
      this.setState({ data: response.data.data });
    }
  }

  render() {
    return (
      <div className="rounded-12 shadow-sm bg-white h-100">
        <div className="d-flex flex-column px-4 py-2">
          <h5 className="font-lg font-25 my-3">Search Receiver</h5>
          <div className="input-container">
            <img src="asset/history/search.png" alt="" srcSet="" />
            <form className="w-100">
              <input
                type="search"
                className="input-search ml-2"
                placeholder="Search receiver here"
                onChange={this.getSearch}
              />
            </form>
          </div>
          {this.state.data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-sm mt-4 p-3 rounded-12"
              >
                <Link to="/" className="text-decoration-none">
                  <div className="d-flex flex-row align-items-center">
                    <img src="/asset/history/1.png" alt="" />
                    <div className="ml-3 text-dark">
                      <div className="font-lg font-20">
                        {item.firstName} {item.lastName}
                      </div>
                      <div className="font-medium font-15">{item.phone}</div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Transfer;
