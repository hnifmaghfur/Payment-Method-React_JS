import React, { Component } from "react";
import Axios from "axios";

class Topup extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:8000/api/topup").then((res) => {
      this.setState({ data: res.data.data });
    });
  }

  render() {
    return (
      <>
        {" "}
        <div className="rounded-12 shadow-sm bg-white h-100">
          <div className="d-flex flex-column px-4 py-2">
            <h5 className="font-lg font-25 my-3">How To Top Up</h5>
            {this.state.data.map((item, index) => {
              return (
                <div
                  className="bg-white shadow-sm mt-4 p-3 rounded-12"
                  key={item.id}
                >
                  <div className="d-flex flex-row align-items-center">
                    <div className="font-lg text-theme font-15 mr-3">
                      {item.id}
                    </div>
                    <div className="font-medium font-15">{item.textTopUp}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Topup;
